import { jsxs, jsx } from 'react/jsx-runtime'
import { u as useI18n, g as getSiteContent, B as Button, p as personName } from './router-1sMN0s71.js'
import { ArrowRight } from 'lucide-react'
import { P as Page } from './page-shell-DyCGD0kM.js'
import '@tanstack/react-router'
import 'react'
import 'class-variance-authority'
import '@radix-ui/react-slot'
import 'clsx'
import 'tailwind-merge'
const avatarImage = '/assets/avatar-D2F37s3-.png'
const homeIllustration = '/assets/home-main-2M7JlwXb.svg'
function HomeAbout() {
	const { locale } = useI18n()
	const { externalProfileLabel, footerContent, homeAboutContent, socialLinks } = getSiteContent(locale)
	const { eyebrow, title, paragraphs, portraitAlt } = homeAboutContent
	return /* @__PURE__ */ jsxs('section', {
		id: 'about',
		className: 'grid gap-8 rounded-[2rem] border border-white/10 bg-black/10 p-6 backdrop-blur sm:p-8 lg:grid-cols-[minmax(0,1.1fr)_20rem] lg:gap-12',
		children: [
			/* @__PURE__ */ jsxs('div', {
				className: 'space-y-5',
				children: [
					/* @__PURE__ */ jsx('p', { className: 'text-sm font-medium uppercase tracking-[0.3em] text-cyan-300', children: eyebrow }),
					/* @__PURE__ */ jsx('h2', { className: 'text-3xl font-semibold tracking-tight text-white sm:text-4xl', children: title }),
					/* @__PURE__ */ jsx('div', {
						className: 'space-y-4 text-base leading-7 text-stone-300',
						children: paragraphs.map(paragraph => /* @__PURE__ */ jsx('p', { children: paragraph }, paragraph))
					}),
					/* @__PURE__ */ jsx('div', {
						className: 'flex flex-wrap gap-3',
						children: socialLinks.map(({ label, href, icon: Icon }) =>
							/* @__PURE__ */ jsxs(
								'a',
								{
									'aria-label': `${label} ${externalProfileLabel} (${footerContent.externalProfileSuffix})`,
									className:
										'inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-stone-100 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-100',
									href,
									rel: 'noopener noreferrer',
									target: '_blank',
									children: [/* @__PURE__ */ jsx(Icon, { className: 'size-4' }), label]
								},
								label
							)
						)
					})
				]
			}),
			/* @__PURE__ */ jsx('div', {
				className: 'mx-auto flex w-full max-w-xs items-center justify-center',
				children: /* @__PURE__ */ jsx('div', {
					className:
						'overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/20 via-white/5 to-transparent p-3 shadow-xl shadow-slate-950/30',
					children: /* @__PURE__ */ jsx('img', { alt: portraitAlt, className: 'aspect-square w-full rounded-[1.4rem] object-cover', src: avatarImage })
				})
			})
		]
	})
}
function HomeHero() {
	const { locale } = useI18n()
	const { homeHeroContent } = getSiteContent(locale)
	const { eyebrow, title, description, roles, primaryCta, secondaryCta, illustrationAlt } = homeHeroContent
	const { href, label } = primaryCta
	return /* @__PURE__ */ jsxs('section', {
		className: 'grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)] lg:gap-14',
		children: [
			/* @__PURE__ */ jsxs('div', {
				className: 'space-y-8',
				children: [
					/* @__PURE__ */ jsxs('div', {
						className: 'space-y-4',
						children: [
							/* @__PURE__ */ jsx('p', { className: 'text-sm font-medium uppercase tracking-[0.35em] text-cyan-300', children: eyebrow }),
							/* @__PURE__ */ jsx('h1', { className: 'max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-6xl', children: title }),
							/* @__PURE__ */ jsx('p', { className: 'max-w-2xl text-base leading-7 text-stone-300 sm:text-lg', children: description })
						]
					}),
					/* @__PURE__ */ jsx('ul', {
						className: 'flex flex-wrap gap-3 text-sm text-stone-200',
						children: roles.map(role =>
							/* @__PURE__ */ jsx('li', { className: 'rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur', children: role }, role)
						)
					}),
					/* @__PURE__ */ jsxs('div', {
						className: 'flex flex-col gap-3 sm:flex-row',
						children: [
							/* @__PURE__ */ jsx(Button, {
								asChild: true,
								size: 'lg',
								className: 'bg-cyan-300 text-slate-950 hover:bg-cyan-200',
								children: /* @__PURE__ */ jsxs('a', { href, children: [label, /* @__PURE__ */ jsx(ArrowRight, { className: 'size-4' })] })
							}),
							/* @__PURE__ */ jsx(Button, {
								asChild: true,
								size: 'lg',
								variant: 'outline',
								className: 'border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white',
								children: /* @__PURE__ */ jsx('a', { href: secondaryCta.href, rel: 'noopener noreferrer', target: '_blank', children: secondaryCta.label })
							})
						]
					})
				]
			}),
			/* @__PURE__ */ jsxs('div', {
				className: 'relative mx-auto w-full max-w-md',
				children: [
					/* @__PURE__ */ jsx('div', { className: 'absolute inset-0 -z-10 rounded-full bg-cyan-400/15 blur-3xl' }),
					/* @__PURE__ */ jsx('div', {
						className: 'rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur',
						children: /* @__PURE__ */ jsx('img', { alt: illustrationAlt, className: 'mx-auto w-full max-w-sm', src: homeIllustration })
					})
				]
			})
		]
	})
}
const year = /* @__PURE__ */ new Date().getFullYear()
function SiteFooter() {
	const { locale } = useI18n()
	const { footerContent, footerLinks } = getSiteContent(locale)
	return /* @__PURE__ */ jsx('footer', {
		className: 'border-t border-white/10 pt-8 text-sm text-stone-300',
		children: /* @__PURE__ */ jsxs('div', {
			className: 'flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between',
			children: [
				/* @__PURE__ */ jsxs('div', {
					className: 'space-y-1',
					children: [
						/* @__PURE__ */ jsx('p', { className: 'font-medium text-white', children: footerContent.credit }),
						/* @__PURE__ */ jsxs('p', { children: ['Copyright © ', year, ' ', footerContent.copyrightSuffix] })
					]
				}),
				/* @__PURE__ */ jsx('div', {
					className: 'flex items-center gap-3',
					children: footerLinks.map(({ label, href, icon: Icon }) =>
						/* @__PURE__ */ jsx(
							'a',
							{
								'aria-label': `${personName} on ${label} (${footerContent.externalProfileSuffix})`,
								className:
									'inline-flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-stone-100 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-100',
								href,
								rel: 'noopener noreferrer',
								target: '_blank',
								children: /* @__PURE__ */ jsx(Icon, { className: 'size-4' })
							},
							label
						)
					)
				})
			]
		})
	})
}
function HomePage() {
	return /* @__PURE__ */ jsxs(Page, {
		className: 'max-w-6xl gap-20',
		children: [/* @__PURE__ */ jsx(HomeHero, {}), /* @__PURE__ */ jsx(HomeAbout, {}), /* @__PURE__ */ jsx(SiteFooter, {})]
	})
}
export { HomePage as component }
