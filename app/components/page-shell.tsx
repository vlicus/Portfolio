import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

type PageProps = Readonly<{
	children: ReactNode
	className?: string
}>
export function Page(context: PageProps) {
	const { children, className } = context
	return (
		<main id='main-content' className={cn('mx-auto flex w-full flex-col px-6 py-14 sm:px-10 sm:py-20', className)}>
			{children}
		</main>
	)
}

export default Page
