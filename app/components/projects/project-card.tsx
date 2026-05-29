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
		<article className='flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 backdrop-blur'>
			<img alt={title} className='aspect-[16/10] w-full object-cover' decoding='async' loading='lazy' src={image} />
			<div className='flex flex-1 flex-col gap-4 p-6'>
				<div className='space-y-3'>
					<h2 className='text-2xl font-semibold text-white'>{title}</h2>
					<p className='text-sm leading-6 text-stone-300'>{description}</p>
				</div>
				<div className='mt-auto flex flex-wrap gap-3'>
					<a
						aria-label={`${title} ${labels.sourceAriaSuffix}`}
						className='inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm font-medium text-stone-100 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-100'
						href={github}
						rel='noopener noreferrer'
						target='_blank'>
						<Code2 className='size-4' />
						{labels.source}
					</a>
					{demo ? (
						<a
							aria-label={`${title} ${labels.liveDemoAriaSuffix}`}
							className='inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-50 transition hover:bg-cyan-300/20'
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
