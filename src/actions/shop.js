import {
	// SET_SHOP_CATEGORIES
	SET_NAVBAR_LINKS,
	SET_SHOP_PRODUCTS,
} from "./types";

export function fetchShopCategories() {
	return {
		type: SET_NAVBAR_LINKS,
		payload: [
			{
				_id: 0,
				title: "All",
			},
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
				title: "Action",
			},
			{
				_id: 6,
				title: "Crime",
			},
		],
	};
}

export function fetchShopProducts() {
	return {
		type: SET_SHOP_PRODUCTS,
		payload: [
			{
				_id: 0,
				title: "All",
				description: "",
				price: "1.99",
				genre: [0],
			},

			{
				_id: 1,
				title: "Horror",
				description: "",
				price: "1.99",
				genre: [0],
			},
			{
				_id: 2,
				title: "Comedy",
				description: "",
				price: "1.99",
				genre: [0],
			},
			{
				_id: 3,
				title: "ChickFlix",
				description: "",
				price: "1.99",
				genre: [0],
			},
			{
				_id: 4,
				title: "Family/Kids",
				description: "1.99",
				price: "",
				genre: [0],
			},
			{
				_id: 5,
				title: "Action",
				description: "1.99",
				price: "",
				genre: [0],
			},
			{
				_id: 6,
				title: "Crime",
				description: "",
				price: "1.99",
				genre: [0],
			},
		],
	};
}
