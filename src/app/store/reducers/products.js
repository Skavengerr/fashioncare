import * as Actions from '../actions/products';

const initialState = {
	category_id: 1,
	class_id: null,
	products: [],
	winterProducts: [],
	otherProducts: [],
	alsoLikeProducts: [],
	product: {},
	cartQuantity: 0,
	region: 'CH',
	searchError: false,
	user: null
};

const Products = function (state = initialState, action) {
	switch (action.type) {
		case Actions.PRODUCTS_GET: {
			return {
				...state,
				products: action.payload.filter(p => p.CategoryId === state.category_id),
				winterProducts: action.payload.filter(
					p => p.SeasonId === 1 && p.CategoryId === state.category_id
				),
				otherProducts: action.payload,
				alsoLikeProducts: action.payload
			};
		}
		case Actions.GET_USER: {
			return {
				...state,
				user: action.payload
			};
		}
		case Actions.SEARCH_BY_VALUE: {
			return {
				...state,
				category_id: 0,
				products: action.payload,
				searchError: action.payload.length ? false : true
			};
		}
		case Actions.PRODUCT_GET_BY_ID: {
			return {
				...state,
				product: action.payload,
				alsoLikeProducts: state.otherProducts.filter(
					p => p.CategoryId === state.category_id
				),
				searchError: false
			};
		}
		case Actions.FILTER_BY_CATEGORY: {
			return {
				...state,
				category_id: action.payload.id,
				products: state.otherProducts.filter(
					p => p.CategoryId === action.payload.id
				),
				winterProducts: state.otherProducts.filter(
					p => p.CategoryId === action.payload.id && p.SeasonId === 1
				),
				searchError: false
			};
		}
		case Actions.FILTER_BY_BRAND: {
			return {
				...state,
				brand_id: action.payload.id,
				category_id: 0,
				products: state.otherProducts.filter(
					p => p.BrandId === action.payload.id
				),
				winterProducts: state.otherProducts.filter(
					p => p.BrandId === action.payload.id && p.SeasonId === 1
				),
				searchError: false
			};
		}
		case Actions.FILTER_BY_CLASS: {
			return {
				...state,
				class_id: action.payload.id,
				products: state.otherProducts.filter(
					p =>
						p.ProductClassId === action.payload.id &&
						p.CategoryId === state.category_id
				),
				winterProducts: state.otherProducts.filter(
					p =>
						p.ProductClassId === action.payload.id &&
						p.SeasonId === 1 &&
						p.CategoryId === state.category_id
				),
				searchError: false
			};
		}
		case Actions.FILTER_BY_CATEGORY_AND_CLASS: {
			return {
				...state,
				class_id: action.payload.classId,
				category_id: action.payload.categoryId,
				products: state.otherProducts.filter(
					p =>
						p.ProductClassId === action.payload.classId &&
						p.CategoryId === action.payload.categoryId
				),
				winterProducts: state.otherProducts.filter(
					p =>
						p.ProductClassId === action.payload.classId &&
						p.SeasonId === 1 &&
						p.CategoryId === action.payload.categoryId
				),
				searchError: false
			};
		}
		case Actions.CLEAR_FILTER_BY_CATEGORY: {
			return {
				...state,
				class_id: null,
				products: state.otherProducts.filter(
					p => p.CategoryId === state.category_id
				),
				winterProducts: state.otherProducts.filter(
					p => p.CategoryId === state.category_id && p.SeasonId === 1
				),
				searchError: false
			};
		}
		case Actions.ADD_TO_CART: {
			return {
				...state,
				cartQuantity: (state.cartQuantity += action.product.quantity)
			};
		}
		case Actions.SEND_EMAIL: {
			return {
				...state,
				catalog: action.payload
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
