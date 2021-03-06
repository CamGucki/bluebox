import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

import { FormInput, FormButton } from "../formFields";
import Details from "../details";

import history from "../../history";

class SignInForm extends Component {
	render() {
		console.log();
		const { className, handleSubmit } = this.props;
		const links = [
			{
				id: 0,
				title: "Not registered? Create account here",
				onClick: () => history.push("/signup"),
			},
			{
				id: 1,
				title: "Forgot account email?",
				onClick: () => console.log("forgot email"),
			},
			{
				id: 2,
				title: "Forgot password?",
				onClick: () => console.log("forgot password"),
			},
		];
		return (
			<form onSubmit={handleSubmit} className={`${className} sign-in-form`}>
				<Field
					className='sign-in-form__email'
					type='email'
					title='Email'
					placeholder='Email'
					name='email'
					component={FormInput}
				/>
				<Field
					className='sign-in-form__password'
					type='password'
					title='Password'
					placeholder='Password'
					name='password'
					component={FormInput}
				/>
				<div className='sign-in-form__line'></div>
				<Field
					className='sign-in-form__login'
					onClick={() => history.push("/account")}
					type='submit'
					title='Login'
					name='login'
					component={FormButton}
				/>
				<Details
					className='sign-in-form__details'
					title='QuickLinks'
					links={links}
				/>
			</form>
		);
	}
}

SignInForm = reduxForm({
	form: "SignInForm",
})(SignInForm);

export default SignInForm;
