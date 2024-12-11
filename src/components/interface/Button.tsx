import React, { ReactElement } from 'react'
import classes from './Button.module.css'

type Props = {
	text: string | ReactElement
	onClick?: React.MouseEventHandler<any>
	className?: string
	type: 'button' | 'submit' | 'reset' | undefined
	disabled?: boolean
	id?: string
}

function Button({ text, onClick, className, type, disabled, id }: Props) {
	let classNames = `${className || ''} ${classes.btn} `
	className == 'hero-btn' ? (classNames += classes['hero-btn']) : ''
	return (
		<button
			className={classNames}
			onClick={onClick}
			type={type}
			disabled={disabled}
			id={id}
		>
			{text}
		</button>
	)
}

export default Button
