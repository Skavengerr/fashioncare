import * as Actions from '../actions/products';

const initialState = {
	category_id: 1,
	products: [],
	winterProducts: [],
	SummerProducts: [],
	otherProducts: [],
	product: {},
	region: 'EU'
};

const Products = function (state = initialState, action) {
	switch (action.type) {
		case Actions.PRODUCT_GET: {
			return {
				...state,
				products: action.payload.filter(p => p.CategoryId === state.category_id),
				winterProducts: action.payload.filter(
					p => p.SeasonId === 1 && p.CategoryId === state.category_id
				),
				summerProducts: action.payload.filter(
					p => p.SeasonId === 2 && p.CategoryId === state.category_id
				),
				otherProducts: action.payload
			};
		}
		case Actions.PRODUCT_GET_BY_ID: {
			return {
				...state,
				product: action.payload
			};
		}
		case Actions.PRODUCT_CATEGORY_CHANGE: {
			return {
				...state,
				category_id: action.payload.id,
				products: action.payload.data.filter(
					p => p.CategoryId === action.payload.id
				),
				winterProducts: action.payload.data.filter(
					p => p.CategoryId === action.payload.id && p.SeasonId === 1
				),
				summerProducts: action.payload.data.filter(
					p => p.CategoryId === action.payload.id && p.SeasonId === 2
				)
			};
		}
		case Actions.REGION_GET: {
			return {
				...state,
				region: action.payload
			};
		}
		default: {
			return state;
		}
	}
};

export default Products;
