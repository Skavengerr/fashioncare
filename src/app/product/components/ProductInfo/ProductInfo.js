import React from 'react';
import {Button, Divider} from '@material-ui/core';

import './productInfo.scss';

const ProductInfo = () => {
	return (
		<div className="productInfo">
			<h2>T-shirt</h2>
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
				Colour: <span>green</span>
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
				<button>S</button>
				<button>S</button>
				<button>S</button>
				<button>S</button>
			</div>
			<h4>Quantity</h4>
			<Button variant="contained" classes={{root: 'productInfo__details-button'}}>
				ADD TO CART
			</Button>
		</div>
	);
};

export default ProductInfo;
