import { SET_USER_PURCHASES, SET_PURCHASE_DETAIL } from "./types";

export function setPurchaseDetail(_id) {
	return {
		type: SET_PURCHASE_DETAIL,
		payload: _id,
	};
}

export function fetchUserPurchases() {
	return {
		type: SET_USER_PURCHASES,
		payload: [
			{
				_id: 0,
				total: 19.4,
				orderNumber: "A0048248343",
				orderDate: new Date().toDateString(),
				creditCard: "-0000",
				user: {
					name: "Cameron Bogucki",
					shippingAddress: "4454 Seseme str",
				},
			},
			{
				_id: 1,
				total: 1.3,
				orderNumber: "24343sdfkjh72",
				orderDate: new Date().toDateString(),
				creditCard: "-0000",
				user: {
					name: "dre dre",
					shippingAddress: "1337 State Street",
				},
			},
			{
				_id: 2,
				total: 1.3,
				orderNumber: "B0048248343",
				orderDate: new Date().toDateString(),
				creditCard: "-0000",
				user: {
					name: "dre dre",
					shippingAddress: "1234 State Street",
				},
			},
			{
				_id: 3,
				total: 16.4,
				orderNumber: "ADFasdlfkjwe",
				orderDate: new Date().toDateString(),
				creditCard: "-0000",
				user: {
					name: "tara anderson",
					shippingAddress: "123 State Street",
				},
			},
			{
				_id: 4,
				total: 19.4,
				orderNumber: "A0048248343",
				orderDate: new Date().toDateString(),
				creditCard: "-0000",
				user: {
					name: "jo jo",
					shippingAddress: "1234 West State Street",
				},
			},
			{
				_id: 5,
				total: 19.4,
				orderNumber: "A0048248343",
				orderDate: new Date().toDateString(),
				creditCard: "-0000",
				user: {
					name: "jo jo",
					shippingAddress: "1234 West State Street",
				},
			},
			{
				_id: 6,
				total: 19.4,
				orderNumber: "A0048248343",
				orderDate: new Date().toDateString(),
				creditCard: "-0000",
				user: {
					name: "jo jo ",
					shippingAddress: "1234 West State Street",
				},
			},
			{
				_id: 7,
				total: 3.2,
				orderNumber: "5UFISHDFJASUSHI298",
				orderDate: new Date().toDateString(),
				creditCard: "-0000",
				user: {
					name: "jo jo mama",
					shippingAddress: "348 Yo State Street",
				},
			},
		],
	};
}
