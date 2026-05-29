import { useTranslations } from '@/lib/messages'
import { footerLinks, personName } from '@/lib/site'

const year = new Date().getFullYear()

export function SiteFooter() {
	const { footer } = useTranslations().site

	return (
		<footer className='border-t border-white/10 pt-8 text-sm text-stone-300'>
			<div className='flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'>
				<div className='space-y-1'>
					<p className='font-medium text-white'>{footer.credit}</p>
					<p>
						Copyright © {year} {footer.copyrightSuffix}
					</p>
				</div>

				<div className='flex items-center gap-3'>
					{footerLinks.map(({ label, href, icon: Icon }) => (
						<a
							key={label}
							aria-label={`${personName} on ${label} (${footer.externalProfileSuffix})`}
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
