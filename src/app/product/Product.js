import React, {useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import ProductCarousel from './components/ProductCarousel';
import Info from '../home/components/Info';
import Header from './components/Header';
import * as Actions from '../store/actions/products';

import './product.scss';

const Product = () => {
	let {id} = useParams();
	const dispatch = useDispatch();

	const {Product} = useSelector(state => state.product);

	useEffect(() => {
		dispatch(Actions.getProductById(id));
	}, []);

	if (!Product) return <div>Loading</div>;
	return (
		<div className="product">
			<Header />
			<Info noText />
			<ProductCarousel />
		</div>
	);
};

export default Product;
