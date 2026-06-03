import { MetadataRoute } from 'next'
import { SITE_URL_FALLBACK } from '@/lib/site-config'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || SITE_URL_FALLBACK

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
