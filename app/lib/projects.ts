import { alquilerSeguroImage, pokeFinderImage, vrTourImage } from '@/lib/assets'

export type ProjectDefinition = {
	id: 'pokefinder' | 'lsbuVrTour' | 'secureRent'
	title: string
	image: string
	github: string
	demo?: string
}

export type ProjectItem = {
	title: string
	description: string
	image: string
	github: string
	demo?: string
}

export const projectDefinitions: ProjectDefinition[] = [
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
] as const
