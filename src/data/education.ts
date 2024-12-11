type EducationData = {
	name: string
	location: string
	startDate: string
	endDate: string
	description: string[]
}

export const educationData: EducationData[] = [
	{
		name: 'Delhi Public School, Navi Mumbai',
		location: 'Navi Mumbai, Maharashtra, India',
		startDate: '2009',
		endDate: '2023',
		description: ['Class X: 98.2%', 'Class XII (AISSCE): 96.2%'],
	},

	{
		name: 'Vishwakarma Institute of Technology, Pune',
		location: 'Pune, Maharashtra, India',
		startDate: '2023',
		endDate: '2027',
		description: [
			"Bachelor's of Technology (B.Tech) in Information Technology",
			'Student Intern at VIERP, college’s own educational platform - led a team in developing a costless AI video summariser',
			'CGPA: 9.41',
		],
	},
]
