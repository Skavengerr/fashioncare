import React from 'react';
import {useParams} from 'react-router-dom';

import ProductCarousel from './components/ProductCarousel';
import Info from '../home/components/Info';
import Header from './components/Header';

import './product.scss';

const Product = () => {
	let {id} = useParams();
	console.log('🚀 ~ file: Product.js ~ line 6 ~ Product ~ id', id);
	return (
		<div className="product">
			<Header />
			<Info noText />
			<ProductCarousel />
		</div>
	);
};

export default Product;
