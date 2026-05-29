import { createContext, useContext, type ReactNode } from 'react'
import { useRouter, useRouterState } from '@tanstack/react-router'

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
		const { pathname, searchStr: currentSearch } = router.state.location
		const params = new URLSearchParams(currentSearch)
		params.set('lang', nextLocale)
		void router.navigate({
			href: `${pathname}?${params.toString()}`,
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
