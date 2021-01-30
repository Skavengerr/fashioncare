import productService from '../services/products';

export const FILTER_BY_CATEGORY_AND_CLASS = 'FILTER_BY_CATEGORY_AND_CLASS';
export const CLEAR_FILTER_BY_CATEGORY = 'CLEAR_FILTER_BY_CATEGORY';
export const FILTER_BY_CATEGORY = 'FILTER_BY_CATEGORY';
export const PRODUCT_GET_BY_ID = 'PRODUCT_GET_BY_ID';
export const FILTER_BY_CLASS = 'FILTER_BY_CLASS';
export const FILTER_BY_BRAND = 'FILTER_BY_BRAND';
export const SEARCH_BY_VALUE = 'SEARCH_BY_VALUE';
export const PRODUCTS_GET = 'PRODUCTS_GET';
export const ADD_TO_CART = 'ADD_TO_CART';
export const REGION_GET = 'REGION_GET';
export const SEND_EMAIL = 'SEND_EMAIL';

export function getProducts() {
	return dispatch =>
		productService.getProducts().then(res => {
			return dispatch({
				type: PRODUCTS_GET,
				payload: res.data.Products
			});
		});
}

export function getProductById(id) {
	return dispatch =>
		productService.getProductById(id).then(res => {
			return dispatch({
				type: PRODUCT_GET_BY_ID,
				payload: res.data
			});
		});
}

export function filterByCategory(id) {
	return {
		type: FILTER_BY_CATEGORY,
		payload: {
			id
		}
	};
}

export function clearFilterByClass() {
	return {
		type: CLEAR_FILTER_BY_CATEGORY
	};
}

export function filterByClass(id) {
	return {
		type: FILTER_BY_CLASS,
		payload: {
			id
		}
	};
}

export function filterByBrand(id) {
	return {
		type: FILTER_BY_BRAND,
		payload: {
			id
		}
	};
}

export function filterByCategoryAndClass(classId, categoryId) {
	return {
		type: FILTER_BY_CATEGORY_AND_CLASS,
		payload: {
			classId,
			categoryId
		}
	};
}

export function searchByValue(id) {
	return dispatch =>
		productService.searchByValue(id).then(res => {
			return dispatch({
				type: SEARCH_BY_VALUE,
				payload: res.data.Products
			});
		});
}

export function sendEmail(email) {
	return dispatch =>
		productService.sendEmail(email).then(res => {
			return dispatch({
				type: SEND_EMAIL,
				payload: res.data
			});
		});
}

export function addToCart(product) {
	return {
		type: ADD_TO_CART,
		payload: product
	};
}

export function getRegion() {
	return dispatch =>
		productService.getRegion().then(res => {
			if (res && res.data && res.data.geoplugin_countryCode) {
				return dispatch({
					type: REGION_GET,
					payload: res.data.geoplugin_countryCode
				});
			}
		});
}
