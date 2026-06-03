import type { ContentFrontmatter, ContentType } from '@/lib/content'
import { HERO_IMAGE_ALT, SITE_NAME, SITE_URL_FALLBACK } from '@/lib/site-config'

interface ArticleStructuredDataProps {
	frontmatter: ContentFrontmatter
	contentType: ContentType
	locale: string
	slug: string
}

export function ArticleStructuredData({
	frontmatter,
	contentType,
	locale,
	slug,
}: ArticleStructuredDataProps) {
	const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || SITE_URL_FALLBACK
	const articleUrl =
		locale === 'en'
			? `${siteUrl}/${contentType}/${slug}`
			: `${siteUrl}/${locale}/${contentType}/${slug}`

	const breadcrumbData = {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: [
			{
				'@type': 'ListItem',
				position: 1,
				name: 'Home',
				item: siteUrl,
			},
			{
				'@type': 'ListItem',
				position: 2,
				name: contentType.charAt(0).toUpperCase() + contentType.slice(1),
				item: `${siteUrl}/${contentType}`,
			},
			{
				'@type': 'ListItem',
				position: 3,
				name: frontmatter.title,
				item: articleUrl,
			},
		],
	}

	const structuredData = {
		'@context': 'https://schema.org',
		'@type': 'Article',
		headline: frontmatter.title,
		description: frontmatter.description,
		image: frontmatter.image || `${siteUrl}/images/hero.webp`,
		datePublished: frontmatter.date,
		dateModified: ('lastModified' in frontmatter && frontmatter.lastModified) || frontmatter.date,
		inLanguage: locale,
		author: {
			'@type': 'Organization',
			name: SITE_NAME,
		},
		publisher: {
			'@type': 'Organization',
			name: SITE_NAME,
			url: siteUrl,
			logo: {
				'@type': 'ImageObject',
				url: `${siteUrl}/android-chrome-512x512.png`,
				width: 512,
				height: 512,
			},
			image: {
				'@type': 'ImageObject',
				url: `${siteUrl}/images/hero.webp`,
				caption: HERO_IMAGE_ALT,
			},
		},
		mainEntityOfPage: {
			'@type': 'WebPage',
			'@id': articleUrl,
		},
	}

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
			/>
		</>
	)
}
