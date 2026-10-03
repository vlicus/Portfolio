import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { HeroParticles } from './hero-particles'
import { homeIllustration } from '@/lib/assets'
import { HOME_HERO_TRAITS, HOME_HERO_TYPING } from '../../lib/constants'
import { useTranslations } from '@/lib/messages'
import { portfolioRepoUrl } from '@/lib/site'

export function HomeHero() {
	const { homeHero } = useTranslations().site

	return (
		<section className='relative isolate grid gap-10 py-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(18rem,0.95fr)] lg:items-center lg:gap-14'>
			<div aria-hidden className='absolute inset-0 -z-10'>
				<div className='absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,rgba(125,211,252,0.16),transparent_58%)]' />
				<div className='absolute left-[-5rem] top-[-2rem] h-52 w-52 rounded-full bg-cyan-400/16 blur-3xl sm:h-72 sm:w-72' />
				<div className='absolute right-[-6rem] top-1/4 h-52 w-52 rounded-full bg-sky-500/14 blur-3xl sm:h-80 sm:w-80' />
				<div className='absolute bottom-[-5rem] left-1/4 h-40 w-40 rounded-full bg-cyan-200/8 blur-3xl sm:h-64 sm:w-64' />
				<div
					className='absolute inset-0 opacity-30'
					style={{
						backgroundImage:
							'repeating-linear-gradient(90deg, rgba(148,163,184,0.07) 0, rgba(148,163,184,0.07) 1px, transparent 1px, transparent 84px), repeating-linear-gradient(0deg, rgba(148,163,184,0.05) 0, rgba(148,163,184,0.05) 1px, transparent 1px, transparent 84px)',
						maskImage: 'radial-gradient(circle at center, black, transparent 84%)'
					}}
				/>
				<div className='absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.05),transparent_28%,transparent_72%,rgba(255,255,255,0.03))]' />
				<HeroParticles />
			</div>

			<div className='space-y-6 sm:space-y-8'>
				<div className='space-y-4'>
					<p className='text-sm font-medium uppercase tracking-[0.3em] text-cyan-300'>{homeHero.eyebrow}</p>
					<h1 className='max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl'>{homeHero.title}</h1>
					<p className='max-w-2xl text-base leading-7 text-stone-300'>{homeHero.description}</p>
				</div>

				<TypedRoleLine key={homeHero.roles.join('||')} roles={homeHero.roles} />

				<div className='flex flex-wrap gap-2 text-[11px] font-medium uppercase tracking-[0.24em] text-stone-400'>
					{HOME_HERO_TRAITS.map(trait => (
						<span key={trait} className='rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-stone-300'>
							{trait}
						</span>
					))}
				</div>

				<div className='flex flex-col gap-3 sm:flex-row'>
					<Button asChild size='lg' className='w-full bg-cyan-300 text-slate-950 hover:bg-cyan-200 sm:w-auto'>
						<a href='#about'>
							{homeHero.primaryCtaLabel}
							<ArrowRight className='size-4' />
						</a>
					</Button>
					<Button asChild size='lg' variant='outline' className='w-full border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white sm:w-auto'>
						<a href={portfolioRepoUrl} rel='noopener noreferrer' target='_blank'>
							{homeHero.secondaryCtaLabel}
						</a>
					</Button>
				</div>
			</div>

			<div className='relative mx-auto mt-4 w-full max-w-md gap-4'>
				<div className='absolute inset-0 -z-10 scale-95 rounded-full bg-cyan-400/12 blur-3xl' />
				<div className='absolute inset-5 -z-10 rounded-[2rem] bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01))]' />
				<div className='absolute -left-3 top-8 hidden h-px w-16 bg-gradient-to-r from-cyan-300/0 via-cyan-300/70 to-cyan-300/0 lg:block' />
				<div className='absolute -right-3 bottom-12 hidden h-px w-20 bg-gradient-to-r from-cyan-300/0 via-cyan-300/60 to-cyan-300/0 lg:block' />
				<div className='rounded-[2rem] p-4 sm:p-6'>
					<div className='mb-4 flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.24em] text-stone-400'>
						<span>Frontend Craft</span>
						<span className='text-cyan-300'>Selected Focus</span>
					</div>
					<img alt={homeHero.illustrationAlt} className='mx-auto w-full max-w-sm' src={homeIllustration} />
				</div>
			</div>
		</section>
	)
}

function useTypedRole(roles: readonly string[]) {
	const [roleIndex, setRoleIndex] = useState(0)
	const [visibleText, setVisibleText] = useState('')
	const [isDeleting, setIsDeleting] = useState(false)

	useEffect(() => {
		if (roles.length === 0) {
			return
		}

		const currentRole = roles[roleIndex] ?? roles[0]

		const timeout = window.setTimeout(
			() => {
				if (!isDeleting && visibleText.length < currentRole.length) {
					setVisibleText(currentRole.slice(0, visibleText.length + 1))
					return
				}

				if (!isDeleting && visibleText.length === currentRole.length) {
					setIsDeleting(true)
					return
				}

				if (isDeleting && visibleText.length > 0) {
					setVisibleText(currentRole.slice(0, visibleText.length - 1))
					return
				}

				setIsDeleting(false)
				setRoleIndex(index => (index + 1) % roles.length)
			},
			!isDeleting && visibleText.length === currentRole.length
				? HOME_HERO_TYPING.roleHoldDelayMs
				: isDeleting && visibleText.length === 0
					? HOME_HERO_TYPING.roleSwitchDelayMs
					: isDeleting
						? HOME_HERO_TYPING.deletingDelayMs
						: HOME_HERO_TYPING.typingDelayMs
		)

		return () => window.clearTimeout(timeout)
	}, [isDeleting, roleIndex, roles, visibleText])

	return visibleText
}

function TypedRoleLine({ roles }: { roles: readonly string[] }) {
	const typedRole = useTypedRole(roles)

	return (
		<div className='min-h-[3rem]'>
			<div className='inline-flex max-w-full items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-stone-100 backdrop-blur'>
				<span aria-live='polite' className='truncate font-medium text-white'>
					{typedRole}
				</span>
				<span aria-hidden className='h-4 w-px shrink-0 animate-pulse bg-cyan-300/80' />
			</div>
		</div>
	)
}
