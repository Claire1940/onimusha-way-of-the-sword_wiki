import type { Metadata } from 'next'
import { buildLanguageAlternates } from '@/lib/i18n-utils'
import { type Locale } from '@/i18n/routing'
import {
  HERO_IMAGE_ALT,
  LEGAL_LAST_UPDATED,
  PRIVACY_EMAIL,
  SITE_NAME,
  SITE_URL_FALLBACK,
} from '@/lib/site-config'

interface Props {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || SITE_URL_FALLBACK
  const path = '/privacy-policy'
  const title = `Privacy Policy - ${SITE_NAME}`
  const description = `Privacy policy for ${SITE_NAME}, including analytics, cookies, and contact details for data requests.`

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

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative border-b border-border px-4 py-20">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mb-2 text-lg text-slate-300">
            How {SITE_NAME} handles analytics, cookies, and basic usage data.
          </p>
          <p className="text-sm text-slate-400">Last Updated: {LEGAL_LAST_UPDATED}</p>
        </div>
      </section>

      <section className="px-4 py-12">
        <div className="container mx-auto max-w-4xl">
          <div className="prose prose-invert prose-slate max-w-none">
            <h2>1. Scope</h2>
            <p>
              {SITE_NAME} is an unofficial fan-made guide site for Onimusha: Way of the Sword.
              This policy explains what limited information we collect when you browse the site and
              how that information is used.
            </p>

            <h2>2. Information We Collect</h2>
            <ul>
              <li>Basic analytics data such as page views, device type, browser, and referrer.</li>
              <li>Technical data needed to keep the site available, secure, and performant.</li>
              <li>Local preference data such as language or theme settings stored in your browser.</li>
            </ul>
            <p>
              We do not require account creation and we do not intentionally collect sensitive
              personal information through normal site browsing.
            </p>

            <h2>3. Cookies and Similar Technologies</h2>
            <p>
              The site may use cookies, local storage, and similar browser technologies to remember
              preferences, measure traffic, and support advertising or analytics integrations.
            </p>
            <p>
              You can control cookies through your browser settings. Disabling them may affect parts
              of the site experience.
            </p>

            <h2>4. How We Use Data</h2>
            <ul>
              <li>Operate, maintain, and improve the website.</li>
              <li>Measure which guides and resources are most useful to visitors.</li>
              <li>Detect abuse, reliability issues, or broken pages.</li>
              <li>Support security, moderation, and legal compliance.</li>
            </ul>

            <h2>5. Third-Party Services</h2>
            <p>
              The site may rely on third-party services such as hosting providers, analytics tools,
              embedded YouTube players, advertising networks, and external links to platforms like
              Capcom, Steam, Reddit, X, PlayStation, and Xbox. Those services operate under their
              own privacy policies.
            </p>

            <h2>6. Data Retention</h2>
            <p>
              We keep analytics and operational records only as long as reasonably needed for site
              operation, reporting, security, or legal obligations.
            </p>

            <h2>7. Children&apos;s Privacy</h2>
            <p>
              {SITE_NAME} is intended for a general audience and is not directed at children under 13.
              We do not knowingly collect personal information from children.
            </p>

            <h2>8. Your Choices</h2>
            <ul>
              <li>Clear cookies or local storage in your browser at any time.</li>
              <li>Use browser or platform tools to limit personalized ads or analytics.</li>
              <li>Contact us to request removal of information you believe identifies you.</li>
            </ul>

            <h2>9. Policy Updates</h2>
            <p>
              We may update this policy as the site changes. Material updates will be reflected by
              revising the date at the top of this page.
            </p>

            <h2>10. Contact</h2>
            <p>
              Privacy questions or data requests can be sent to{' '}
              <a
                href={`mailto:${PRIVACY_EMAIL}`}
                className="text-[hsl(var(--nav-theme-light))] hover:underline"
              >
                {PRIVACY_EMAIL}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
