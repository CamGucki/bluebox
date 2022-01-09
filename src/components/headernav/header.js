import React, { Component } from "react";
import Logoimg from "../../../static/assets/images/bblogo1.png";

class Header extends Component {
	render() {
		return (
			<div className='header'>
				<img src={Logoimg} alt='Logoimg/50x50'></img>
			</div>
		);
	}
}
export default Header;
