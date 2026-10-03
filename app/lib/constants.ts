export const HOME_HERO_TYPING = {
	typingDelayMs: 70,
	deletingDelayMs: 35,
	roleHoldDelayMs: 1400,
	roleSwitchDelayMs: 220
} as const

export const HOME_HERO_TRAITS = ['React', 'TypeScript', 'Product Thinking'] as const

export const HOME_HERO_PARTICLES = [
	{ left: '8%', top: '18%', size: 8, delay: '0s', duration: '14s' },
	{ left: '18%', top: '68%', size: 5, delay: '1.2s', duration: '16s' },
	{ left: '28%', top: '36%', size: 4, delay: '0.8s', duration: '12s' },
	{ left: '42%', top: '14%', size: 6, delay: '2s', duration: '15s' },
	{ left: '58%', top: '74%', size: 7, delay: '1.5s', duration: '18s' },
	{ left: '64%', top: '28%', size: 4, delay: '2.4s', duration: '13s' },
	{ left: '76%', top: '16%', size: 6, delay: '0.6s', duration: '17s' },
	{ left: '84%', top: '52%', size: 5, delay: '1.8s', duration: '14s' },
	{ left: '90%', top: '24%', size: 8, delay: '2.8s', duration: '19s' }
] as const

export const HOME_HERO_PARTICLE_STREAKS = [
	{
		className: 'hero-particle-drift absolute left-[14%] top-[52%] hidden h-px w-28 bg-gradient-to-r from-cyan-300/0 via-cyan-300/18 to-cyan-300/0 sm:block',
		delay: '0.4s',
		duration: '18s'
	},
	{
		className: 'hero-particle-drift absolute right-[8%] top-[38%] hidden h-px w-24 bg-gradient-to-r from-sky-300/0 via-sky-300/16 to-sky-300/0 lg:block',
		delay: '1.4s',
		duration: '20s'
	}
] as const

export const SITE_HEADER_SCROLL_OFFSET_PX = 20

export const SITE_NAV_ITEMS = [
	{ labelKey: 'home', basePath: '/' },
	{ labelKey: 'about', basePath: '/about' },
	{ labelKey: 'projects', basePath: '/project' },
	{ labelKey: 'resume', basePath: '/resume' }
] as const

export const APP_BACKGROUND_GLOWS = [
	{
		key: 'left-cyan',
		left: '-8rem',
		top: '6rem',
		size: '24rem',
		background: 'rgba(34, 211, 238, 0.12)',
		delay: '0s',
		duration: '24s',
		className: 'hidden sm:block'
	},
	{
		key: 'right-sky',
		left: 'auto',
		top: '22%',
		size: '30rem',
		background: 'rgba(56, 189, 248, 0.1)',
		delay: '1.8s',
		duration: '28s',
		className: 'right-[-10rem]'
	},
	{
		key: 'bottom-white',
		left: '28%',
		top: '72%',
		size: '18rem',
		background: 'rgba(255, 255, 255, 0.05)',
		delay: '0.8s',
		duration: '22s',
		className: 'hidden md:block'
	}
] as const

export const APP_BACKGROUND_STREAKS = [
	{
		key: 'left-streak',
		left: '12%',
		top: '34%',
		width: '10rem',
		background: 'linear-gradient(90deg, rgba(103,232,249,0), rgba(103,232,249,0.18), rgba(103,232,249,0))',
		delay: '0.2s',
		duration: '14s',
		className: 'hidden lg:block'
	},
	{
		key: 'right-streak',
		left: 'auto',
		top: '62%',
		width: '8rem',
		background: 'linear-gradient(90deg, rgba(125,211,252,0), rgba(125,211,252,0.16), rgba(125,211,252,0))',
		delay: '1.5s',
		duration: '16s',
		className: 'right-[10%] hidden md:block'
	}
] as const

export const APP_BACKGROUND_BEAMS = [
	{
		key: 'cyan-beam',
		left: '-6%',
		top: '8%',
		width: '24rem',
		height: '32rem',
		background: 'linear-gradient(180deg, rgba(34,211,238,0.12), rgba(34,211,238,0))',
		rotate: '-14deg',
		delay: '0s',
		duration: '26s',
		className: 'hidden md:block'
	},
	{
		key: 'sky-beam',
		left: 'auto',
		top: '22%',
		width: '20rem',
		height: '28rem',
		background: 'linear-gradient(180deg, rgba(125,211,252,0.1), rgba(125,211,252,0))',
		rotate: '18deg',
		delay: '1.2s',
		duration: '24s',
		className: 'right-[-4%] hidden lg:block'
	}
] as const

export const APP_BACKGROUND_NODES = [
	{
		key: 'node-left',
		left: '14%',
		top: '24%',
		size: '0.5rem',
		delay: '0.4s',
		duration: '12s',
		className: 'hidden md:block'
	},
	{
		key: 'node-center',
		left: '48%',
		top: '18%',
		size: '0.375rem',
		delay: '1.2s',
		duration: '10s',
		className: 'hidden lg:block'
	},
	{
		key: 'node-right',
		left: '78%',
		top: '44%',
		size: '0.5rem',
		delay: '2s',
		duration: '13s',
		className: 'hidden md:block'
	},
	{
		key: 'node-bottom',
		left: '34%',
		top: '72%',
		size: '0.375rem',
		delay: '0.8s',
		duration: '11s',
		className: 'hidden lg:block'
	}
] as const
