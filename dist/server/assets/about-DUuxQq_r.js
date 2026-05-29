import { jsxs, jsx } from 'react/jsx-runtime'
import { u as useI18n, c as cn } from './router-1sMN0s71.js'
import { P as Page } from './page-shell-DyCGD0kM.js'
import '@tanstack/react-router'
import 'react'
import 'lucide-react'
import 'class-variance-authority'
import '@radix-ui/react-slot'
import 'clsx'
import 'tailwind-merge'
const aboutImage = '/assets/about-FEa5sPAK.png'
const localizedAboutContent = {
	en: {
		eyebrow: 'About',
		title: 'What I bring beyond the landing page.',
		paragraphs: [
			'I moved into software after years in hospitality and found the kind of work I want to keep doing: solving problems, improving systems, and building interfaces that feel clear, reliable, and useful.',
			'My core focus is frontend engineering with React and TypeScript, but I work comfortably across the stack when that helps ship a better product. That includes stateful UI, API integration, TanStack Query data flows, and structured form work.',
			'As the product and team evolve, I also expect to take on more QA responsibility. My practical QA experience today is centered on API testing with Postman and Swagger-documented Next.js endpoints, where I focus on validating behavior, edge cases, and frontend-backend alignment.'
		],
		skillsTitle: 'Core stack',
		toolsTitle: 'Tools and QA workflow',
		skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'TanStack Query', 'TanStack Form', 'Node.js', 'SQL', 'MongoDB', 'API testing'],
		tools: ['VS Code', 'GitHub', 'Postman', 'Swagger / OpenAPI', 'Figma', 'MySQL Workbench', 'Docker basics'],
		illustrationAlt: 'Illustration for the about section'
	},
	ca: {
		eyebrow: 'Sobre mi',
		title: 'Què puc aportar més enllà de la landing.',
		paragraphs: [
			'Vaig entrar al software després d’anys a l’hostaleria i hi vaig trobar el tipus de feina que vull continuar fent: resoldre problemes, millorar sistemes i construir interfícies clares, fiables i útils.',
			'El meu focus principal és l’enginyeria frontend amb React i TypeScript, però també treballo còmodament a tot l’stack quan això ajuda a lliurar un millor producte. Això inclou UI amb estat, integració d’APIs, fluxos de dades amb TanStack Query i treball estructurat amb formularis.',
			'A mesura que evolucionin el producte i l’equip, també espero assumir més responsabilitat en QA. La meva experiència pràctica avui se centra en proves d’API amb Postman i endpoints de Next.js documentats amb Swagger, posant el focus en el comportament, els casos límit i l’alineació entre frontend i backend.'
		],
		skillsTitle: 'Stack principal',
		toolsTitle: 'Eines i flux de QA',
		skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'TanStack Query', 'TanStack Form', 'Node.js', 'SQL', 'MongoDB', 'Proves d’API'],
		tools: ['VS Code', 'GitHub', 'Postman', 'Swagger / OpenAPI', 'Figma', 'MySQL Workbench', 'Conceptes bàsics de Docker'],
		illustrationAlt: 'Il·lustració per a la secció sobre mi'
	},
	es: {
		eyebrow: 'Sobre mí',
		title: 'Qué aporto más allá de la landing.',
		paragraphs: [
			'Entré en el software después de años en hostelería y encontré el tipo de trabajo que quiero seguir haciendo: resolver problemas, mejorar sistemas y construir interfaces claras, fiables y útiles.',
			'Mi foco principal es la ingeniería frontend con React y TypeScript, pero también trabajo con soltura en todo el stack cuando eso ayuda a entregar un mejor producto. Eso incluye UI con estado, integración de APIs, flujos de datos con TanStack Query y trabajo estructurado con formularios.',
			'A medida que evolucionen el producto y el equipo, también espero asumir más responsabilidad en QA. Mi experiencia práctica hoy se centra en pruebas de API con Postman y endpoints de Next.js documentados con Swagger, con foco en comportamiento, casos límite y alineación entre frontend y backend.'
		],
		skillsTitle: 'Stack principal',
		toolsTitle: 'Herramientas y flujo de QA',
		skills: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'TanStack Query', 'TanStack Form', 'Node.js', 'SQL', 'MongoDB', 'Testing de APIs'],
		tools: ['VS Code', 'GitHub', 'Postman', 'Swagger / OpenAPI', 'Figma', 'MySQL Workbench', 'Conceptos básicos de Docker'],
		illustrationAlt: 'Ilustración para la sección sobre mí'
	}
}
function getAboutContent(locale) {
	return localizedAboutContent[locale]
}
function AboutHero() {
	const { locale } = useI18n()
	const { eyebrow, illustrationAlt, paragraphs, title } = getAboutContent(locale)
	return /* @__PURE__ */ jsxs('section', {
		className: 'grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(16rem,0.9fr)] lg:items-center',
		children: [
			/* @__PURE__ */ jsxs('div', {
				className: 'space-y-5',
				children: [
					/* @__PURE__ */ jsx('p', { className: 'text-sm font-medium uppercase tracking-[0.3em] text-cyan-300', children: eyebrow }),
					/* @__PURE__ */ jsx('h1', { className: 'text-4xl font-semibold tracking-tight text-white sm:text-5xl', children: title }),
					/* @__PURE__ */ jsx('div', {
						className: 'space-y-4 text-base leading-7 text-stone-300',
						children: paragraphs.map(paragraph => /* @__PURE__ */ jsx('p', { children: paragraph }, paragraph))
					})
				]
			}),
			/* @__PURE__ */ jsx('div', {
				className: 'overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-xl shadow-slate-950/30 backdrop-blur',
				children: /* @__PURE__ */ jsx('img', { alt: illustrationAlt, className: 'w-full object-contain', src: aboutImage })
			})
		]
	})
}
function PillList(context) {
	const { items, tone } = context
	return /* @__PURE__ */ jsx('ul', {
		className: 'mt-5 flex flex-wrap gap-3',
		children: items.map(item =>
			/* @__PURE__ */ jsx(
				'li',
				{
					className: cn(
						tone === 'accent' && 'rounded-full border border-cyan-300/15 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-50',
						tone === 'muted' && 'rounded-full border border-white/10 bg-black/20 px-4 py-2 text-sm text-stone-200'
					),
					children: item
				},
				item
			)
		)
	})
}
function AboutStack() {
	const { locale } = useI18n()
	const { skills, skillsTitle, tools, toolsTitle } = getAboutContent(locale)
	return /* @__PURE__ */ jsxs('section', {
		className: 'grid gap-6 lg:grid-cols-2',
		children: [
			/* @__PURE__ */ jsxs('div', {
				className: 'rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur',
				children: [
					/* @__PURE__ */ jsx('h2', { className: 'text-2xl font-semibold text-white', children: skillsTitle }),
					/* @__PURE__ */ jsx(PillList, { items: skills, tone: 'accent' })
				]
			}),
			/* @__PURE__ */ jsxs('div', {
				className: 'rounded-[1.75rem] border border-white/10 bg-white/5 p-6 backdrop-blur',
				children: [
					/* @__PURE__ */ jsx('h2', { className: 'text-2xl font-semibold text-white', children: toolsTitle }),
					/* @__PURE__ */ jsx(PillList, { items: tools, tone: 'muted' })
				]
			})
		]
	})
}
function AboutPage() {
	return /* @__PURE__ */ jsxs(Page, { className: 'max-w-6xl gap-16', children: [/* @__PURE__ */ jsx(AboutHero, {}), /* @__PURE__ */ jsx(AboutStack, {})] })
}
export { AboutPage as component }
