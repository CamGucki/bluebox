import React, { Component } from "react";

import Header from "./headernav/header";
import Navbar from "./headernav/navbar";
import LogoIconimg from "../../static/assets/images/bblogoIcon1.png";

class Layout extends Component {
	render() {
		return (
			<div className='layout_page'>
				{this.props.children}
				<Header />
				<Navbar />
			</div>
		);
	}
}

export default Layout;
