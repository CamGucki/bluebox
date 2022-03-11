import React, { Component } from "react";
import BluePriceTag from "../bluePriceTag";
import Quantity from "../quantity";

export default class CartProduct extends Component {
	render() {
		const { className, genre, title, description, price, movieImg, quantity } =
			this.props;
		return (
			<div className={`${className} cart-product`}>
				<img
					className='cart-product__img'
					src={movieImg}
					alt='Logoimg/50x50'
				></img>
				;
				<Quantity className='cart-product__quantity' quantity={1} />
				<BluePriceTag className='cart-product__price' title={price} />;
			</div>
		);
	}
}
