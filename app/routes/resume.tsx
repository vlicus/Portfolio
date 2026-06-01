import { createFileRoute } from '@tanstack/react-router'

import { Page } from '@/components/page-shell'
import { ResumePanel } from '@/components/resume/resume-panel'
import { defaultLocale, validateRootSearch } from '@/lib/locale'
import { createPageHead } from '@/lib/metadata'

export const Route = createFileRoute('/resume')({
	validateSearch: validateRootSearch,
	loaderDeps: ({ search }) => ({ lang: search.lang }),
	loader: ({ deps }) => deps.lang ?? defaultLocale,
	head: ({ loaderData }) => createPageHead(loaderData ?? defaultLocale, '/resume', 'resume'),
	component: ResumePage
})

function ResumePage() {
	return (
		<Page className='max-w-6xl gap-16'>
			<ResumePanel />
		</Page>
	)
}
