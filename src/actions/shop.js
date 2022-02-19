import {
	// SET_SHOP_CATEGORIES
	SET_NAVBAR_LINKS,
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
