type Project = {
	name: string
	tech: string[]
	description: string
	image: string
	githubLink: string
	link?: string
}

export const projects: Project[] = [
	{
		name: 'LetterPair',
		tech: ['NextJS', 'TypeScript', 'Tailwind'],
		description:
			'Letter Pair analyzes font compatibility using typographic metrics like x-height ratio, stroke contrast, and proportional harmony. Instantly compare fonts and make smarter pairing decisions with data-driven insights.',
		image: './letterpair.png',
		githubLink: 'https://github.com/AdityaBhattacharya1/letterPair',
		link: 'https://letter-pair.vercel.app/',
	},
	{
		name: 'Chester',
		tech: ['TypeScript', 'Python', 'LangChain', 'PostgreSQL'],
		description:
			'Chester is a hobbyist programming language based LLM Benchmarking tool designed for simplicity and experimentation.',
		image: './chester.png',
		githubLink: 'https://github.com/AdityaBhattacharya1/Chester',
		link: '',
	},
	{
		name: 'Medico',
		tech: ['React Native', 'Strapi CMS', 'Expo', 'MySQL'],
		description:
			'A digital doctor and hospital appointment booking app, compatible with both iOS and Android.',
		image: './medico.png',
		githubLink: 'https://github.com/AdityaBhattacharya1/medico',
		link: '',
	},

	{
		name: 'Library Rest API',
		tech: ['NodeJS', 'Express', 'Docker', 'Jest', 'MongoDB', 'JWT'],
		description:
			'A sample REST API for a (totally) real library. Batteries included.',
		image: './library-rest-api.png',
		githubLink: 'https://github.com/AdityaBhattacharya1/library-rest-api',
		link: '',
	},
]
