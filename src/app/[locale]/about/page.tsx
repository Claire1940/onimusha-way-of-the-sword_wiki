import type { Metadata } from 'next'
import { buildLanguageAlternates } from '@/lib/i18n-utils'
import { type Locale } from '@/i18n/routing'
import {
  CONTACT_EMAIL,
  HERO_IMAGE_ALT,
  LEGAL_LAST_UPDATED,
  OFFICIAL_SITE_URL,
  REDDIT_URL,
  SITE_NAME,
  SITE_URL_FALLBACK,
  STEAM_COMMUNITY_URL,
  STEAM_URL,
  X_URL,
} from '@/lib/site-config'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || SITE_URL_FALLBACK
  const path = '/about'
  const title = `About ${SITE_NAME}`
  const description = `About ${SITE_NAME}, an unofficial fan-made resource focused on release details, demo coverage, combat systems, and guides.`

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

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative border-b border-border px-4 py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            About {SITE_NAME}
          </h1>
          <p className="mb-2 text-lg text-slate-300">
            An unofficial fan-made hub for release, demo, combat, and guide coverage.
          </p>
          <p className="text-sm text-slate-400">Last Updated: {LEGAL_LAST_UPDATED}</p>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>What This Site Covers</h2>
            <p>
              {SITE_NAME} tracks the core topics players care about most: release timing, demo access,
              combat systems, bosses, characters, editions, and platform details for Onimusha: Way of
              the Sword.
            </p>

            <h2>Editorial Focus</h2>
            <ul>
              <li>Release date and platform information for PS5, Xbox Series X|S, and PC.</li>
              <li>Demo availability, trailer coverage, and official news references.</li>
              <li>Combat explainers for parries, Issen, Oni Gauntlet systems, and boss fights.</li>
              <li>Guide content organized for fast navigation instead of general fan chatter.</li>
            </ul>

            <h2>Unofficial Status</h2>
            <p>
              This site is unofficial and community-run. It is not affiliated with, endorsed by, or
              operated by Capcom or any platform holder.
            </p>

            <h2>Useful External Links</h2>
            <ul>
              <li>
                <a href={OFFICIAL_SITE_URL} target="_blank" rel="noopener noreferrer">
                  Official Website
                </a>
              </li>
              <li>
                <a href={STEAM_URL} target="_blank" rel="noopener noreferrer">
                  Steam Store
                </a>
              </li>
              <li>
                <a href={STEAM_COMMUNITY_URL} target="_blank" rel="noopener noreferrer">
                  Steam Community
                </a>
              </li>
              <li>
                <a href={X_URL} target="_blank" rel="noopener noreferrer">
                  Official X
                </a>
              </li>
              <li>
                <a href={REDDIT_URL} target="_blank" rel="noopener noreferrer">
                  Onimusha Reddit
                </a>
              </li>
            </ul>

            <h2>Contact</h2>
            <p>
              General questions, corrections, and contribution notes can be sent to{' '}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-[hsl(var(--nav-theme-light))] hover:underline"
              >
                {CONTACT_EMAIL}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
