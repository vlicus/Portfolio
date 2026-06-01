import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { homeIllustration } from '@/lib/assets'
import { useTranslations } from '@/lib/messages'
import { portfolioRepoUrl } from '@/lib/site'

const TYPING_DELAY_MS = 70
const DELETING_DELAY_MS = 35
const ROLE_HOLD_DELAY_MS = 1400
const ROLE_SWITCH_DELAY_MS = 220

export function HomeHero() {
	const { homeHero } = useTranslations().site

	return (
		<section className='grid items-center gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)] lg:gap-14'>
			<div className='space-y-6 sm:space-y-8'>
				<div className='space-y-4'>
					<p className='text-sm font-medium uppercase tracking-[0.3em] text-cyan-300'>{homeHero.eyebrow}</p>
					<h1 className='max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-5xl'>{homeHero.title}</h1>
					<p className='max-w-2xl text-base leading-7 text-stone-300'>{homeHero.description}</p>
				</div>

				<TypedRoleLine key={homeHero.roles.join('||')} roles={homeHero.roles} />

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

			<div className='relative mx-auto w-full max-w-md'>
				<div className='absolute inset-0 -z-10 rounded-full bg-cyan-400/15 blur-3xl' />
				<div className='rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl shadow-slate-950/40 backdrop-blur sm:p-6'>
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
				? ROLE_HOLD_DELAY_MS
				: isDeleting && visibleText.length === 0
					? ROLE_SWITCH_DELAY_MS
					: isDeleting
						? DELETING_DELAY_MS
						: TYPING_DELAY_MS
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
