import React, { Component } from "react";
import { connect } from "react-redux";

function PurchaseDetailLabel({ className, title, value }) {
	return (
		<div className={`${className} purchase-detail-label`}>
			<div className='purchase-detail-label__title'>{title}</div>
			<div className='purchase-detail-label__value'>{value}</div>
		</div>
	);
}

// total: 19.40,
// creditCard: '-0000',

class PurchaseDetail extends Component {
	render() {
		const {
			className,
			orderNumber,
			orderDate,
			user,
			total,
			creditCard,
			nameAddress,
		} = this.props;

		return (
			<div className={`${className} purchase-detail`}>
				<PurchaseDetailLabel
					className='purchase-detail__order-number'
					title='Order Number'
					value={orderNumber}
				/>
				<PurchaseDetailLabel
					className='purchase-detail__order-date'
					title='Order Date'
					value={orderDate}
				/>

				<PurchaseDetailLabel
					className='purchase-detail__total'
					title='Total'
					value={total}
				/>
				<PurchaseDetailLabel
					className='purchase-detail__credit-card'
					title='Credit Card'
					value={creditCard}
				/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { purchaseDetail } = state.user;
	return {
		...purchaseDetail,
	};
}

PurchaseDetail = connect(mapStateToProps)(PurchaseDetail);

export default PurchaseDetail;
