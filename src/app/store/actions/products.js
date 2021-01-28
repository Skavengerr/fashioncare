import productService from '../services/products';

export const PRODUCT_CATEGORY_CHANGE = 'PRODUCT_CATEGORY_CHANGE';
export const PRODUCT_GET_BY_ID = 'PRODUCT_GET_BY_ID';
export const PRODUCT_GET = 'PRODUCT_GET';
export const REGION_GET = 'REGION_GET';

export function getProducts() {
	return dispatch =>
		productService.getProducts().then(res => {
			return dispatch({
				type: PRODUCT_GET,
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

export function changeProductCategory(id) {
	return {
		type: PRODUCT_CATEGORY_CHANGE,
		id: id
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
