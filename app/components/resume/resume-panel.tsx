import { Download, FileText } from 'lucide-react'

import { resumeFile } from '@/lib/assets'
import { useTranslations } from '@/lib/messages'

export function ResumePanel() {
	const { resume } = useTranslations()
	const { download: resumeDownload, intro: resumeIntro } = resume
	const { eyebrow, title, description } = resumeIntro
	const { title: downloadTitle, description: downloadDescription, label } = resumeDownload

	return (
		<section className='rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur'>
			<div className='flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between'>
				<div className='space-y-4'>
					<p className='text-sm font-medium uppercase tracking-[0.3em] text-cyan-300'>{eyebrow}</p>
					<h1 className='text-4xl font-semibold tracking-tight text-white sm:text-5xl'>{title}</h1>
					<p className='max-w-2xl text-base leading-7 text-stone-300'>{description}</p>
				</div>
				<div className='inline-flex size-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-100'>
					<FileText className='size-6' />
				</div>
			</div>

			<div className='mt-8 flex flex-col gap-4 rounded-[1.5rem] border border-white/10 bg-black/20 p-6 sm:flex-row sm:items-center sm:justify-between'>
				<div>
					<h2 className='text-lg font-semibold text-white'>{downloadTitle}</h2>
					<p className='mt-1 text-sm text-stone-300'>{downloadDescription}</p>
				</div>
				<a
					aria-label={resumeDownload.ariaLabel}
					className='inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200'
					href={resumeFile}
					rel='noopener noreferrer'
					target='_blank'>
					<Download className='size-4' />
					{label}
				</a>
			</div>
		</section>
	)
}
