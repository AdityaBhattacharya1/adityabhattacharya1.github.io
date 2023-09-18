type ExperienceData = {
	name: string
	location: string
	startDate: string
	endDate: string
	description: string[]
}

export const experienceData: ExperienceData[] = [
	{
		name: 'Classify',
		location: 'Remote | Freelance',
		startDate: '2023',
		endDate: 'PRESENT',
		description: [
			'Write modern, performant, maintainable code as per requirements tending to updating of main website.',
			'Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, React, Gatsby, GraphQL, WordPress, Firebase, and Vercel.',
			'Implement accessibility and SEO standards.',
		],
	},
	{
		name: 'Taamra Engineering Consultants Pvt. Ltd.',
		location: 'Navi Mumbai, Maharashtra, India',
		startDate: '2021',
		endDate: '2023',
		description: [
			'Developed, maintained, and shipped production code for client using Next.js, CSS, JavaScript, and Markdown.',
			'Performed quality assurance tests on various sites to ensure cross-browser compatibility and mobile responsiveness.',
			'Implemented technical solutions as per the requirements and effortless interface for future content updates.',
		],
	},
]
