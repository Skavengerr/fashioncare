import React from 'react';
import {Button, Divider} from '@material-ui/core';
import {useSelector} from 'react-redux';

import './productDetail.scss';

const ProductDetail = () => {
	const {Product} = useSelector(state => state.product);
	console.log('🚀 ~ file: ProductInfo.js ~ line 9 ~ ProductInfo ~ Product', Product);
	if (!Product) return <div>Loading...</div>;
	return (
		<div className="productInfo">
			<h2>{Product.Title}</h2>
			<h3>CHF58</h3>
			<p className="productInfo__details-tag">T-Shirts</p>
			<Divider />
			<h4>Details</h4>
			<div className="productInfo__details">
				<div className="productInfo__details-item">Detail 1</div>
				<div className="productInfo__details-item">Detail 2</div>
				<div className="productInfo__details-item">Detail 3</div>
				<div className="productInfo__details-item">Detail 4</div>
			</div>
			<h4>
				Colour: <span>{Product.Color}</span>
			</h4>
			<div className="productInfo__details-colour">
				<img alt="123" src="/icons/header/fb.svg" />
				<img alt="123" src="/icons/header/ld.svg" />
				<img alt="123" src="/icons/header/ig.svg" />
			</div>
			<h4>
				Size:<span>M</span>
			</h4>
			<div className="productInfo__details-size">
				<button>XS</button>
				<button>S</button>
				<button>M</button>
				<button>L</button>
			</div>
			<h4>Quantity</h4>
			<Button variant="contained" classes={{root: 'productInfo__details-button'}}>
				ADD TO CART
			</Button>
		</div>
	);
};

export default ProductDetail;
