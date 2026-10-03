import { createFileRoute } from '@tanstack/react-router'
import { HomeAbout } from '@/components/home/home-about'
import { HomeHero } from '@/components/home/home-hero'
import { Page } from '@/components/page-shell'
import { defaultLocale, validateRootSearch } from '@/lib/locale'
import { createPageHead } from '@/lib/metadata'

export const Route = createFileRoute('/')({
	validateSearch: validateRootSearch,
	loaderDeps: ({ search }) => ({ lang: search.lang }),
	loader: ({ deps }) => deps.lang ?? defaultLocale,
	head: ({ loaderData }) => createPageHead(loaderData ?? defaultLocale, '/', 'home'),
	component: HomePage
})

function HomePage() {
	return (
		<Page className='max-w-6xl gap-16'>
			<HomeHero />
			<HomeAbout />
		</Page>
	)
}
