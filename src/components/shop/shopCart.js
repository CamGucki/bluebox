import React, { Component } from "react";
import CartProduct from "./cartProduct";
import { connect } from "react-redux";
import * as actions from "../../actions";

function CartButton({ className, icon }) {
	return (
		<div className={`${className} cart-button`}>
			<i className={icon} />
		</div>
	);
}

function CartContent({ className, products }) {
	let count = products.length;
	let productsJSX = products.map((product) => <CartProduct key={product} />);
	return (
		<div className={`${className} cart-content`}>
			<div className='cart-content__title'>Cart ({count})</div>
			<div className='cart-content__products'>{productsJSX}</div>
			<CartFooter className='cart-content__footer' products={products} />
		</div>
	);
}

function CartFooter({ className, products }) {
	const price = 7.96;
	return (
		<div className={`${className} cart-footer`}>
			<a className='cart-footer__checkout'>Checkout</a>
			<div className='cart-footer__subtotal'>Subtotal</div>
			<div className='cart-footer__price'>${price}</div>
		</div>
	);
}

class ShopCart extends Component {
	render() {
		const { className } = this.props;
		return (
			<div className={`${className} shop-cart`}>
				<CartButton className='shop-cart__toggle' icon='fas fa-times' />
				<CartContent
					className='shop-cart__content'
					products={[243, 3434, 4554]}
				/>
			</div>
		);
	}
}
function mapStateToProps(state) {
	return {
		state,
	};
}

ShopCart = connect(mapStateToProps, actions)(ShopCart);

export default ShopCart;
