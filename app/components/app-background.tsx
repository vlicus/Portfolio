import { APP_BACKGROUND_BEAMS, APP_BACKGROUND_GLOWS, APP_BACKGROUND_NODES, APP_BACKGROUND_STREAKS } from '../lib/constants'

export function AppBackground() {
	return (
		<div aria-hidden className='pointer-events-none fixed inset-0 -z-10 overflow-hidden'>
			<div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(6,10,18,0.92),rgba(3,6,15,0.98))]' />
			<div className='absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(125,211,252,0.14),transparent_30%),radial-gradient(circle_at_20%_18%,rgba(34,211,238,0.1),transparent_22%),radial-gradient(circle_at_80%_28%,rgba(56,189,248,0.08),transparent_26%),radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.05),transparent_30%)]' />
			<div className='absolute left-1/2 top-[-18rem] h-[34rem] w-[58rem] -translate-x-1/2 rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,rgba(34,211,238,0),rgba(34,211,238,0.07),rgba(125,211,252,0.02),rgba(34,211,238,0))] opacity-80 blur-3xl' />
			<div
				className='absolute inset-0 opacity-[0.22]'
				style={{
					backgroundImage:
						'repeating-linear-gradient(90deg, rgba(148,163,184,0.06) 0, rgba(148,163,184,0.06) 1px, transparent 1px, transparent 104px), repeating-linear-gradient(0deg, rgba(148,163,184,0.04) 0, rgba(148,163,184,0.04) 1px, transparent 1px, transparent 104px)',
					maskImage: 'radial-gradient(circle at center, black, transparent 88%)'
				}}
			/>
			<div
				className='absolute inset-0 opacity-[0.14]'
				style={{
					backgroundImage:
						'repeating-linear-gradient(90deg, rgba(103,232,249,0.08) 0, rgba(103,232,249,0.08) 1px, transparent 1px, transparent 26px), repeating-linear-gradient(0deg, rgba(103,232,249,0.06) 0, rgba(103,232,249,0.06) 1px, transparent 1px, transparent 26px)',
					maskImage: 'radial-gradient(circle at center, transparent 22%, black 48%, transparent 82%)'
				}}
			/>
			<div className='absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.03),transparent_20%,transparent_75%,rgba(255,255,255,0.025))]' />
			<div className='absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_46%,rgba(2,6,23,0.28)_100%)]' />
			<div className='absolute left-6 top-24 hidden h-24 w-24 rounded-tl-[2rem] border-l border-t border-cyan-300/12 md:block' />
			<div className='absolute bottom-16 right-8 hidden h-20 w-20 rounded-br-[2rem] border-b border-r border-sky-300/12 lg:block' />
			<div className='absolute left-[14%] top-[24%] hidden h-px w-24 bg-gradient-to-r from-cyan-300/0 via-cyan-300/12 to-cyan-300/0 md:block' />
			<div className='absolute right-[16%] top-[44%] hidden h-px w-20 bg-gradient-to-r from-sky-300/0 via-sky-300/12 to-sky-300/0 lg:block' />

			{APP_BACKGROUND_BEAMS.map(beam => (
				<div
					key={beam.key}
					className={`app-ambient-float absolute blur-3xl ${beam.className}`}
					style={{
						left: beam.left,
						top: beam.top,
						width: beam.width,
						height: beam.height,
						background: beam.background,
						transform: `rotate(${beam.rotate})`,
						animationDelay: beam.delay,
						animationDuration: beam.duration
					}}
				/>
			))}

			{APP_BACKGROUND_NODES.map(node => (
				<div
					key={node.key}
					className={`app-ambient-pulse absolute rounded-full ${node.className}`}
					style={{
						left: node.left,
						top: node.top,
						width: node.size,
						height: node.size,
						animationDelay: node.delay,
						animationDuration: node.duration
					}}>
					<span className='absolute inset-0 rounded-full bg-cyan-200/75 shadow-[0_0_14px_rgba(103,232,249,0.45)]' />
					<span className='absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/12' />
				</div>
			))}

			{APP_BACKGROUND_GLOWS.map(glow => (
				<div
					key={glow.key}
					className={`app-ambient-float absolute rounded-full blur-3xl ${glow.className}`}
					style={{
						left: glow.left,
						top: glow.top,
						width: glow.size,
						height: glow.size,
						background: glow.background,
						animationDelay: glow.delay,
						animationDuration: glow.duration
					}}
				/>
			))}

			{APP_BACKGROUND_STREAKS.map(streak => (
				<div
					key={streak.key}
					className={`app-ambient-pulse absolute h-px ${streak.className}`}
					style={{
						left: streak.left,
						top: streak.top,
						width: streak.width,
						background: streak.background,
						animationDelay: streak.delay,
						animationDuration: streak.duration
					}}
				/>
			))}
		</div>
	)
}
