import React, { Component } from "react";

import PageTitle from "../pageTitle";
import PurchaseDetail from "./purchase-detail";
import Purchases from "./purchases";

class PurchaseHistory extends Component {
	render() {
		return (
			<div className='purchase-history'>
				<PageTitle
					className='purchase-history__page-title'
					title='Purchase History'
				/>
				<Purchases className='purchase-history__purchases' />
				<PurchaseDetail className='purchase-hisrtory__detail' />
				<div className='purchase-history__border-bottom'></div>
			</div>
		);
	}
}
export default PurchaseHistory;
