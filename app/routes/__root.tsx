import type { ReactNode } from 'react'
import '../styles/global.css'
import { HeadContent, Link, Outlet, Scripts, createRootRoute, useRouterState } from '@tanstack/react-router'

import { SiteHeader } from '@/components/site-header'
import { I18nProvider, useI18n } from '@/lib/i18n'
import { localizePath, validateRootSearch } from '@/lib/locale'
import { useTranslations } from '@/lib/messages'
import { getPageMetadataByPath, getRootMetadata } from '@/lib/metadata'

export const Route = createRootRoute({
	validateSearch: validateRootSearch,
	head: () => ({
		meta: [{ charSet: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { name: 'theme-color', content: '#140f23' }],
		links: [
			{ rel: 'icon', href: '/favicon.png', type: 'image/png' },
			{ rel: 'apple-touch-icon', href: '/favicon.png' },
			{ rel: 'manifest', href: '/manifest.json' }
		]
	}),
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
				<LocalizedHead />
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

function LocalizedHead() {
	const { locale } = useI18n()
	const { pathname, search } = useRouterState({
		select: state => ({
			pathname: state.location.pathname,
			search: state.location.searchStr
		})
	})
	const rootMetadata = getRootMetadata(locale)
	const pageMetadata = getPageMetadataByPath(locale, pathname)
	const pageTitle = pageMetadata.title === rootMetadata.siteTitle ? pageMetadata.title : `${pageMetadata.title} | ${rootMetadata.siteTitle}`
	const pageUrl = new URL(localizePath(pathname, locale, search), rootMetadata.siteUrl).toString()

	return (
		<>
			<title>{pageTitle}</title>
			<meta content={pageMetadata.description} name='description' />
			<meta content={rootMetadata.siteKeywords} name='keywords' />
			<meta content={rootMetadata.siteAuthor} name='author' />
			<meta content='website' property='og:type' />
			<meta content={rootMetadata.siteTitle} property='og:site_name' />
			<meta content={pageTitle} property='og:title' />
			<meta content={pageMetadata.description} property='og:description' />
			<meta content={pageUrl} property='og:url' />
			<meta content={rootMetadata.ogImageUrl} property='og:image' />
			<meta content={rootMetadata.ogImageAlt} property='og:image:alt' />
			<meta content='summary_large_image' name='twitter:card' />
			<meta content={pageTitle} name='twitter:title' />
			<meta content={pageMetadata.description} name='twitter:description' />
			<meta content={rootMetadata.ogImageUrl} name='twitter:image' />
			<link href={pageUrl} rel='canonical' />
		</>
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
