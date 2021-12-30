import React, { Component } from "react";

class Layout extends Component {
	render() {
		return <div className='layout_page'>{this.props.children}</div>;
	}
}

export default Layout;
