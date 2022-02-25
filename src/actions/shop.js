import {
	SET_SHOP_CATEGORIES,
	SET_NAVBAR_LINKS,
	SET_SHOP_PRODUCTS,
	FILTER_PRODUCTS_WITH_CATEGORY_ID,
	FILTER_PRODUCTS_WITH_QUERY,
} from "./types";

import axios from "axios";

export function filterProductsWithQuery(fields) {
	return {
		type: FILTER_PRODUCTS_WITH_QUERY,
		payload: fields,
	};
}

export function filterProductsWithCategoryId(_id) {
	return {
		type: FILTER_PRODUCTS_WITH_CATEGORY_ID,
		payload: _id,
	};
}

export function fetchShopCategories(_id) {
	return {
		type: SET_SHOP_CATEGORIES,
		payload: [
			{
				_id: 1,
				title: "Horror",
			},
			{
				_id: 2,
				title: "Comedy",
			},
			{
				_id: 3,
				title: "ChickFlix",
			},
			{
				_id: 4,
				title: "Family/Kids",
			},
			{
				_id: 5,
				title: "GuyFlix",
			},
			{
				_id: 6,
				title: "Games",
			},
			,
		],
	};
}

export function fetchShopProducts() {
	return function (dispatch) {
		axios.get("http://localhost:5000/movies").then((response) => {
			console.log(response.data);
			dispatch({
				type: SET_SHOP_PRODUCTS,
				payload: response.data,
			});
		});
	};
}
// 	return {
// 		type: SET_SHOP_PRODUCTS,
// 		payload: [
// 			{
// 				_id: 0,
// 				title: "The Conjuring",
// 				description: "",
// 				price: "1.99",
// 				belongsTo: [0, 1],
// 			},

// 			{
// 				_id: 1,
// 				title: "The Mummy",
// 				description: "",
// 				price: "1.99",
// 				belongsTo: [0, 4, 5, 2],
// 			},
// 			{
// 				_id: 2,
// 				title: "Liar Liar",
// 				description: "",
// 				price: "1.99",
// 				belongsTo: [0, 4],
// 			},
// 			{
// 				_id: 3,
// 				title: "Some girly moviex",
// 				description: "",
// 				price: "1.99",
// 				belongsTo: [0, 3],
// 			},
// 			{
// 				_id: 4,
// 				title: "Shrek",
// 				description: "",
// 				price: "1.99",
// 				belongsTo: [0, 2, 4],
// 			},
// 			{
// 				_id: 5,
// 				title: "Matrix",
// 				description: "",
// 				price: "1.99",
// 				belongsTo: [0, 5],
// 			},
// 			{
// 				_id: 6,
// 				title: "Call Of Duty",
// 				description: "",
// 				price: "1.99",
// 				belongsTo: [0, 6],
// 			},
// 		],
// 	};
//
