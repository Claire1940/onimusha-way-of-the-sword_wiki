import { setRequestLocale } from 'next-intl/server'
import type { Metadata } from 'next'
import { getLatestArticles } from '@/lib/getLatestArticles'
import type { Language } from '@/lib/content'
import { buildLanguageAlternates } from '@/lib/i18n-utils'
import { type Locale } from '@/i18n/routing'
import {
  getHomeCopy,
  HERO_IMAGE_ALT,
  SITE_NAME,
  SITE_URL_FALLBACK,
} from '@/lib/site-config'
import HomePageClient from './HomePageClient'

interface PageProps {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params
  setRequestLocale(locale)
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || SITE_URL_FALLBACK
  const copy = getHomeCopy(locale)
  const canonicalUrl = locale === 'en' ? siteUrl : `${siteUrl}/${locale}`

  return {
    title: copy.seo.title,
    description: copy.seo.description,
    alternates: buildLanguageAlternates('/', locale as Locale, siteUrl),
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      locale,
      url: canonicalUrl,
      title: copy.seo.ogTitle,
      description: copy.seo.ogDescription,
      images: [
        {
          url: `${siteUrl}/images/hero.webp`,
          width: 1920,
          height: 1080,
          alt: HERO_IMAGE_ALT,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: copy.seo.twitterTitle,
      description: copy.seo.twitterDescription,
      images: [`${siteUrl}/images/hero.webp`],
      creator: '@OnimushaGame',
    },
  }
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params
  setRequestLocale(locale)

  const latestArticles = await getLatestArticles(locale as Language, 30)

  return <HomePageClient latestArticles={latestArticles} locale={locale} />
}
