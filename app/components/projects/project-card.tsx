import { ArrowUpRight, Code2 } from 'lucide-react'

import type { ProjectItem } from '@/lib/projects'

type ProjectCardProps = Readonly<{
	project: ProjectItem
	labels: {
		source: string
		liveDemo: string
		sourceAriaSuffix: string
		liveDemoAriaSuffix: string
	}
}>

export function ProjectCard(context: ProjectCardProps) {
	const { title, description, github, image, demo } = context.project
	const { labels } = context

	return (
		<article className='group relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.04))] shadow-xl shadow-slate-950/30 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:shadow-2xl hover:shadow-slate-950/50'>
			<div aria-hidden className='absolute inset-0 pointer-events-none'>
				<div className='absolute inset-x-0 top-0 h-20 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),transparent)] opacity-80' />
				<div className='absolute right-0 top-24 h-24 w-24 rounded-full bg-cyan-300/8 blur-3xl transition duration-500 group-hover:bg-cyan-300/12' />
			</div>
			<div className='relative overflow-hidden'>
				<img
					alt={title}
					className='pt-5 aspect-[16/10] w-full object-cover transition duration-500 group-hover:scale-[1.04]'
					decoding='async'
					loading='lazy'
					src={image}
				/>
				<div className='absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-950/70 to-transparent' />
				<div className='absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),transparent_35%,transparent_70%,rgba(255,255,255,0.04))]' />
			</div>
			<div className='flex flex-1 flex-col gap-4 p-5 sm:p-6'>
				<div aria-hidden className='h-px w-14 bg-gradient-to-r from-cyan-300/70 to-transparent' />
				<div className='space-y-2'>
					<h2 className='text-xl font-semibold text-white sm:text-2xl'>{title}</h2>
					<p className='line-clamp-3 text-sm leading-6 text-stone-300'>{description}</p>
				</div>
				<div className='mt-auto flex flex-wrap gap-2'>
					<a
						aria-label={`${title} ${labels.sourceAriaSuffix}`}
						className='inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-stone-100 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-100'
						href={github}
						rel='noopener noreferrer'
						target='_blank'>
						<Code2 className='size-4' />
						{labels.source}
					</a>
					{demo ? (
						<a
							aria-label={`${title} ${labels.liveDemoAriaSuffix}`}
							className='inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-50 transition hover:border-cyan-300/50 hover:bg-cyan-300/20 hover:text-white'
							href={demo}
							rel='noopener noreferrer'
							target='_blank'>
							<ArrowUpRight className='size-4' />
							{labels.liveDemo}
						</a>
					) : null}
				</div>
			</div>
		</article>
	)
}
