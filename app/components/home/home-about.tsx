import { avatarImage } from '@/lib/assets'
import { useTranslations } from '@/lib/messages'
import { socialLinks } from '@/lib/site'

export function HomeAbout() {
	const { footer, externalProfileLabel, homeAbout } = useTranslations().site
	return (
		<section
			id='about'
			className='grid gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-950/30 backdrop-blur sm:p-8 lg:grid-cols-[minmax(0,1.1fr)_20rem] lg:gap-12'>
			<div className='space-y-5'>
				<p className='text-sm font-medium uppercase tracking-[0.3em] text-cyan-300'>{homeAbout.eyebrow}</p>
				<h2 className='max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl'>{homeAbout.title}</h2>
				<div className='max-w-2xl space-y-4 text-base leading-7 text-stone-300'>
					{homeAbout.paragraphs.map(paragraph => (
						<p key={paragraph}>{paragraph}</p>
					))}
				</div>

				<div className='flex flex-wrap gap-3'>
					{socialLinks.map(({ label, href, icon: Icon }) => (
						<a
							key={label}
							aria-label={`${label} ${externalProfileLabel} (${footer.externalProfileSuffix})`}
							className='inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-stone-100 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-100'
							href={href}
							rel='noopener noreferrer'
							target='_blank'>
							<Icon className='size-4' />
							{label}
						</a>
					))}
				</div>
			</div>

			<div className='mx-auto flex w-full max-w-xs items-center justify-center'>
				<div className='overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/20 via-white/5 to-transparent p-3 shadow-xl shadow-slate-950/30'>
					<img alt={homeAbout.portraitAlt} className='aspect-square w-full rounded-[1.4rem] object-cover' decoding='async' loading='lazy' src={avatarImage} />
				</div>
			</div>
		</section>
	)
}
