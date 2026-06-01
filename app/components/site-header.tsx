import { useEffect, useState } from 'react'
import { Code2, FileText, FolderKanban, Home, Languages, Menu, User, X } from 'lucide-react'
import { Link, useRouterState } from '@tanstack/react-router'

import { Button } from '@/components/ui/button'
import { logoImage } from '@/lib/assets'
import { useI18n } from '@/lib/i18n'
import { normalizeLocale } from '@/lib/locale'
import { useTranslations } from '@/lib/messages'
import { personName, portfolioRepoUrl } from '@/lib/site'
import { cn } from '@/lib/utils'

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
	const { closeMenuLabel, languageLabel, logoAlt, mobileNavLabel, openMenuLabel, primaryNavLabel, sourceLabel } = header
	const [isOpen, setIsOpen] = useState(false)
	const [isScrolled, setIsScrolled] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY >= 20)
		}

		handleScroll()
		window.addEventListener('scroll', handleScroll)

		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	function handleLocaleChange(value: string) {
		setLocale(normalizeLocale(value))
	}

	return (
		<header className='sticky top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-4'>
			<div
				className={cn(
					'mx-auto flex w-full max-w-6xl flex-col rounded-[1.5rem] border border-white/10 bg-stone-950/75 px-3 py-2.5 shadow-lg shadow-black/20 backdrop-blur transition sm:px-6 sm:py-3',
					isScrolled && 'border-cyan-300/15 bg-stone-950/90 shadow-2xl shadow-cyan-950/10'
				)}>
				<div className='flex items-center justify-between gap-4'>
					<Link className='flex min-w-0 items-center gap-2 sm:gap-3' search={localizedSearch} to='/'>
						<img alt={logoAlt} className='h-9 w-9 rounded-full border border-white/10 bg-white/5 object-contain p-1 sm:h-10 sm:w-10' src={logoImage} />
						<div className='min-w-0'>
							<p className='truncate text-sm font-semibold tracking-wide text-white'>{personName}</p>
							<p className='hidden text-xs uppercase tracking-[0.25em] text-stone-400 sm:block'>{siteLabel}</p>
						</div>
					</Link>

					<nav aria-label={primaryNavLabel} className='hidden items-center gap-2 md:flex'>
						{[
							{ basePath: '/', label: navigationLabels.home, icon: Home },
							{ basePath: '/about', label: navigationLabels.about, icon: User },
							{ basePath: '/project', label: navigationLabels.projects, icon: FolderKanban },
							{ basePath: '/resume', label: navigationLabels.resume, icon: FileText }
						].map(({ basePath: itemBasePath, label, icon: Icon }) => {
							const isActive = basePath === itemBasePath

							return (
								<Link
									aria-current={isActive ? 'page' : undefined}
									key={itemBasePath}
									className={cn(
										'inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition',
										isActive ? 'bg-cyan-300 text-slate-950' : 'text-stone-200 hover:bg-white/10 hover:text-white'
									)}
									search={localizedSearch}
									to={itemBasePath}>
									<Icon className='size-4' />
									{label}
								</Link>
							)
						})}

						<label className='inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-stone-100 transition hover:bg-white/10'>
							<Languages className='size-4 text-stone-300' />
							<span className='sr-only'>{languageLabel}</span>
							<select
								aria-label={languageLabel}
								className='min-w-[3.75rem] appearance-none bg-transparent text-xs font-semibold uppercase tracking-[0.2em] text-stone-100 outline-none'
								onChange={event => handleLocaleChange(event.target.value)}
								value={locale}>
								{localeOptions.map(({ value, shortLabel }) => (
									<option key={value} className='bg-stone-950 text-stone-100' value={value}>
										{shortLabel}
									</option>
								))}
							</select>
						</label>

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
					<nav aria-label={mobileNavLabel} id='mobile-navigation' className='mt-4 grid gap-2 border-t border-white/10 pt-4 md:hidden'>
						<label className='inline-flex items-center gap-2 rounded-2xl bg-white/5 px-4 py-3 text-stone-100 transition hover:bg-white/10'>
							<Languages className='size-4 text-stone-300' />
							<span className='text-sm font-medium text-stone-100'>{languageLabel}</span>
							<select
								aria-label={languageLabel}
								className='ml-auto min-w-[4.25rem] appearance-none bg-transparent text-xs font-semibold uppercase tracking-[0.2em] text-stone-100 outline-none'
								onChange={event => handleLocaleChange(event.target.value)}
								value={locale}>
								{localeOptions.map(({ value, shortLabel }) => (
									<option key={value} className='bg-stone-950 text-stone-100' value={value}>
										{shortLabel}
									</option>
								))}
							</select>
						</label>

						{[
							{ basePath: '/', label: navigationLabels.home, icon: Home },
							{ basePath: '/about', label: navigationLabels.about, icon: User },
							{ basePath: '/project', label: navigationLabels.projects, icon: FolderKanban },
							{ basePath: '/resume', label: navigationLabels.resume, icon: FileText }
						].map(({ basePath: itemBasePath, label, icon: Icon }) => {
							const isActive = basePath === itemBasePath

							return (
								<Link
									aria-current={isActive ? 'page' : undefined}
									key={itemBasePath}
									className={cn(
										'inline-flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition',
										isActive ? 'bg-cyan-300 text-slate-950' : 'bg-white/5 text-stone-100 hover:bg-white/10'
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
							className='inline-flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 text-sm font-medium text-stone-100 transition hover:bg-white/10'
							href={portfolioRepoUrl}
							rel='noopener noreferrer'
							target='_blank'>
							<Code2 className='size-4' />
							{sourceLabel}
						</a>
					</nav>
				) : null}
			</div>
		</header>
	)
}
