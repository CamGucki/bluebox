import React, { Component } from "react";
import SignUpForm from "./signupForm";
import PageTitle from "../pageTitle";

import { connect } from "react-redux";
import * as actions from "../../actions";

class SignUp extends Component {
	constructor(props) {
		super(props);

		this.handleSuccessfulAuth = this.handleSuccessfulAuth.bind(this);
		this.handleUnsuccessfulAuth = this.handleUnsuccessfulAuth.bind(this);
	}

	handleSuccessfulAuth() {
		this.props.handleSuccessfulLogin();
		this.props.history.push("/account");
	}

	handleUnsuccessfulAuth() {
		this.props.handleUnsuccessfulLogin();
	}

	componentDidMount() {
		this.props.setHeaderLinks([]);
		this.props.setNavbarLinks([]);
	}

	onSubmit = (fields) => {
		console.log(fields);
	};
	render() {
		return (
			<div className='sign-up'>
				<PageTitle className='sign-up__page-title' title='Register' />
				<SignUpForm onSubmit={this.onSubmit} className='sign-up__form' />
			</div>
		);
	}
}

SignUp = connect(null, actions)(SignUp);

export default SignUp;
