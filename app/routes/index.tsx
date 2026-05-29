import { createFileRoute } from '@tanstack/react-router'
import { HomeAbout } from '@/components/home/home-about'
import { HomeHero } from '@/components/home/home-hero'
import { Page } from '@/components/page-shell'
import { SiteFooter } from '@/components/site-footer'

export const Route = createFileRoute('/')({
	component: HomePage
})

function HomePage() {
	return (
		<Page className='max-w-6xl gap-20'>
			<HomeHero />
			<HomeAbout />
			<SiteFooter />
		</Page>
	)
}
