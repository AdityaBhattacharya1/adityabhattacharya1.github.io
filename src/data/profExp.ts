type ExperienceData = {
	name: string
	location: string
	startDate: string
	endDate: string
	description: string[]
}

export const experienceData: ExperienceData[] = [
	{
		name: 'InterviewMate',
		location: 'Remote, California',
		startDate: 'Jun 2024',
		endDate: 'Oct 2024',
		description: [
			'Single-handedly developed a comprehensive interview platform using cutting edge Generative AI tools and technologies.',
			'Implemented advanced audio streaming for seamless Text-to-Speech and Speech-to-Text experience with minimal overhead via serverless technologies (10% CPU usage at all times).',
			'Pioneered the design and implementation of an extensive system design accounting for edge cases and reducing load times by 35% cumulatively for all services.',
		],
	},
	{
		name: 'Classify',
		location: 'Remote, London',
		startDate: 'Mar 2023',
		endDate: 'Sep 2023',
		description: [
			'Entrusted with the comprehensive redesign and development of the company’s website, given updated design.',
			'Delivered a comprehensive redesign of the website, ensuring pixel-perfect alignment with design specifications; reduced bounce rates by 25% resulting in enhanced user retention.',
			'Optimized website accessibility and SEO, leading to a 60% increase in organic traffic and an enhanced user experience.',
		],
	},
	{
		name: 'Taamra Engineering Consultants Pvt. Ltd.',
		location: 'Navi Mumbai, Maharashtra, India',
		startDate: 'May 2021',
		endDate: 'May 2023',
		description: [
			'Single-handedly designed, developed, and launched the company’s website, demonstrating proficiency in web development technologies and ensuring optimal uptime and reliable user access.',
			'Implemented strategic SEO practices and site optimizations, leading to a remarkable 83% increase in website visits and over 200 additional pageviews daily.',
		],
	},
]
