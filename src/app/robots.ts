import { MetadataRoute } from 'next'
import { SITE_URL_FALLBACK } from '@/lib/site-config'

// output:'export' 要求路由处理器显式声明静态
export const dynamic = 'force-static'

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
