import { defaultLocale, type Locale } from '@/lib/locale'
import { getMessages } from '@/lib/messages'

type PageMetadata = {
	title: string
	description: string
	path: string
}

export function getRootMetadata(locale: Locale) {
	const metadata = getMessages(locale).metadata

	return {
		siteTitle: metadata.siteTitle,
		siteDescription: metadata.siteDescription,
		siteKeywords: metadata.siteKeywords,
		siteAuthor: metadata.siteAuthor,
		siteUrl: metadata.siteUrl,
		ogImageAlt: metadata.ogImageAlt,
		ogImageUrl: `${metadata.siteUrl}/og-image.png`
	}
}

export function getPageMetadata(locale: Locale) {
	return getMessages(locale).metadata.pages
}

export function getPageMetadataByPath(locale: Locale, path: string) {
	const metadata = getPageMetadata(locale)
	const basePath = path

	if (basePath === '/about') {
		return metadata.about
	}

	if (basePath === '/project') {
		return metadata.projects
	}

	if (basePath === '/resume') {
		return metadata.resume
	}

	return metadata.home
}

const defaultRootMetadata = getRootMetadata(defaultLocale)

export const siteTitle = defaultRootMetadata.siteTitle
export const siteDescription = defaultRootMetadata.siteDescription
export const siteUrl = defaultRootMetadata.siteUrl
export const ogImageUrl = defaultRootMetadata.ogImageUrl
export const siteKeywords = defaultRootMetadata.siteKeywords
export const siteAuthor = defaultRootMetadata.siteAuthor
export const ogImageAlt = defaultRootMetadata.ogImageAlt
export const pageMetadata = getPageMetadata(defaultLocale)

export function createPageHead({ title, description, path = '/' }: PageMetadata) {
	const pageUrl = new URL(path, siteUrl).toString()
	const pageTitle = title === siteTitle ? title : `${title} | ${siteTitle}`

	return {
		meta: [
			{ title: pageTitle },
			{ name: 'description', content: description },
			{ property: 'og:title', content: pageTitle },
			{ property: 'og:description', content: description },
			{ property: 'og:url', content: pageUrl },
			{ name: 'twitter:title', content: pageTitle },
			{ name: 'twitter:description', content: description }
		],
		links: [{ rel: 'canonical', href: pageUrl }]
	}
}
