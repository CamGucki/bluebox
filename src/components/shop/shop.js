import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../../actions";
import ShopSearchBar from "./shopSearchBar";
import ShopProduct from "./shopProduct";
import shopReducer from "../../reducers/shopReducer";

class Shop extends Component {
	componentDidMount() {
		const headerLinks = [
			{
				_id: 0,
				title: "Logout",
				path: "/signin",
			},
		];
		this.props.setHeaderLinks(headerLinks);
		this.props.fetchShopCategories();
		// fetch navbar links
		// set navbar links
		// filter products with links
		this.props.fetchShopProducts();
	}

	shouldComponentUpdate(nextProps) {
		if (this.props != nextProps) {
			this.props.setNavbarLinks(nextProps.categories, (_id) =>
				this.props.filterProductsWithCategoryId(_id)
			);
		}
		return true;
	}

	onSubmit = (fields) => {
		this.props.filterProductsWithQuery(fields);
	};

	render() {
		return (
			<div className='shop'>
				<ShopSearchBar onSubmit={this.onSubmit} className='shop__search-bar' />
				{/* shop product */}
				<div className='shop__products'>
					{this.props.products.map((product) => {
						return <ShopProduct {...product} key={product._id} />;
					})}
				</div>
				{/* shop cart button */}
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { categories, filteredProducts, products } = state.shop;
	return {
		categories,
		filteredProducts,
		products,
	};
}

Shop = connect(mapStateToProps, actions)(Shop);
export default Shop;
