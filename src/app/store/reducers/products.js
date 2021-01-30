import * as Actions from '../actions/products';

const initialState = {
	category_id: 1,
	class_id: null,
	products: [],
	winterProducts: [],
	otherProducts: [],
	product: {},
	cartQuantity: 0,
	region: 'EU'
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
				otherProducts: action.payload
			};
		}
		case Actions.PRODUCT_GET_BY_ID: {
			return {
				...state,
				product: action.payload
			};
		}
		case Actions.FILTER_BY_CATEGORY: {
			return {
				...state,
				category_id: action.payload.id,
				products: state.otherProducts.filter(
					p =>
						p.CategoryId === action.payload.id &&
						(state.class_id
							? p.ProductClassId === state.class_id
							: p.ProductClassId > 0)
				),
				winterProducts: state.otherProducts.filter(
					p =>
						p.CategoryId === action.payload.id &&
						p.SeasonId === 1 &&
						(state.class_id
							? p.ProductClassId === state.class_id
							: p.ProductClassId > 0)
				)
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
				)
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
				)
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
				)
			};
		}
		case Actions.ADD_TO_CART: {
			return {
				...state,
				cartQuantity: (state.cartQuantity += action.payload.quantity)
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
