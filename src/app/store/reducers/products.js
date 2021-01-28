import * as Actions from '../actions/products';

const initialState = {
	category_id: 1,
	products: [],
	winterProducts: [],
	SummerProducts: [],
	otherProducts: [],
	men: [],
	women: [],
	kids: [],
	product: {},
	region: 'EU'
};

const Products = function (state = initialState, action) {
	console.log('🚀 ~ file: products.js ~ line 17 ~ Products ~ state', state);
	switch (action.type) {
		case Actions.PRODUCT_GET: {
			return {
				...state,
				men: action.payload.filter(p => p.CategoryId === 1),
				women: action.payload.filter(p => p.CategoryId === 2),
				kids: action.payload.filter(p => p.CategoryId === 3),
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
				category_id: action.id,
				products: state.products.filter(p => p.CategoryId === action.id),
				winterProducts: state.products.filter(
					p => p.CategoryId === action.id && p.SeasonId === 1
				),
				summerProducts: state.products.filter(
					p => p.CategoryId === action.id && p.SeasonId === 2
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
