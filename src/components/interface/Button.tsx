import React, { ReactElement } from 'react'
import classes from './Button.module.css'

type Props = {
	text: string | ReactElement
	onClick?: React.MouseEventHandler<any>
	className?: string
	type: 'button' | 'submit' | 'reset' | undefined
	disabled?: boolean
}

function Button({ text, onClick, className, type, disabled }: Props) {
	let classNames = `${className || ''} ${classes.btn} `
	className == 'hero-btn' ? (classNames += classes['hero-btn']) : ''
	return (
		<button
			className={classNames}
			onClick={onClick}
			type={type}
			disabled={disabled}
		>
			{text}
		</button>
	)
}

export default Button
