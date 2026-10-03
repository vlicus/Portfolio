import type { CSSProperties } from 'react'
import { HOME_HERO_PARTICLES, HOME_HERO_PARTICLE_STREAKS } from '../../lib/constants'

type HeroMotionStyle = CSSProperties & {
	'--hero-delay': string
	'--hero-duration': string
}

const particleItems = HOME_HERO_PARTICLES.map(particle => ({
	key: `${particle.left}-${particle.top}`,
	style: {
		left: particle.left,
		top: particle.top,
		'--hero-delay': particle.delay,
		'--hero-duration': particle.duration
	} satisfies HeroMotionStyle,
	glowStyle: {
		width: `${particle.size}px`,
		height: `${particle.size}px`
	} satisfies CSSProperties
}))

const particleStreaks: ReadonlyArray<{
	className: string
	style: HeroMotionStyle
}> = HOME_HERO_PARTICLE_STREAKS.map(streak => ({
	className: streak.className,
	style: {
		'--hero-delay': streak.delay,
		'--hero-duration': streak.duration
	}
}))

export function HeroParticles() {
	return (
		<div className='absolute inset-0 overflow-hidden'>
			{particleItems.map(particle => (
				<div key={particle.key} className='hero-particle-drift absolute hidden rounded-full sm:block' style={particle.style}>
					<span
						className='hero-particle-glow block rounded-full border border-cyan-200/30 bg-cyan-200/20 shadow-[0_0_18px_rgba(103,232,249,0.25)]'
						style={particle.glowStyle}
					/>
					<span className='absolute left-1/2 top-1/2 h-10 w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-cyan-200/0 via-cyan-200/20 to-cyan-200/0' />
				</div>
			))}
			{particleStreaks.map(streak => (
				<div key={streak.className} className={streak.className} style={streak.style} />
			))}
		</div>
	)
}
