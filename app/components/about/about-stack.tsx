import { useTranslations } from '@/lib/messages'
import { cn } from '@/lib/utils'

type PillListProps = {
	items: readonly string[]
	tone: 'accent' | 'muted'
}

function PillList(context: PillListProps) {
	const { items, tone } = context

	return (
		<ul className='mt-5 flex flex-wrap gap-3'>
			{items.map(item => (
				<li
					key={item}
					className={cn(
						tone === 'accent' && 'rounded-full pointer-events-none border border-cyan-300/15 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-50',
						tone === 'muted' && 'rounded-full pointer-events-none border border-white/10 bg-black/20 px-4 py-2 text-sm text-stone-200'
					)}>
					{item}
				</li>
			))}
		</ul>
	)
}

export function AboutStack() {
	const { about } = useTranslations()

	return (
		<section className='grid gap-6 lg:grid-cols-2'>
			<div className='relative isolate overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.04))] p-6 shadow-xl shadow-slate-950/30 backdrop-blur'>
				<div aria-hidden className='absolute inset-0 -z-10'>
					<div className='absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(34,211,238,0.12),transparent)]' />
					<div className='absolute -right-10 top-10 h-24 w-24 rounded-full bg-cyan-300/10 blur-3xl' />
				</div>
				<div aria-hidden className='mb-5 h-px w-16 bg-gradient-to-r from-cyan-300/80 to-transparent' />
				<h2 className='text-2xl font-semibold text-white'>{about.skillsTitle}</h2>
				<PillList items={about.skills} tone='accent' />
			</div>

			<div className='relative isolate overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.04))] p-6 shadow-xl shadow-slate-950/30 backdrop-blur'>
				<div aria-hidden className='absolute inset-0 -z-10'>
					<div className='absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent)]' />
					<div className='absolute -left-10 bottom-0 h-24 w-24 rounded-full bg-white/6 blur-3xl' />
				</div>
				<div aria-hidden className='mb-5 h-px w-16 bg-gradient-to-r from-white/50 to-transparent' />
				<h2 className='text-2xl font-semibold text-white'>{about.toolsTitle}</h2>
				<PillList items={about.tools} tone='muted' />
			</div>
		</section>
	)
}
