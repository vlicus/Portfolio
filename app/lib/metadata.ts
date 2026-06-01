import { localizePath, type Locale } from '@/lib/locale'
import { getMessages } from '@/lib/messages'

export type PageKey = 'home' | 'about' | 'projects' | 'resume'

export function getRootMetadata(locale: Locale) {
	const metadata = getMessages(locale).metadata

	return {
		...metadata,
		ogImageUrl: `${metadata.siteUrl}/og-image.png`
	}
}

export function getPageMetadata(locale: Locale) {
	return getMessages(locale).metadata.pages
}

const pageKeyByPath: Partial<Record<string, PageKey>> = {
	'/about': 'about',
	'/project': 'projects',
	'/resume': 'resume'
}

export function getPageMetadataByPath(locale: Locale, path: string) {
	const meta = getPageMetadata(locale)
	const key = pageKeyByPath[path] ?? 'home'
	return meta[key]
}

export function createRootHead(locale: Locale) {
	const rootMeta = getRootMetadata(locale)

	return {
		meta: [
			{ charSet: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: 'theme-color', content: '#140f23' },
			{ title: rootMeta.siteTitle },
			{ name: 'keywords', content: rootMeta.siteKeywords },
			{ name: 'author', content: rootMeta.siteAuthor },
			{ property: 'og:type', content: 'website' },
			{ property: 'og:site_name', content: rootMeta.siteTitle },
			{ property: 'og:image', content: rootMeta.ogImageUrl },
			{ property: 'og:image:alt', content: rootMeta.ogImageAlt },
			{ name: 'twitter:card', content: 'summary_large_image' },
			{ name: 'twitter:image', content: rootMeta.ogImageUrl }
		],
		links: [
			{ rel: 'icon', href: '/favicon.png', type: 'image/png' },
			{ rel: 'apple-touch-icon', href: '/favicon.png' },
			{ rel: 'manifest', href: '/manifest.json' }
		]
	}
}

export function createPageHead(locale: Locale, path: string, pageKey: PageKey) {
	const rootMeta = getRootMetadata(locale)
	const pageMeta = getPageMetadata(locale)[pageKey]
	const pageTitle = pageMeta.title === rootMeta.siteTitle ? pageMeta.title : `${pageMeta.title} | ${rootMeta.siteTitle}`
	const pageUrl = new URL(localizePath(path, locale, ''), rootMeta.siteUrl).toString()

	return {
		meta: [
			{ title: pageTitle },
			{ name: 'description', content: pageMeta.description },
			{ property: 'og:title', content: pageTitle },
			{ property: 'og:description', content: pageMeta.description },
			{ property: 'og:url', content: pageUrl },
			{ name: 'twitter:title', content: pageTitle },
			{ name: 'twitter:description', content: pageMeta.description }
		],
		links: [{ rel: 'canonical', href: pageUrl }]
	}
}
