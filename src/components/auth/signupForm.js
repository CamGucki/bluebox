import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

import { FormInput, FormButton } from "../formFields";
import Details from "../details";

import history from "../../history";
import axios from "axios";

class SignUpForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			name: "",
			password: "",
			streetAddress: "",
			city: "",
			state: "",
			zip: "",
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value,
			errorText: "",
		});
	}

	handleSubmit(event) {
		console.log("submit data");
		axios
			.post("http://127.0.0.1:5000/user", {
				name: this.state.name,
				email: this.state.email,
				password: this.state.password,
				streetAddress: this.state.streetAddress,
				city: this.state.city,
				state: this.state.state,
				zip: this.state.zip,
			})
			.then((response) => {
				console.log(response.data);
			})
			.catch(() => {
				this.setState({
					errorText: "An error occurred",
				});
			});
		event.preventDefault();
	}
	render() {
		const { className, handleSubmit } = this.props;
		const info = [
			{
				id: 0,
				title: "At least 6 characters",
			},
			{
				id: 1,
				title: "At least one number",
			},
			{
				id: 2,
				title: "At least one symbol",
			},
		];

		return (
			<form
				onSubmit={this.handleSubmit}
				className={`${className} sign-up-form`}
			>
				<Field
					className='sign-up-form__name'
					type='name'
					title='Name'
					placeholder='Name'
					value={this.state.name}
					name='name'
					component={FormInput}
				/>
				<Field
					className='sign-up-form__email'
					type='email'
					title='Email'
					placeholder='Email'
					name='email'
					onChange={this.handleChange}
					component={FormInput}
				/>
				<Field
					className='sign-up-form__password'
					type='password'
					title='Password'
					placeholder='Password'
					name='password'
					component={FormInput}
				/>
				<Field
					className='sign-up-form__confirm'
					type='password'
					title='Confirm Password'
					placeholder='Confirm Password'
					name='confirm'
					component={FormInput}
				/>
				<Field
					className='account-information-form__street-address'
					type='address'
					title='Street Address'
					placeholder='Street Address'
					name='address'
					component={FormInput}
				/>
				<Field
					className='account-information-form__city'
					type='city'
					title='City'
					placeholder='City'
					name='city'
					component={FormInput}
				/>
				<Field
					className='account-information-form__state'
					type='state'
					title='State'
					placeholder='State'
					name='state'
					component={FormInput}
				/>
				<Field
					className='account-information-form__zipcode'
					type='zipcode'
					title='Zipcode'
					placeholder='Zipcode'
					name='zipcode'
					component={FormInput}
				/>
				<div></div>
				<div className='sign-up-form__line'></div>
				<Field
					className='sign-up-form__login'
					onClick={() => {
						this.handleSubmit;
					}}
					type='submit'
					title='Create Account'
					name='login'
					component={FormButton}
				/>
				<Field
					className='sign-up-form__back'
					onClick={() => history.push("/signin")}
					type='button'
					title='Back'
					name='back'
					short={true}
					component={FormButton}
				/>
				<Details
					className='sign-up-form__details'
					title='Password Requirements'
					info={info}
				/>
			</form>
		);
	}
}

SignUpForm = reduxForm({
	form: "SignUpForm",
})(SignUpForm);

export default SignUpForm;
