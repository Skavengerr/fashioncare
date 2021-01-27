import * as Actions from '../actions/products';

const initialState = {
	category_id: 1,
	products: [],
	product: {}
};

const Products = function (state = initialState, action) {
	console.log('🚀 ~ file: products.js ~ line 10 ~ Products ~ action', action);
	switch (action.type) {
		case Actions.PRODUCT_CATEGORY_CHANGE: {
			return {
				...state,
				category_id: action.payload.id,
				products: action.payload.data
			};
		}
		case Actions.PRODUCT_GET: {
			return {
				...state,
				products: action.payload
			};
		}
		case Actions.PRODUCT_GET_BY_ID: {
			return {
				...state,
				product: action.payload
			};
		}
		default: {
			return state;
		}
	}
};

export default Products;
