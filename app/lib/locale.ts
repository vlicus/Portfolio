export type Locale = 'en' | 'ca' | 'es'

export type LocaleOption = {
	value: Locale
	label: string
	shortLabel: string
}

export const defaultLocale: Locale = 'en'
export const locales: Locale[] = ['en', 'ca', 'es']

export const localeOptions: LocaleOption[] = [
	{ value: 'en', label: 'English', shortLabel: 'EN' },
	{ value: 'ca', label: 'Català', shortLabel: 'CAT' },
	{ value: 'es', label: 'Español', shortLabel: 'ES' }
]

export type RootSearch = { lang?: Locale }

export function validateRootSearch(search: Record<string, unknown>): RootSearch {
	return { lang: isLocale(search.lang as string | null | undefined) ? (search.lang as Locale) : undefined }
}

export function isLocale(value?: string | null): value is Locale {
	return locales.includes(value as Locale)
}

export function normalizeLocale(value?: string | null): Locale {
	if (!isLocale(value)) {
		return defaultLocale
	}

	return value
}

export function getLocaleFromSearch(search: string | URLSearchParams): Locale {
	const searchParams = typeof search === 'string' ? new URLSearchParams(search) : search

	return normalizeLocale(searchParams.get('lang'))
}

export function localizePath(pathname: string, locale: Locale, search?: string | URLSearchParams): string {
	const normalizedPath = pathname || '/'
	const searchParams = typeof search === 'string' ? new URLSearchParams(search) : new URLSearchParams(search)

	searchParams.set('lang', locale)

	const query = searchParams.toString()

	return query ? `${normalizedPath}?${query}` : normalizedPath
}
