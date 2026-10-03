import { resumeFile, cvImage } from '@/lib/assets'
import { useTranslations } from '@/lib/messages'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'

export function ResumePanel() {
	const { resume } = useTranslations()
	const { download: resumeDownload, intro: resumeIntro } = resume
	const { eyebrow, title, description, highlights } = resumeIntro
	const { ariaLabel, previewAlt, tooltip } = resumeDownload

	return (
		<section className='grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(16rem,0.9fr)] '>
			<div className='space-y-5 '>
				<p className='text-sm font-medium uppercase tracking-[0.3em] text-cyan-300'>{eyebrow}</p>
				<h1 className='max-w-md text-4xl font-semibold tracking-tight text-white sm:text-5xl'>{title}</h1>
				<p className='max-w-xl text-base leading-7 text-stone-300'>{description}</p>
				<ul className='flex flex-col items-start gap-3 text-sm text-stone-200 sm:grid-cols-2'>
					{highlights.map(highlight => (
						<li key={highlight} className='border-l border-cyan-300/50 pl-3'>
							{highlight}
						</li>
					))}
				</ul>
			</div>

			<div>
				<Tooltip>
					<TooltipTrigger asChild>
						<a
							aria-label={ariaLabel}
							className='group relative block w-full max-w-3xl transition hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950'
							href={resumeFile}
							rel='noopener noreferrer'
							target='_blank'>
							<div className='absolute inset-x-4 top-4 -z-10 h-full rounded-[2rem] bg-cyan-300/8 blur-3xl transition duration-500 group-hover:bg-cyan-300/12 sm:inset-x-8 sm:top-6' />
							<div className='overflow-hidden rounded-[1.5rem] border border-stone-200/80 bg-white shadow-[0_30px_80px_rgba(2,6,23,0.45)] ring-1 ring-white/5 transition duration-500 group-hover:border-cyan-200'>
								<img
									alt={previewAlt}
									className='aspect-[210/297] w-full object-contain bg-white transition duration-500 group-hover:scale-[1.01] group-focus-visible:scale-[1.01]'
									decoding='async'
									loading='lazy'
									src={cvImage}
								/>
							</div>
						</a>
					</TooltipTrigger>
					<TooltipContent>
						<p>{tooltip}</p>
					</TooltipContent>
				</Tooltip>
			</div>
		</section>
	)
}
