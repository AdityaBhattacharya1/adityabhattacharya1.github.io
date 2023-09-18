type Route = {
	id: string
	children: string
	href: string
	icon?: string
	onClick?: () => void
}

type MenuRoute = {
	id: string
	heading: string
	items: Route[]
}

// icons used here are from hero-icons
export const routes: Route[] = [
	{
		id: 'home',
		children: 'Home',
		icon: 'HomeIcon',
		href: '#',
	},
	{
		id: 'projects',
		children: 'Projects',
		icon: 'BeakerIcon',
		href: '#projects',
	},
	{
		id: 'skills',
		children: 'Skills',
		icon: 'BookOpenIcon',
		href: '#skills',
	},
	{
		id: 'education',
		children: 'Education',
		icon: 'AcademicCapIcon',
		href: '#education',
	},
	{
		id: 'experience',
		children: 'Experience',
		icon: 'BriefcaseIcon',
		href: '#experience',
	},
]

export const menuRoutes: MenuRoute[] = [
	{
		heading: 'Main',
		id: 'home',
		items: routes,
	},
	{
		heading: 'Assorted Goods',
		id: 'eggs',
		items: [
			{
				id: 'linkedin',
				children: 'LinkedIn',
				href: '',
				onClick: () =>
					window.location.assign(
						'https://www.linkedin.com/in/aditya-bhattacharya-software-developer/'
					),
			},
			{
				id: 'github',
				children: 'Github',
				href: '',
				onClick: () =>
					window.location.assign(
						'https://www.github.com/AdityaBhattacharya1/'
					),
			},
			{
				id: '404',
				children: '404 Page',
				href: '/404',
			},
		],
	},
]
