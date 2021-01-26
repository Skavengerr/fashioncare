import {useState, useEffect, useContext} from 'react';
import {ContextApp} from '../reducer.js';
import axios from 'axios';

export const useHome = () => {
	const [region, setRegion] = useState('EU');
	const [winterProducts, setWinterProducts] = useState([]);
	console.log(
		'🚀 ~ file: useHome.js ~ line 8 ~ useHome ~ winterProducts',
		winterProducts
	);
	const [seasons, setSeasons] = useState([]);

	const {state, dispatch} = useContext(ContextApp); // eslint-disable-line
	console.log('🚀 ~ file: Home.js ~ line 22 ~ Home ~ state', state);

	const getProduct = async () => {
		const url = '/API/Seasons';
		const data = await axios(url);
		setSeasons(data.data);
	};

	const getProductList = async () => {
		const url = '/API/ProductList';
		const data = await axios(url);
		setWinterProducts(data.data.Products.filter(el => el.SeasonId === 1));
	};

	const filterByCategory = async category => {
		console.log('🚀 ~ file: useHome.js ~ line 26 ~ useHome ~ category', category);
		const url = '/API/ProductList';
		const data = await axios(url);
		console.log('🚀 ~ file: useHome.js ~ line 33 ~ useHome ~ data', data);
		setWinterProducts(data.data.Products.filter(el => el.CategoryId === category));
	};
	useEffect(() => {
		getProduct();
		getProductList();
		getRegion();
	}, []);

	const getRegion = async () => {
		const data = await axios.get('http://www.geoplugin.net/json.gp');
		if (data && data.data && data.data.geoplugin_countryCode)
			setRegion(data.data.geoplugin_countryCode);
		else setRegion('EU');
	};

	return {region, products: {winterProducts, seasons}, filterByCategory};
};
