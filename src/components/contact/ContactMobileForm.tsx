import { useForm, ValidationError } from '@formspree/react'
import classes from './ContactMobileForm.module.css'
import Button from '../interface/Button'
import useInput from '../../hooks/useForm'

export default function ContactMobileForm() {
	const [state, handleSubmit] = useForm('xeqwdwon')
	const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gi

	// form validation fun stuff!
	const {
		value: nameValue,
		isValid: nameIsValid,
		inputBlurHandler: nameInputBlurHandler,
		hasError: nameHasError,
		reset: resetName,
		valueChangeHandler: nameChangeHandler,
	} = useInput((val) => val.trim() != '')

	const {
		value: emailValue,
		isValid: emailIsValid,
		inputBlurHandler: emailInputBlurHandler,
		hasError: emailHasError,
		reset: resetEmail,
		valueChangeHandler: emailChangeHandler,
	} = useInput((val) => val.match(emailRegex))

	const {
		value: messageValue,
		isValid: messageIsValid,
		inputBlurHandler: messageInputBlurHandler,
		hasError: messageHasError,
		reset: resetMessage,
		valueChangeHandler: messageChangeHandler,
	} = useInput((val) => val.trim() != '')

	let formIsValid = false

	if (nameIsValid && emailIsValid && messageIsValid) {
		formIsValid = true
	}

	if (state.succeeded) {
		return (
			<h1 className={classes['success-txt']}>
				<svg width="100%" height="50%" className={classes.svg}>
					<text x="50%" y="60%" text-anchor="middle">
						Thanks!
					</text>
				</svg>
			</h1>
		)
	}

	return (
		<div className={classes.container}>
			<h2 className={classes.header}>Say Hey!</h2>
			<form method="POST" onSubmit={handleSubmit}>
				<div className={`${classes['form-group']}`}>
					<input
						type="input"
						className={classes['form-field']}
						placeholder="Name"
						name="name"
						value={nameValue}
						onChange={nameChangeHandler}
						onBlur={nameInputBlurHandler}
						id="name"
						required
					/>
					<label htmlFor="name" className={classes['form-label']}>
						Full Name
					</label>
					{nameHasError && (
						<p className={classes['error-txt']}>Invalid input.</p>
					)}
					<ValidationError
						prefix="Email"
						field="email"
						errors={state.errors}
					/>
				</div>
				<div className={`${classes['form-group']}`}>
					<input
						type="input"
						className={classes['form-field']}
						placeholder="Email"
						name="email"
						id="email"
						value={emailValue}
						onChange={emailChangeHandler}
						onBlur={emailInputBlurHandler}
						required
					/>
					<label htmlFor="email" className={classes['form-label']}>
						Email Address
					</label>
					{emailHasError && (
						<p className={classes['error-txt']}>Invalid input.</p>
					)}
					<ValidationError
						prefix="Email"
						field="email"
						errors={state.errors}
					/>
				</div>
				<div className={`${classes['form-group']}`}>
					<input
						type="input"
						className={classes['form-field']}
						placeholder="Message"
						name="message"
						id="message"
						value={messageValue}
						onChange={messageChangeHandler}
						onBlur={messageInputBlurHandler}
						required
					/>
					<label htmlFor="message" className={classes['form-label']}>
						Message
					</label>
					{emailHasError && (
						<p className={classes['error-txt']}>Invalid input.</p>
					)}
					<ValidationError
						prefix="Message"
						field="message"
						errors={state.errors}
					/>
				</div>
				<Button
					className={classes['submit-btn']}
					text="Submit"
					type="submit"
					disabled={state.submitting}
				/>
				<ValidationError errors={state.errors} />
			</form>
		</div>
	)
}
