import { SET_SHOP_PRODUCTS } from "./types";

import axios from "axios";

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
