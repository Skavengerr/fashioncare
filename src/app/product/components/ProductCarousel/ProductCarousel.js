import React, {useState} from 'react';
import Carousel from '@brainhubeu/react-carousel';
import Dots from './Dots';
import ProductDetail from '../ProductDetail';

import '@brainhubeu/react-carousel/lib/style.css';
import './productCarousel.scss';
import {useSelector} from 'react-redux';

function ProductCarousel() {
	const {Product, ProductImages} = useSelector(state => state.product);

	console.log(
		'🚀 ~ file: ProductCarousel.js ~ line 14 ~ ProductCarousel ~ Product',
		Product
	);
	const [state, setState] = useState({
		value: 0,
		slides: [
			<img
				className="productc__carousel-wrap-img"
				alt=""
				src={`https://fashioncare.ch/Content/img/${Product.Path}`}
			/>,
			<img alt="" src="/icons/product/image.jpg" />,
			<img alt="" src="/icons/product/image.jpg" />
		],
		thumbnails: [
			<img alt="" src="/icons/product/image.jpg" />,
			<img alt="" src="/icons/product/image.jpg" />,
			<img alt="" src="/icons/product/image.jpg" />
		]
	});

	const onChange = value => {
		setState({value});
	};

	return (
		<div className="productc__carousel">
			<div className="productc__carousel-wrap">
				<Carousel value={state.value} slides={state.slides} onChange={onChange} />
				<Dots
					number={state.thumbnails.length}
					thumbnails={state.thumbnails}
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
