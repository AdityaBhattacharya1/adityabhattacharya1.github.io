import { useState } from 'react'
import classes from './Menu.module.css'
import HomeIcon from '../../assets/Home'
import AboutIcon from '../../assets/About'
import TerminalIcon from '../../assets/Terminal'
import SkillsIcon from '../../assets/Skills'
import EducationIcon from '../../assets/Education'
import BriefcaseIcon from '../../assets/Briefcase'
import ChatIcon from '../../assets/Chat'

function Menu() {
	const [activeNav, setActiveNav] = useState('#')
	return (
		<nav className={classes.nav}>
			<a
				href="#"
				onClick={() => setActiveNav('#')}
				className={classes[activeNav === '#' ? 'active' : '']}
				aria-label="home"
			>
				<HomeIcon />
			</a>
			<a
				href="#about"
				onClick={() => setActiveNav('#about')}
				className={classes[activeNav === '#about' ? 'active' : '']}
				aria-label="about"
			>
				<AboutIcon />
			</a>
			<a
				href="#projects"
				onClick={() => setActiveNav('#projects')}
				className={classes[activeNav === '#projects' ? 'active' : '']}
				aria-label="projects"
			>
				<TerminalIcon />
			</a>
			<a
				href="#skills"
				onClick={() => setActiveNav('#skills')}
				className={
					classes[activeNav === '#skills' ? 'active' : ''] +
					' ' +
					classes.skills
				}
				aria-label="skills"
			>
				<SkillsIcon />
			</a>
			<a
				href="#education"
				onClick={() => setActiveNav('#education')}
				className={classes[activeNav === '#education' ? 'active' : '']}
				aria-label="educational experience"
			>
				<EducationIcon />
			</a>
			<a
				href="#experience"
				onClick={() => setActiveNav('#experience')}
				className={classes[activeNav === '#experience' ? 'active' : '']}
				aria-label="professional experience"
			>
				<BriefcaseIcon />
			</a>
			<a
				href="#contact"
				onClick={() => setActiveNav('#contact')}
				className={classes[activeNav === '#contact' ? 'active' : '']}
				aria-label="contact"
			>
				<ChatIcon />
			</a>
		</nav>
	)
}

export default Menu
