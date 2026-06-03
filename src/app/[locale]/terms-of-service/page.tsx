import type { Metadata } from 'next'
import { buildLanguageAlternates } from '@/lib/i18n-utils'
import { type Locale } from '@/i18n/routing'
import {
  HERO_IMAGE_ALT,
  LEGAL_EMAIL,
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
  const path = '/terms-of-service'
  const title = `Terms of Service - ${SITE_NAME}`
  const description = `Terms of service for ${SITE_NAME}, including acceptable use, content ownership, and disclaimers.`

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

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative border-b border-border px-4 py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Terms of Service
          </h1>
          <p className="mb-2 text-lg text-slate-300">
            Conditions for using {SITE_NAME} and its fan-made game guide content.
          </p>
          <p className="text-sm text-slate-400">Last Updated: {LEGAL_LAST_UPDATED}</p>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>1. Acceptance</h2>
            <p>
              By using {SITE_NAME}, you agree to these terms. If you do not agree, do not use the
              website.
            </p>

            <h2>2. Service Description</h2>
            <p>
              {SITE_NAME} is an unofficial fan resource focused on Onimusha: Way of the Sword,
              including release information, demo coverage, combat explanations, and strategy guides.
            </p>

            <h2>3. Acceptable Use</h2>
            <ul>
              <li>Do not use the site for unlawful, abusive, or fraudulent activity.</li>
              <li>Do not attempt to disrupt, scrape, or reverse engineer the website.</li>
              <li>Do not impersonate the site, its maintainers, or official game publishers.</li>
              <li>Do not post or submit infringing, malicious, or misleading material.</li>
            </ul>

            <h2>4. Content and Ownership</h2>
            <p>
              Original site text, layout, and editorial content belong to {SITE_NAME} unless stated
              otherwise. Game names, logos, trailers, screenshots, and other official assets remain
              the property of their respective owners.
            </p>

            <h2>5. Unofficial Status</h2>
            <p>
              This site is unofficial and fan-made. It is not affiliated with, endorsed by, or
              sponsored by Capcom, PlayStation, Xbox, Steam, or any related rights holder.
            </p>

            <h2>6. No Warranty</h2>
            <p>
              The website is provided on an &quot;as is&quot; basis. We try to keep release, demo, and gameplay
              information accurate, but details can change and we make no guarantee that all content
              is complete, current, or error-free.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
              To the maximum extent allowed by law, {SITE_NAME} is not liable for losses arising from
              your use of the site, reliance on its content, temporary downtime, or third-party links
              and embeds.
            </p>

            <h2>8. External Links</h2>
            <p>
              The site links to third-party services such as Capcom, Steam, YouTube, Reddit, X,
              PlayStation, and Xbox. We are not responsible for those external sites or their terms.
            </p>

            <h2>9. Changes</h2>
            <p>
              We may revise these terms at any time by updating this page. Continued use of the site
              after changes means you accept the revised terms.
            </p>

            <h2>10. Contact</h2>
            <p>
              Legal questions can be sent to{' '}
              <a
                href={`mailto:${LEGAL_EMAIL}`}
                className="text-[hsl(var(--nav-theme-light))] hover:underline"
              >
                {LEGAL_EMAIL}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
