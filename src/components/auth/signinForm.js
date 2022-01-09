import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

import { FormInput, FormButton } from "../formFields";

class SignInForm extends Component {
	render() {
		const { className } = this.props;
		return (
			<form className={`${className} sign-in-form`}>
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
				<Field
					className='sign-in-form__login'
					onClick={() => console.log("tryna submit")}
					type='submit'
					title='Login'
					placeholder='login'
					name='login'
					component={FormButton}
				/>
			</form>
		);
	}
}
SignInForm = reduxForm({
	form: "SignInForm",
})(SignInForm);
export default SignInForm;
