import type { Metadata } from 'next'
import { buildLanguageAlternates } from '@/lib/i18n-utils'
import { type Locale } from '@/i18n/routing'
import {
  COPYRIGHT_EMAIL,
  DMCA_EMAIL,
  HERO_IMAGE_ALT,
  LEGAL_LAST_UPDATED,
  SITE_NAME,
  SITE_URL_FALLBACK,
} from '@/lib/site-config'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || SITE_URL_FALLBACK
  const path = '/copyright'
  const title = `Copyright Notice - ${SITE_NAME}`
  const description = `Copyright and fair-use notice for ${SITE_NAME}, including takedown contact details.`

  return {
    title,
    description,
    robots: {
      index: false,
      follow: true,
      googleBot: {
        index: false,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale,
      url: locale === 'en' ? `${siteUrl}${path}` : `${siteUrl}/${locale}${path}`,
      siteName: SITE_NAME,
      title,
      description,
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
      title,
      description,
      images: [`${siteUrl}/images/hero.webp`],
    },
    alternates: buildLanguageAlternates(path, locale as Locale, siteUrl),
  }
}

export default function Copyright() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative border-b border-border px-4 py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Copyright Notice
          </h1>
          <p className="mb-2 text-lg text-slate-300">
            Ownership, fair-use, and takedown information for site content and referenced game assets.
          </p>
          <p className="text-sm text-slate-400">Last Updated: {LEGAL_LAST_UPDATED}</p>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>1. Site Content</h2>
            <p>
              © 2026 {SITE_NAME}. Original site copy, editorial structure, and custom presentation
              are owned by the site unless otherwise noted.
            </p>

            <h2>2. Game IP and Trademarks</h2>
            <p>
              Onimusha: Way of the Sword, Capcom marks, platform marks, trailers, screenshots, logos,
              and related promotional assets remain the property of their respective owners.
            </p>
            <p>
              {SITE_NAME} is an unofficial fan-made project and is not affiliated with or endorsed by
              Capcom or any platform holder.
            </p>

            <h2>3. Fair Use</h2>
            <p>
              Commentary, guide writing, and limited use of publicly released promotional material are
              presented for informational, referential, and editorial purposes. If a rights holder
              believes any material should be removed, contact us and we will review it promptly.
            </p>

            <h2>4. Reuse Restrictions</h2>
            <ul>
              <li>Do not republish large portions of original site copy without permission.</li>
              <li>Do not present this site&apos;s guides or branding as official Capcom material.</li>
              <li>Provide clear attribution if you quote small excerpts for commentary.</li>
            </ul>

            <h2>5. Takedown Requests</h2>
            <p>
              Copyright concerns, ownership disputes, or takedown notices can be sent to{' '}
              <a
                href={`mailto:${DMCA_EMAIL}`}
                className="text-[hsl(var(--nav-theme-light))] hover:underline"
              >
                {DMCA_EMAIL}
              </a>
              .
            </p>

            <h2>6. General Copyright Contact</h2>
            <p>
              For attribution or reuse questions, email{' '}
              <a
                href={`mailto:${COPYRIGHT_EMAIL}`}
                className="text-[hsl(var(--nav-theme-light))] hover:underline"
              >
                {COPYRIGHT_EMAIL}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
