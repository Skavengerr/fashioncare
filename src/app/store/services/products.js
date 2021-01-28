import axios from 'axios';

class productService {
	getProducts = () =>
		axios({
			method: 'GET',
			url: '/API/ProductList'
		});
	getProductById = id =>
		axios({
			method: 'GET',
			url: `/API/Product?id=${id}`
		});
	getRegion = () =>
		axios({
			method: 'GET',
			url: `http://www.geoplugin.net/json.gp`
		});
}

const instance = new productService();

export default instance;
