import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../../actions";
import ShopSearchBar from "./shopSearchBar";
import ShopProduct from "./shopProduct";
import ShopCart from "./shopCart";

class Shop extends Component {
	constructor() {
		super();

		this.state = {
			showCart: true,
		};
	}

	componentDidMount() {
		const headerLinks = [
			{
				id: 0,
				title: "Logout",
				path: "/signin",
			},
		];
		this.props.setHeaderLinks(headerLinks);
		// this.props.fetchShopCategories();

		// filter products with links
		this.props.fetchShopProducts();
	}

	// shouldComponentUpdate(nextProps) {
	// 	if (this.props != nextProps) {
	// 		this.props.setNavbarLinks(nextProps.categories, (id) =>
	// 			this.props.filterProductsWithCategoryId(id)
	// 		);
	// 	}
	// 	return true;
	// }

	// onSubmit = (fields) => {
	// 	this.props.filterProductsWithQuery(fields);
	// };

	render() {
		return (
			<div className='shop'>
				<ShopSearchBar onSubmit={this.onSubmit} className='shop__search-bar' />
				{/* shop product */}
				<div className='shop__products'>
					{this.props.products.map((product) => {
						return <ShopProduct {...product} key={product.id} />;
					})}
				</div>
				{this.state.showCart ? <ShopCart className='shop__cart' /> : ""}

				{/* shop cart button */}
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { products } = state.shop;
	return {
		products,
	};
}

Shop = connect(mapStateToProps, actions)(Shop);

export default Shop;
