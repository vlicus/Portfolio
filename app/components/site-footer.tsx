import { Mail } from 'lucide-react'
import { useTranslations } from '@/lib/messages'
import { footerLinks, name } from '@/lib/site'

export function SiteFooter() {
	const { footer } = useTranslations().site
	const year = new Date().getFullYear()

	return (
		<footer className='border-t border-white/10 pt-8 text-sm text-stone-300'>
			<div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
				<div className='space-y-1 text-center sm:text-left'>
					<p className='font-medium text-white'>{footer.credit}</p>
					<p>
						Copyright © {year} {footer.copyrightSuffix}
					</p>
				</div>

				<div className='flex items-center justify-center gap-3 sm:justify-start'>
					<a
						aria-label={`${footer.contactLabel}: ${footer.email}`}
						className='inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-stone-100 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-100'
						href={`mailto:${footer.email}`}
						title={footer.email}>
						<Mail className='size-4' />
					</a>
					{footerLinks.map(({ label, href, icon: Icon }) => (
						<a
							key={label}
							aria-label={`${name} on ${label} (${footer.externalProfileSuffix})`}
							className='inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-stone-100 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-100'
							href={href}
							rel='noopener noreferrer'
							target='_blank'>
							<Icon className='size-4' />
						</a>
					))}
				</div>
			</div>
		</footer>
	)
}
