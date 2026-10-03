import { ComponentProps } from 'react'
import {
	Root,
	Group,
	Value,
	Trigger,
	Content,
	Portal,
	Viewport,
	Icon,
	Label,
	Item,
	ItemText,
	ItemIndicator,
	Separator,
	ScrollDownButton,
	ScrollUpButton
} from '@radix-ui/react-select'
import { Check, ChevronDown, ChevronUp } from 'lucide-react'

import { cn } from '@/lib/utils'

function Select(context: ComponentProps<typeof Root>) {
	return <Root data-slot='select' {...context} />
}

function SelectGroup(context: ComponentProps<typeof Group>) {
	return <Group data-slot='select-group' {...context} />
}

function SelectValue(context: ComponentProps<typeof Value>) {
	return <Value data-slot='select-value' {...context} />
}

function SelectTrigger(context: ComponentProps<typeof Trigger>) {
	const { className, children, ...props } = context
	return (
		<Trigger
			data-slot='select-trigger'
			className={cn(
				'flex h-10 w-fit items-center justify-between gap-2 rounded-full border border-white/10 bg-white/5 px-3 text-sm font-medium text-stone-100 outline-none transition placeholder:text-stone-400 hover:bg-white/10 focus-visible:border-cyan-300/40 focus-visible:ring-2 focus-visible:ring-cyan-300/20 disabled:pointer-events-none disabled:opacity-50 data-[state=open]:border-cyan-300/30 data-[state=open]:bg-white/10 [&>span]:line-clamp-1',
				className
			)}
			{...props}>
			{children}
			<Icon asChild>
				<ChevronDown className='size-4 text-stone-400' />
			</Icon>
		</Trigger>
	)
}

function SelectContent(context: ComponentProps<typeof Content>) {
	const { className, children, position = 'popper', sideOffset = 8, ...props } = context
	return (
		<Portal>
			<Content
				data-slot='select-content'
				className={cn(
					'relative z-50 min-w-[8rem] overflow-hidden rounded-2xl border border-cyan-300/15 bg-slate-950/98 text-stone-100 shadow-2xl shadow-slate-950/60 backdrop-blur-xl data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
					position === 'popper' &&
						'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
					className
				)}
				position={position}
				sideOffset={sideOffset}
				{...props}>
				<SelectScrollUpButton />
				<Viewport className={cn('p-1', position === 'popper' && 'h-[var(--radix-select-trigger-height)] min-w-[var(--radix-select-trigger-width)] w-full')}>
					{children}
				</Viewport>
				<SelectScrollDownButton />
			</Content>
		</Portal>
	)
}

function SelectLabel(context: ComponentProps<typeof Label>) {
	const { className, ...props } = context
	return <Label data-slot='select-label' className={cn('px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-stone-400', className)} {...props} />
}

function SelectItem(context: ComponentProps<typeof Item>) {
	const { className, children, ...props } = context
	return (
		<Item
			data-slot='select-item'
			className={cn(
				'relative flex w-full cursor-default select-none items-center gap-2 rounded-xl py-2.5 pl-3 pr-9 text-sm text-stone-100 outline-none transition focus:bg-cyan-300/10 focus:text-cyan-50 data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
				className
			)}
			{...props}>
			<ItemText>{children}</ItemText>
			<span className='absolute right-3 flex size-4 items-center justify-center'>
				<ItemIndicator>
					<Check className='size-4 text-cyan-300' />
				</ItemIndicator>
			</span>
		</Item>
	)
}

function SelectSeparator(context: ComponentProps<typeof Separator>) {
	const { className, ...props } = context
	return <Separator data-slot='select-separator' className={cn('mx-1 my-1 h-px bg-white/10', className)} {...props} />
}

function SelectScrollUpButton(context: ComponentProps<typeof ScrollUpButton>) {
	const { className, ...props } = context
	return (
		<ScrollUpButton
			data-slot='select-scroll-up-button'
			className={cn('flex cursor-default items-center justify-center py-1 text-stone-400', className)}
			{...props}>
			<ChevronUp className='size-4' />
		</ScrollUpButton>
	)
}

function SelectScrollDownButton(context: ComponentProps<typeof ScrollDownButton>) {
	const { className, ...props } = context
	return (
		<ScrollDownButton
			data-slot='select-scroll-down-button'
			className={cn('flex cursor-default items-center justify-center py-1 text-stone-400', className)}
			{...props}>
			<ChevronDown className='size-4' />
		</ScrollDownButton>
	)
}

export {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectScrollDownButton,
	SelectScrollUpButton,
	SelectSeparator,
	SelectTrigger,
	SelectValue
}
