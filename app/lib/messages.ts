import en from '@/messages/en.json'
import ca from '@/messages/ca.json'
import es from '@/messages/es.json'

import { useI18n } from '@/lib/i18n'
import type { Locale } from '@/lib/locale'

const messageCatalogs = {
	en,
	ca,
	es
} satisfies Record<Locale, typeof en>

export type Messages = typeof en

export function getMessages(locale: Locale): Messages {
	return messageCatalogs[locale]
}

export function useTranslations(): Messages {
	const { locale } = useI18n()

	return getMessages(locale)
}
