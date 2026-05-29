import { jsxs, jsx } from 'react/jsx-runtime'
import { P as Page } from './page-shell-DyCGD0kM.js'
import { FileText, Download } from 'lucide-react'
import { u as useI18n } from './router-1sMN0s71.js'
import '@tanstack/react-router'
import 'react'
import 'class-variance-authority'
import '@radix-ui/react-slot'
import 'clsx'
import 'tailwind-merge'
const resumeFile = '/assets/curriculum_Vitae_Samuel_Cobas-DQQxi_3u.pdf'
const localizedResumeContent = {
	en: {
		intro: {
			eyebrow: 'Resume',
			title: 'Resume and download access in one place.',
			description: 'Browse the summary here or open the full PDF when you want the complete document.'
		},
		download: {
			title: 'Download Samuel Cobas CV',
			description: 'Open the current PDF in a new tab or save it locally.',
			label: 'Download CV',
			ariaLabel: 'Download Samuel Cobas CV as a PDF in a new tab'
		}
	},
	ca: {
		intro: {
			eyebrow: 'CV',
			title: 'CV i descàrrega en un únic lloc.',
			description: 'Consulta el resum aquí o obre el PDF complet quan vulguis veure el document sencer.'
		},
		download: {
			title: 'Descarregar el CV de Samuel Cobas',
			description: 'Obre el PDF actual en una pestanya nova o desa’l localment.',
			label: 'Descarregar CV',
			ariaLabel: 'Descarregar el CV de Samuel Cobas en PDF en una pestanya nova'
		}
	},
	es: {
		intro: {
			eyebrow: 'CV',
			title: 'CV y descarga en un único lugar.',
			description: 'Consulta el resumen aquí o abre el PDF completo cuando quieras ver el documento entero.'
		},
		download: {
			title: 'Descargar el CV de Samuel Cobas',
			description: 'Abre el PDF actual en una pestaña nueva o guárdalo localmente.',
			label: 'Descargar CV',
			ariaLabel: 'Descargar el CV de Samuel Cobas en PDF en una pestaña nueva'
		}
	}
}
function getResumeContent(locale) {
	return localizedResumeContent[locale]
}
function ResumePanel() {
	const { locale } = useI18n()
	const { download: resumeDownload, intro: resumeIntro } = getResumeContent(locale)
	const { eyebrow, title, description } = resumeIntro
	const { title: downloadTitle, description: downloadDescription, label } = resumeDownload
	return /* @__PURE__ */ jsxs('section', {
		className: 'rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur',
		children: [
			/* @__PURE__ */ jsxs('div', {
				className: 'flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between',
				children: [
					/* @__PURE__ */ jsxs('div', {
						className: 'space-y-4',
						children: [
							/* @__PURE__ */ jsx('p', { className: 'text-sm font-medium uppercase tracking-[0.3em] text-cyan-300', children: eyebrow }),
							/* @__PURE__ */ jsx('h1', { className: 'text-4xl font-semibold tracking-tight text-white sm:text-5xl', children: title }),
							/* @__PURE__ */ jsx('p', { className: 'max-w-2xl text-base leading-7 text-stone-300', children: description })
						]
					}),
					/* @__PURE__ */ jsx('div', {
						className: 'inline-flex size-14 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-100',
						children: /* @__PURE__ */ jsx(FileText, { className: 'size-6' })
					})
				]
			}),
			/* @__PURE__ */ jsxs('div', {
				className: 'mt-8 flex flex-col gap-4 rounded-[1.5rem] border border-white/10 bg-black/20 p-6 sm:flex-row sm:items-center sm:justify-between',
				children: [
					/* @__PURE__ */ jsxs('div', {
						children: [
							/* @__PURE__ */ jsx('h2', { className: 'text-lg font-semibold text-white', children: downloadTitle }),
							/* @__PURE__ */ jsx('p', { className: 'mt-1 text-sm text-stone-300', children: downloadDescription })
						]
					}),
					/* @__PURE__ */ jsxs('a', {
						'aria-label': resumeDownload.ariaLabel,
						className:
							'inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-200',
						href: resumeFile,
						rel: 'noopener noreferrer',
						target: '_blank',
						children: [/* @__PURE__ */ jsx(Download, { className: 'size-4' }), label]
					})
				]
			})
		]
	})
}
function ResumePage() {
	return /* @__PURE__ */ jsx(Page, { className: 'max-w-4xl gap-10', children: /* @__PURE__ */ jsx(ResumePanel, {}) })
}
export { ResumePage as component }
