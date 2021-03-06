import axios from 'axios';

class productService {
	getProducts = () =>
		axios({
			method: 'GET',
			url: '/API/ProductList'
		});
	getUser = () =>
		axios({
			method: 'GET',
			url: '/API/GetUser'
		});
	addToCart = product =>
		axios({
			method: 'Post',
			url: '/Shop/AddProductToCart',
			data: product
		});
	getProductById = id =>
		axios({
			method: 'GET',
			url: `/API/Product?id=${id}`
		});
	searchByValue = value =>
		axios({
			method: 'GET',
			url: `/API/ProductList?search=${value}`
		});
	sendEmail = email =>
		axios({
			method: 'GET',
			url: `/API/SendCatalog?email=${email}`
		});
	getRegion = () =>
		axios({
			method: 'GET',
			url: `http://www.geoplugin.net/json.gp`
		});
}

const instance = new productService();

export default instance;
