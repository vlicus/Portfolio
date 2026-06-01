import { createContext, useContext, type ReactNode } from 'react'
import { useRouter, useRouterState } from '@tanstack/react-router'

import type { RootSearch } from '@/lib/locale'
import { getLocaleFromSearch, localeOptions, type Locale, type LocaleOption } from '@/lib/locale'

type I18nContextValue = {
	locale: Locale
	setLocale: (locale: Locale) => void
	localeOptions: LocaleOption[]
}

const I18nContext = createContext<I18nContextValue | null>(null)

export function I18nProvider({ children }: Readonly<{ children: ReactNode }>) {
	const router = useRouter()
	const searchStr = useRouterState({
		select: state => state.location.searchStr
	})
	const locale = getLocaleFromSearch(searchStr)

	function setLocale(nextLocale: Locale) {
		const { pathname } = router.state.location
		void router.navigate({
			to: pathname,
			search: previous => ({
				...(previous as RootSearch),
				lang: nextLocale
			}),
			replace: true
		})
	}

	return <I18nContext.Provider value={{ locale, setLocale, localeOptions }}>{children}</I18nContext.Provider>
}

export function useI18n() {
	const context = useContext(I18nContext)

	if (!context) {
		throw new Error('useI18n must be used within an I18nProvider')
	}

	return context
}
