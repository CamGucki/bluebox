import React, { Component } from "react";
import Logoimg from "../../../static/assets/images/bblogo1.png";

import { connect } from "react-redux";

class Header extends Component {
	render() {
		return (
			<div className='header'>
				<img class='header-img' src={Logoimg} alt='Logoimg/50x50'></img>
				<div className='navbar'>
					{this.props.headerLinks.map((link, index) => {
						return (
							<a
								className='header__link'
								key={index}
								onClick={() => console.log("trying to switch tab")}
							>
								{link.title}
							</a>
						);
					})}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { headerLinks } = state.headerNavbar;
	return {
		headerLinks,
	};
}
Header = connect(mapStateToProps)(Header);

export default Header;
