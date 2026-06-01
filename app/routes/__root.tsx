import type { ReactNode } from 'react'
import '../styles/global.css'
import { HeadContent, Link, Outlet, Scripts, createRootRoute } from '@tanstack/react-router'

import { SiteHeader } from '@/components/site-header'
import { I18nProvider, useI18n } from '@/lib/i18n'
import { defaultLocale, validateRootSearch } from '@/lib/locale'
import { useTranslations } from '@/lib/messages'
import { createRootHead } from '@/lib/metadata'

export const Route = createRootRoute({
	validateSearch: validateRootSearch,
	head: () => createRootHead(defaultLocale),
	notFoundComponent: NotFoundPage,
	component: RootComponent
})

function RootComponent() {
	return (
		<I18nProvider>
			<RootDocument>
				<Outlet />
			</RootDocument>
		</I18nProvider>
	)
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
	const { locale } = useI18n()
	const messages = useTranslations()

	return (
		<html lang={locale} className='dark'>
			<head>
				<HeadContent />
			</head>
			<body className='min-h-screen bg-stone-950 text-stone-100 antialiased'>
				<a
					href='#main-content'
					className='sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-cyan-300 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-950'>
					{messages.site.skipToContentLabel}
				</a>
				<div className='relative min-h-screen'>
					<SiteHeader />
					{children}
				</div>
				<Scripts />
			</body>
		</html>
	)
}

function NotFoundPage() {
	return (
		<I18nProvider>
			<NotFoundPageContent />
		</I18nProvider>
	)
}

function NotFoundPageContent() {
	const { locale } = useI18n()
	const messages = useTranslations()
	const { navigationLabels, notFound } = messages.site
	const localizedSearch = { lang: locale }

	return (
		<RootDocument>
			<main id='main-content' className='mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-3xl flex-col items-start justify-center gap-6 px-6 py-16'>
				<p className='text-sm font-medium uppercase tracking-[0.3em] text-cyan-300'>{notFound.eyebrow}</p>
				<div className='space-y-3'>
					<h1 className='text-4xl font-semibold tracking-tight text-white'>{notFound.title}</h1>
					<p className='max-w-xl text-base leading-7 text-stone-300'>{notFound.description}</p>
				</div>
				<div className='flex flex-wrap gap-3'>
					{[
						{ to: '/', label: notFound.goHomeLabel },
						{ to: '/about', label: navigationLabels.about },
						{ to: '/project', label: navigationLabels.projects }
					].map(link => (
						<Link
							key={link.to}
							className={
								link.to === '/'
									? 'rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-stone-950 transition hover:bg-cyan-300'
									: 'rounded-full border border-stone-700 px-5 py-2 text-sm font-semibold text-stone-100 transition hover:border-stone-500 hover:bg-stone-900'
							}
							search={localizedSearch}
							to={link.to}>
							{link.label}
						</Link>
					))}
				</div>
			</main>
		</RootDocument>
	)
}
