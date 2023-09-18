import ContactForm from './ContactForm'
import ContactMobileForm from './ContactMobileForm'
import classes from './ContactSection.module.css'
import GithubIcon from '../../assets/Github'
import LinkedInIcon from '../../assets/Linkedin'
import MailIcon from '../../assets/Mail'

function ContactSection() {
	return (
		<section id="contact">
			<ContactMobileForm />
			<div className={classes.container}>
				<div className={classes.contact}>
					<ContactForm />
				</div>
				<Footer />
			</div>
		</section>
	)
}

function Footer() {
	const routes = [
		{
			name: 'Projects',
			path: '/#projects',
		},
		{
			name: 'Skills',
			path: '/#skills',
		},
		{
			name: 'Education',
			path: '/#education',
		},
		{
			name: '404 Page',
			path: '/404',
		},
	]

	const socials = [
		{
			href: 'https://github.com/AdityaBhattacharya1',
			icon: <GithubIcon className={classes.socialLink} />,
			target: '_blank',
			label: 'github',
		},
		{
			href: 'https://www.linkedin.com/in/aditya-bhattacharya-software-developer/',
			icon: <LinkedInIcon className={classes.socialLink} />,
			target: '_blank',
			label: 'linkedIn',
		},
		{
			href: 'mailto:adityaBha@pm.me',
			icon: <MailIcon className={classes.socialLink} />,
			target: '',
			label: 'email',
		},
	]
	return (
		<div className={classes.footer}>
			<h1 className={classes['footer-logo']}>Contact</h1>
			<div className={classes.contain}>
				<div className={classes.col}>
					<h1>Me</h1>
					<ul className={classes['list-container']}>
						{routes.map((route, idx) => {
							return (
								<li key={idx}>
									<a
										className={classes.links}
										href={route.path}
									>
										{route.name}
									</a>
								</li>
							)
						})}
					</ul>
				</div>
				<div className={classes.col}>
					<h1>Get in Touch</h1>
					<ul className={classes['list-container']}>
						<li>
							<a className={classes.links} href="/#contact">
								Contact
							</a>
						</li>
					</ul>
				</div>
				<div className={`${classes.col} ${classes.social}`}>
					<h1>Social</h1>
					<ul className={classes['list-container']}>
						{socials.map((social, idx) => {
							return (
								<li key={idx}>
									<a
										className={classes.links}
										href={social.href}
										target={social.target}
										aria-label={social.label}
									>
										{social.icon}
									</a>
								</li>
							)
						})}
					</ul>
				</div>
				<div className={classes.clearfix}></div>
			</div>
		</div>
	)
}

export default ContactSection
