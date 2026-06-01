import { createFileRoute } from '@tanstack/react-router'

import { Page } from '@/components/page-shell'
import { ProjectCard } from '@/components/projects/project-card'
import { defaultLocale, validateRootSearch } from '@/lib/locale'
import { useTranslations } from '@/lib/messages'
import { createPageHead } from '@/lib/metadata'
import { projectDefinitions } from '@/lib/projects'

export const Route = createFileRoute('/project')({
	validateSearch: validateRootSearch,
	loaderDeps: ({ search }) => ({ lang: search.lang }),
	loader: ({ deps }) => deps.lang ?? defaultLocale,
	head: ({ loaderData }) => createPageHead(loaderData ?? defaultLocale, '/project', 'projects'),
	component: ProjectsPage
})

function ProjectsPage() {
	const { projects } = useTranslations()

	return (
		<Page className='max-w-6xl gap-16'>
			<section className='space-y-4'>
				<p className='text-sm font-medium uppercase tracking-[0.3em] text-cyan-300'>{projects.page.eyebrow}</p>
				<h1 className='text-4xl font-semibold tracking-tight text-white sm:text-5xl'>{projects.page.title}</h1>
				<p className='max-w-3xl text-base leading-7 text-stone-300'>{projects.page.description}</p>
			</section>

			<section className='grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3'>
				{projectDefinitions.map(project => (
					<ProjectCard
						key={project.title}
						labels={projects.labels}
						project={{
							title: project.title,
							description: projects.descriptions[project.id],
							image: project.image,
							github: project.github,
							demo: project.demo
						}}
					/>
				))}
			</section>
		</Page>
	)
}
