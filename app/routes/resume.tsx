import { createFileRoute } from '@tanstack/react-router'

import { Page } from '@/components/page-shell'
import { ResumePanel } from '@/components/resume/resume-panel'

export const Route = createFileRoute('/resume')({
	component: ResumePage
})

function ResumePage() {
	return (
		<Page className='max-w-4xl gap-10'>
			<ResumePanel />
		</Page>
	)
}
