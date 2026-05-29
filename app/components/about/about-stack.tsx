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
						tone === 'accent' && 'rounded-full border border-cyan-300/15 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-50',
						tone === 'muted' && 'rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-stone-200'
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
			<div className='rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur'>
				<h2 className='text-2xl font-semibold text-white'>{about.skillsTitle}</h2>
				<PillList items={about.skills} tone='accent' />
			</div>

			<div className='rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur'>
				<h2 className='text-2xl font-semibold text-white'>{about.toolsTitle}</h2>
				<PillList items={about.tools} tone='muted' />
			</div>
		</section>
	)
}
