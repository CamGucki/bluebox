import React, { Component } from "react";
import { reduxForm } from "redux-form";

class Signin extends Component {
	render() {
		return <div className='sign-in'>sign in</div>;
	}
}

Signin = reduxForm({
	form: "SignIn",
})(Signin);

export default Signin;
