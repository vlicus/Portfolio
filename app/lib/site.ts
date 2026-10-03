import { BriefcaseBusiness, Camera, Code2, type LucideIcon } from 'lucide-react'

export type SocialLink = {
	label: string
	href: string
	icon: LucideIcon
}

export const name = 'Samuel Cobas'
export const portfolioRepoUrl = 'https://github.com/vlicus/Portfolio'

export const socialLinks: SocialLink[] = [
	{ label: 'GitHub', href: 'https://github.com/vlicus', icon: Code2 },
	{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/samuel-cobas/', icon: BriefcaseBusiness },
	{ label: 'Instagram', href: 'https://www.instagram.com/vlicus93/', icon: Camera }
]

export const footerLinks: SocialLink[] = socialLinks.filter(link => link.label !== 'Instagram')
