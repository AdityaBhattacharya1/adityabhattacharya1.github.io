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
		name: 'Medico',
		tech: ['React Native', 'Strapi CMS', 'Expo', 'MySQL'],
		description:
			'A digital doctor and hospital appointment booking app, compatible with both iOS and Android.',
		image: './medico.png',
		githubLink: 'https://github.com/AdityaBhattacharya1/medico',
		link: '',
	},
	{
		name: 'Lorem Travels',
		tech: ['Gatsby', 'React', 'CSS', 'NodeJS', 'Stripe'],
		description:
			"A fake travel agency website. It's a statically generated website, has e-commerce functionality, and privacy-friendly analytics (GoatCounter). Also works offline :)",
		image: './lorem-travels.png',
		githubLink: 'https://github.com/AdityaBhattacharya1/lorem-travels',
		link: 'https://lorem-travels.vercel.app',
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
	{
		name: 'CodePen Clone',
		tech: ['React', 'CSS'],
		description:
			'A CodePen Clone with added features like auto-closing brackets, linting, code collapse. Bonus: The code editor has the Material Ocean theme by default.',
		image: './codepen-clone.png',
		githubLink: 'https://github.com/AdityaBhattacharya1/Codepen-Clone',
		link: '',
	},
]
