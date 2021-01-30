import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import Carousel from '@brainhubeu/react-carousel';

import Dots from './Dots';
import ProductDetail from '../ProductDetail';

import '@brainhubeu/react-carousel/lib/style.css';
import './productCarousel.scss';

function ProductCarousel() {
	const {Product, ProductImages} = useSelector(state => state.product);
	let thumbnails = [];

	if (ProductImages[0] && ProductImages[0].Path) {
		thumbnails = ProductImages.map(img => [
			<img alt="" src={`https://fashioncare.ch/Content/img/${img.Path}`} />
		]);
	} else {
		thumbnails = [
			<img
				className="productc__carousel-wrap-img"
				alt=""
				src={`https://fashioncare.ch/Content/img/${Product.Path}`}
			/>
		];
	}
	const [state, setState] = useState({
		value: 0,
		slides: thumbnails,
		thumbnails: thumbnails
	});

	const onChange = value => {
		setState({...state, value});
	};

	return (
		<div className="productc__carousel">
			<div className="productc__carousel-wrap">
				<Carousel value={state.value} slides={state.slides} onChange={onChange} />
				<Dots
					number={state.thumbnails.length}
					thumbnails={
						ProductImages[0] && ProductImages[0].Path
							? state.thumbnails.slice(0, 9)
							: ''
					}
					value={state.value}
					onChange={onChange}
				/>
			</div>
			<div className="productc__detail">
				<ProductDetail />
			</div>
		</div>
	);
}

export default ProductCarousel;
