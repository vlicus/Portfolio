import { aboutImage } from '@/lib/assets'
import { useTranslations } from '@/lib/messages'

export function AboutHero() {
	const { about } = useTranslations()

	return (
		<section className='grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(16rem,0.9fr)] lg:items-center'>
			<div className='space-y-5'>
				<p className='text-sm font-medium uppercase tracking-[0.3em] text-cyan-300'>{about.eyebrow}</p>
				<h1 className='text-4xl font-semibold tracking-tight text-white sm:text-5xl'>{about.title}</h1>
				<div className='space-y-4 text-base leading-7 text-stone-300'>
					{about.paragraphs.map(paragraph => (
						<p key={paragraph}>{paragraph}</p>
					))}
				</div>
			</div>

			<div className='overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-xl shadow-slate-950/30 backdrop-blur'>
				<img alt={about.illustrationAlt} className='w-full object-contain' decoding='async' loading='lazy' src={aboutImage} />
			</div>
		</section>
	)
}
