import { createFileRoute } from '@tanstack/react-router'

import { AboutHero } from '@/components/about/about-hero'
import { AboutStack } from '@/components/about/about-stack'
import { Page } from '@/components/page-shell'
import { defaultLocale, validateRootSearch } from '@/lib/locale'
import { createPageHead } from '@/lib/metadata'

export const Route = createFileRoute('/about')({
	validateSearch: validateRootSearch,
	loaderDeps: ({ search }) => ({ lang: search.lang }),
	loader: ({ deps }) => deps.lang ?? defaultLocale,
	head: ({ loaderData }) => createPageHead(loaderData ?? defaultLocale, '/about', 'about'),
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
