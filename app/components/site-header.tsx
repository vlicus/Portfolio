import { useEffect, useState } from 'react'
import { Code2, FileText, FolderKanban, Home, Languages, Menu, User, X } from 'lucide-react'
import { Link, useRouterState } from '@tanstack/react-router'

import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
// import { logoImage } from '@/lib/assets'
import { SITE_HEADER_SCROLL_OFFSET_PX, SITE_NAV_ITEMS } from '../lib/constants'
import { useI18n } from '@/lib/i18n'
import { normalizeLocale } from '@/lib/locale'
import { useTranslations } from '@/lib/messages'
import { name, portfolioRepoUrl } from '@/lib/site'
import { cn } from '@/lib/utils'

const navIcons = {
	home: Home,
	about: User,
	projects: FolderKanban,
	resume: FileText
} as const

export function SiteHeader() {
	const { locale, localeOptions, setLocale } = useI18n()
	const messages = useTranslations()
	const { pathname } = useRouterState({
		select: state => ({
			pathname: state.location.pathname
		})
	})
	const basePath = pathname
	const localizedSearch = { lang: locale }
	const { header, navigationLabels, siteLabel } = messages.site
	const navigationItems = SITE_NAV_ITEMS.map(item => ({
		...item,
		label: navigationLabels[item.labelKey],
		icon: navIcons[item.labelKey]
	}))
	const { closeMenuLabel, languageLabel, /* logoAlt, */ mobileNavLabel, openMenuLabel, primaryNavLabel, sourceLabel } = header
	const [isOpen, setIsOpen] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY >= SITE_HEADER_SCROLL_OFFSET_PX)
		}

		handleScroll()
		window.addEventListener('scroll', handleScroll)

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	function handleLocaleChange(value: string) {
		setLocale(normalizeLocale(value))
	}

	function renderLocaleSelect(mode: 'desktop' | 'mobile') {
		const isMobile = mode === 'mobile'
		const triggerLabel = localeOptions.find(option => option.value === locale)?.shortLabel ?? locale.toUpperCase()

		return (
			<div
				className={cn(
					'relative inline-flex items-center gap-2 overflow-hidden border border-cyan-300/12 bg-slate-950/90 text-stone-100 shadow-lg shadow-slate-950/30 ring-1 ring-white/5 transition duration-200 hover:border-cyan-300/20 hover:bg-slate-950',
					isMobile ? 'w-full rounded-2xl px-4 py-3' : 'rounded-full px-3 py-2'
				)}>
				<div aria-hidden className='absolute inset-x-0 top-0 h-10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),transparent)]' />
				<Languages className='size-4 shrink-0 text-stone-300' />
				{isMobile ? <span className='text-sm font-medium text-stone-100'>{languageLabel}</span> : <span className='sr-only'>{languageLabel}</span>}
				<Select onValueChange={handleLocaleChange} value={locale}>
					<SelectTrigger
						aria-label={languageLabel}
						className={cn(
							'relative border-0 bg-transparent px-0 py-0 shadow-none hover:bg-transparent focus-visible:border-transparent focus-visible:ring-0 data-[state=open]:bg-transparent',
							isMobile
								? 'ml-auto h-auto min-w-[4.5rem] justify-end gap-2 text-sm font-semibold'
								: 'h-auto min-w-[2.75rem] justify-end gap-1 text-xs font-semibold uppercase tracking-[0.2em]'
						)}>
						<SelectValue>{triggerLabel}</SelectValue>
					</SelectTrigger>
					<SelectContent align={isMobile ? 'end' : 'center'} side='bottom'>
						{localeOptions.map(({ value, shortLabel, label }) => (
							<SelectItem key={value} value={value}>
								{isMobile ? label : shortLabel}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>
		)
	}

	return (
		<header className='sticky top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4'>
			<div
				className={cn(
					'relative mx-auto flex w-full max-w-6xl flex-col rounded-[1.5rem] border border-white/10 bg-stone-950/75 px-3 py-2.5 shadow-lg shadow-black/20 backdrop-blur transition sm:px-6 sm:py-3',
					isScrolled && 'border-cyan-300/15 bg-stone-950/90 shadow-2xl shadow-cyan-950/10'
				)}>
				<div className='flex items-center justify-between gap-4'>
					<Link className='flex min-w-0 items-center gap-2 sm:gap-3' onClick={() => setIsOpen(false)} search={localizedSearch} to='/'>
						{/* <img alt={logoAlt} className='h-9 w-9 rounded-full border border-white/10 bg-white/5 object-contain p-1 sm:h-10 sm:w-10' src={logoImage} /> */}
						<div className='min-w-0'>
							<p className='truncate text-sm font-semibold tracking-wide text-white'>{name}</p>
							<p className='hidden text-xs uppercase tracking-[0.25em] text-stone-400 sm:block'>{siteLabel}</p>
						</div>
					</Link>

					<nav aria-label={primaryNavLabel} className='hidden items-center gap-2 md:flex'>
						{navigationItems.map(({ basePath: itemBasePath, label, icon: Icon }) => {
							const isActive = basePath === itemBasePath

							return (
								<Link
									aria-current={isActive ? 'page' : undefined}
									key={itemBasePath}
									className={cn(
										'inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition duration-200',
										isActive
											? 'border-cyan-300/70 bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-950/20'
											: 'border-transparent text-stone-200 hover:-translate-y-0.5 hover:border-cyan-300/20 hover:bg-cyan-300/10 hover:text-white'
									)}
									search={localizedSearch}
									to={itemBasePath}>
									<Icon className='size-4' />
									{label}
								</Link>
							)
						})}

						{renderLocaleSelect('desktop')}

						<Button asChild size='sm' variant='outline' className='border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white'>
							<a href={portfolioRepoUrl} rel='noopener noreferrer' target='_blank'>
								<Code2 className='size-4' />
								{sourceLabel}
							</a>
						</Button>
					</nav>

					<button
						aria-controls='mobile-navigation'
						aria-expanded={isOpen}
						aria-label={isOpen ? closeMenuLabel : openMenuLabel}
						className='inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-stone-100 transition hover:bg-white/10 md:hidden'
						onClick={() => setIsOpen(open => !open)}
						type='button'>
						{isOpen ? <X className='size-4' /> : <Menu className='size-4' />}
					</button>
				</div>

				{isOpen ? (
					<>
						<button aria-hidden className='fixed inset-0 z-[-1] bg-slate-950/20 md:hidden' onClick={() => setIsOpen(false)} tabIndex={-1} type='button' />
						<nav
							aria-label={mobileNavLabel}
							id='mobile-navigation'
							className='absolute left-0 right-0 top-[calc(100%+0.75rem)] z-20 grid gap-2 overflow-hidden rounded-[1.5rem] border border-cyan-300/12 bg-slate-950 p-3 shadow-2xl shadow-slate-950/60 ring-1 ring-white/5 md:hidden'>
							<div aria-hidden className='absolute inset-x-0 top-0 h-16 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),transparent)]' />
							<div aria-hidden className='absolute right-0 top-0 h-24 w-24 rounded-full bg-cyan-300/10 blur-3xl' />
							{renderLocaleSelect('mobile')}

							{navigationItems.map(({ basePath: itemBasePath, label, icon: Icon }) => {
								const isActive = basePath === itemBasePath

								return (
									<Link
										aria-current={isActive ? 'page' : undefined}
										key={itemBasePath}
										className={cn(
											'relative inline-flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm font-medium transition duration-200',
											isActive
												? 'border-cyan-300/70 bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-950/20'
												: 'border-white/10 bg-white/[0.03] text-stone-100 hover:-translate-y-0.5 hover:border-cyan-300/25 hover:bg-cyan-300/10 hover:text-cyan-50'
										)}
										onClick={() => setIsOpen(false)}
										search={localizedSearch}
										to={itemBasePath}>
										<Icon className='size-4' />
										{label}
									</Link>
								)
							})}

							<a
								className='inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-stone-100 transition duration-200 hover:-translate-y-0.5 hover:border-cyan-300/25 hover:bg-cyan-300/10 hover:text-cyan-50'
								href={portfolioRepoUrl}
								onClick={() => setIsOpen(false)}
								rel='noopener noreferrer'
								target='_blank'>
								<Code2 className='size-4' />
								{sourceLabel}
							</a>
						</nav>
					</>
				) : null}
			</div>
		</header>
	)
}
