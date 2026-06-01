import { ComponentProps } from 'react'
import { Provider, Root, Trigger, Portal, Content } from '@radix-ui/react-tooltip'

import { cn } from '@/lib/utils'

type ProviderProps = ComponentProps<typeof Provider>
type RootProps = ComponentProps<typeof Root>
type TriggerProps = ComponentProps<typeof Trigger>
type ContentProps = ComponentProps<typeof Content>

function TooltipProvider(context: ProviderProps) {
	const { ...props } = context
	return <Provider data-slot='tooltip-provider' {...props} />
}

function Tooltip(context: RootProps) {
	const { ...props } = context
	return (
		<TooltipProvider>
			<Root data-slot='tooltip' {...props} />
		</TooltipProvider>
	)
}

function TooltipTrigger(context: TriggerProps) {
	const { ...props } = context
	return <Trigger data-slot='tooltip-trigger' {...props} />
}

function TooltipContent(context: ContentProps) {
	const { className, sideOffset = 8, ...props } = context
	return (
		<Portal>
			<Content
				className={cn(
					'z-50 overflow-hidden rounded-md border border-white/10 bg-slate-950 px-3 py-1.5 text-sm text-stone-100 shadow-md shadow-slate-950/40 animate-in fade-in-0 zoom-in-95 data-[side=bottom]:slide-in-from-top-1 data-[side=left]:slide-in-from-right-1 data-[side=right]:slide-in-from-left-1 data-[side=top]:slide-in-from-bottom-1',
					className
				)}
				sideOffset={sideOffset}
				data-slot='tooltip-content'
				{...props}
			/>
		</Portal>
	)
}

export { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider }
