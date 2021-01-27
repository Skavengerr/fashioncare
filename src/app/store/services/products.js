import axios from 'axios';

class productService {
	getProducts = () =>
		axios({
			method: 'GET',
			url: '/API/ProductList/list'
		});
	getProductById = id =>
		axios({
			method: 'GET',
			url: `/API/Product?id=${id}`
		});
}

const instance = new productService();

export default instance;
