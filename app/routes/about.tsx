import { createFileRoute } from '@tanstack/react-router'

import { AboutHero } from '@/components/about/about-hero'
import { AboutStack } from '@/components/about/about-stack'
import { Page } from '@/components/page-shell'

export const Route = createFileRoute('/about')({
	component: AboutPage
})

function AboutPage() {
	return (
		<Page className='max-w-6xl gap-16'>
			<AboutHero />
			<AboutStack />
		</Page>
	)
}
