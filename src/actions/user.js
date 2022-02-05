import { SET_USER_PURCHASES, SET_PURCHASE_DETAIL } from "./types";

export function setPurchaseDetail(_id) {
	return {
		type: SET_PURCHASE_DETAIL,
		payload: _id,
	};
}

export function fetchUserPurchases() {
	return {
		// function(dispatch) axios.get("localhost server name here")
		type: SET_USER_PURCHASES,
		payload: [
			{
				id: 0,
				title: "movietitle1",
				amount: 1.6,
			},
			{
				id: 1,
				title: "movietitle2",
				amount: 1.6,
			},
			{
				id: 2,
				title: "movietitle3",
				amount: 1.6,
			},
			{
				id: 3,
				title: "movietitle4",
				amount: 1.6,
			},
			{
				id: 4,
				title: "movietitle5",
				amount: 1.6,
			},
			{
				id: 5,
				title: "movietitle6",
				amount: 1.6,
			},
			{
				id: 6,
				title: "movietitle7",
				amount: 1.6,
			},
			{
				id: 7,
				title: "movietitle8",
				amount: 1.6,
			},
		],
	};
}
