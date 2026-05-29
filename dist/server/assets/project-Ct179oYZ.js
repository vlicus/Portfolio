import { jsxs, jsx } from 'react/jsx-runtime'
import { P as Page } from './page-shell-DyCGD0kM.js'
import { Code2, ArrowUpRight } from 'lucide-react'
import { u as useI18n } from './router-1sMN0s71.js'
import '@tanstack/react-router'
import 'react'
import 'class-variance-authority'
import '@radix-ui/react-slot'
import 'clsx'
import 'tailwind-merge'
const alquilerSeguroImage = '/assets/Alquiler_Seguro_Laptop-D8xIEv7t.png'
const pokeFinderImage = '/assets/Pokefinder_Laptop-Dx-yAeij.png'
const vrTourImage = '/assets/VR_tour_Laptop-Bg6FuLIN.png'
function ProjectCard(context) {
	const { labels, project } = context
	const { title, description, github, image, demo } = project
	return /* @__PURE__ */ jsxs('article', {
		className: 'flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 backdrop-blur',
		children: [
			/* @__PURE__ */ jsx('img', { alt: title, className: 'aspect-[16/10] w-full object-cover', src: image }),
			/* @__PURE__ */ jsxs('div', {
				className: 'flex flex-1 flex-col gap-4 p-6',
				children: [
					/* @__PURE__ */ jsxs('div', {
						className: 'space-y-3',
						children: [
							/* @__PURE__ */ jsx('h2', { className: 'text-2xl font-semibold text-white', children: title }),
							/* @__PURE__ */ jsx('p', { className: 'text-sm leading-6 text-stone-300', children: description })
						]
					}),
					/* @__PURE__ */ jsxs('div', {
						className: 'mt-auto flex flex-wrap gap-3',
						children: [
							/* @__PURE__ */ jsxs('a', {
								'aria-label': `${title} ${labels.sourceAriaSuffix}`,
								className:
									'inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm font-medium text-stone-100 transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-100',
								href: github,
								rel: 'noopener noreferrer',
								target: '_blank',
								children: [/* @__PURE__ */ jsx(Code2, { className: 'size-4' }), labels.source]
							}),
							demo
								? /* @__PURE__ */ jsxs('a', {
										'aria-label': `${title} ${labels.liveDemoAriaSuffix}`,
										className:
											'inline-flex items-center gap-2 rounded-full border border-cyan-300/15 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-50 transition hover:bg-cyan-300/20',
										href: demo,
										rel: 'noopener noreferrer',
										target: '_blank',
										children: [/* @__PURE__ */ jsx(ArrowUpRight, { className: 'size-4' }), labels.liveDemo]
									})
								: null
						]
					})
				]
			})
		]
	})
}
const projectDefinitions = [
	{
		id: 'pokefinder',
		title: 'Pokefinder',
		image: pokeFinderImage,
		github: 'https://github.com/vlicus/proyecto_colaborativo',
		demo: 'https://vlicus.github.io/proyecto_colaborativo/'
	},
	{
		id: 'lsbuVrTour',
		title: 'LSBU VR Tour',
		image: vrTourImage,
		github: 'https://github.com/vlicus/LSBU-AR-VR-TOUR'
	},
	{
		id: 'secureRent',
		title: 'Secure Rent',
		image: alquilerSeguroImage,
		github: 'https://github.com/vlicus/PFB'
	}
]
const localizedProjectsContent = {
	en: {
		page: {
			eyebrow: 'Projects',
			title: 'Selected work across frontend, XR, and product delivery.',
			description: 'These projects reflect the kind of work I enjoy most: polished interfaces, clear systems thinking, and practical end-to-end execution.'
		},
		labels: {
			source: 'Source',
			liveDemo: 'Live demo',
			sourceAriaSuffix: 'source code (opens in a new tab)',
			liveDemoAriaSuffix: 'live demo (opens in a new tab)'
		},
		descriptions: {
			pokefinder: 'A JavaScript web app that loads Pokemon data from the PokeAPI, supports fast search, and surfaces detailed profiles with stats and imagery.',
			lsbuVrTour:
				'A browser-based campus experience built with A-Frame and WebXR, designed to let users explore university spaces through immersive 360 scenes.',
			secureRent:
				'A full-stack rental platform connecting property owners and tenants through authentication, listing management, trust signals, and admin workflows.'
		}
	},
	ca: {
		page: {
			eyebrow: 'Projectes',
			title: 'Treball seleccionat en frontend, XR i lliurament de producte.',
			description:
				'Aquests projectes reflecteixen el tipus de feina que més m’agrada: interfícies cuidades, pensament de sistemes clar i execució end-to-end pràctica.'
		},
		labels: {
			source: 'Codi',
			liveDemo: 'Demo en viu',
			sourceAriaSuffix: 'codi font (s’obre en una pestanya nova)',
			liveDemoAriaSuffix: 'demo en viu (s’obre en una pestanya nova)'
		},
		descriptions: {
			pokefinder:
				'Una aplicació web en JavaScript que carrega dades de Pokemon des de la PokeAPI, permet una cerca ràpida i mostra perfils detallats amb estadístiques i imatges.',
			lsbuVrTour:
				'Una experiència de campus al navegador construïda amb A-Frame i WebXR, pensada perquè els usuaris explorin espais universitaris amb escenes immersives de 360 graus.',
			secureRent:
				'Una plataforma full-stack de lloguer que connecta propietaris i inquilins mitjançant autenticació, gestió d’anuncis, senyals de confiança i fluxos d’administració.'
		}
	},
	es: {
		page: {
			eyebrow: 'Proyectos',
			title: 'Trabajo seleccionado en frontend, XR y entrega de producto.',
			description:
				'Estos proyectos reflejan el tipo de trabajo que más disfruto: interfaces cuidadas, pensamiento de sistemas claro y ejecución end-to-end práctica.'
		},
		labels: {
			source: 'Código',
			liveDemo: 'Demo en vivo',
			sourceAriaSuffix: 'código fuente (se abre en una pestaña nueva)',
			liveDemoAriaSuffix: 'demo en vivo (se abre en una pestaña nueva)'
		},
		descriptions: {
			pokefinder:
				'Una aplicación web en JavaScript que carga datos de Pokemon desde la PokeAPI, permite búsqueda rápida y muestra perfiles detallados con estadísticas e imágenes.',
			lsbuVrTour:
				'Una experiencia de campus en navegador construida con A-Frame y WebXR, pensada para que los usuarios exploren espacios universitarios mediante escenas inmersivas en 360 grados.',
			secureRent:
				'Una plataforma full-stack de alquiler que conecta propietarios e inquilinos mediante autenticación, gestión de anuncios, señales de confianza y flujos de administración.'
		}
	}
}
function getProjectsContent(locale) {
	const content = localizedProjectsContent[locale]
	return {
		page: content.page,
		labels: content.labels,
		items: projectDefinitions.map(project => ({
			title: project.title,
			description: content.descriptions[project.id],
			image: project.image,
			github: project.github,
			demo: 'demo' in project ? project.demo : void 0
		}))
	}
}
function ProjectsPage() {
	const { locale } = useI18n()
	const { items, labels, page } = getProjectsContent(locale)
	return /* @__PURE__ */ jsxs(Page, {
		className: 'max-w-6xl gap-12',
		children: [
			/* @__PURE__ */ jsxs('section', {
				className: 'space-y-4',
				children: [
					/* @__PURE__ */ jsx('p', { className: 'text-sm font-medium uppercase tracking-[0.3em] text-cyan-300', children: page.eyebrow }),
					/* @__PURE__ */ jsx('h1', { className: 'text-4xl font-semibold tracking-tight text-white sm:text-5xl', children: page.title }),
					/* @__PURE__ */ jsx('p', { className: 'max-w-3xl text-base leading-7 text-stone-300 sm:text-lg', children: page.description })
				]
			}),
			/* @__PURE__ */ jsx('section', {
				className: 'grid gap-6 lg:grid-cols-3',
				children: items.map(project => /* @__PURE__ */ jsx(ProjectCard, { labels, project }, project.title))
			})
		]
	})
}
export { ProjectsPage as component }
