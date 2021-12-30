import React, { Component } from "react";
import Logoimg from "../../../static/assets/images/bblogo.png";

class Header extends Component {
	render() {
		return (
			<div className='header'>
				<img src={Logoimg} alt='Logoimg'></img>
			</div>
		);
	}
}
export default Header;
