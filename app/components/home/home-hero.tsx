import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { homeIllustration } from '@/lib/assets'
import { useTranslations } from '@/lib/messages'

export function HomeHero() {
	const { homeHero } = useTranslations().site

	return (
		<section className='grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)] lg:gap-14'>
			<div className='space-y-8'>
				<div className='space-y-4'>
					<p className='text-sm font-medium uppercase tracking-[0.35em] text-cyan-300'>{homeHero.eyebrow}</p>
					<h1 className='max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-6xl'>{homeHero.title}</h1>
					<p className='max-w-2xl text-base leading-7 text-stone-300 sm:text-lg'>{homeHero.description}</p>
				</div>

				<ul className='flex flex-wrap gap-3 text-sm text-stone-200'>
					{homeHero.roles.map(role => (
						<li key={role} className='rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur'>
							{role}
						</li>
					))}
				</ul>

				<div className='flex flex-col gap-3 sm:flex-row'>
					<Button asChild size='lg' className='bg-cyan-300 text-slate-950 hover:bg-cyan-200'>
						<a href='#about'>
							{homeHero.primaryCtaLabel}
							<ArrowRight className='size-4' />
						</a>
					</Button>
					<Button asChild size='lg' variant='outline' className='border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white'>
						<a href='https://github.com/vlicus/Portfolio' rel='noopener noreferrer' target='_blank'>
							{homeHero.secondaryCtaLabel}
						</a>
					</Button>
				</div>
			</div>

			<div className='relative mx-auto w-full max-w-md'>
				<div className='absolute inset-0 -z-10 rounded-full bg-cyan-400/15 blur-3xl' />
				<div className='rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur'>
					<img alt={homeHero.illustrationAlt} className='mx-auto w-full max-w-sm' src={homeIllustration} />
				</div>
			</div>
		</section>
	)
}
