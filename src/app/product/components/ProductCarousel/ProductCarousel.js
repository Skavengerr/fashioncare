import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import Dots from './Dots';
import ProductDetail from '../ProductDetail';
import '@brainhubeu/react-carousel/lib/style.css';

import './productCarousel.scss';

class ProductCarousel extends React.Component {
	constructor() {
		super();
		this.state = {
			value: 0,
			slides: [
				<img src="/icons/product/image.jpg" />,
				<img src="/icons/product/image.jpg" />,
				<img src="/icons/product/image.jpg" />
			],
			thumbnails: [
				<img src="/icons/product/image.jpg" />,
				<img src="/icons/product/image.jpg" />,
				<img src="/icons/product/image.jpg" />
			]
		};
		this.onchange = this.onchange.bind(this);
	}

	onchange(value) {
		this.setState({value});
	}

	render() {
		return (
			<div className="productc__carousel">
				<div className="productc__carousel-wrap">
					<Carousel
						value={this.state.value}
						slides={this.state.slides}
						onChange={this.onchange}
					/>
					<Dots
						number={this.state.thumbnails.length}
						thumbnails={this.state.thumbnails}
						value={this.state.value}
						onChange={this.onchange}
						number={this.state.slides.length}
					/>
				</div>
				<div className="productc__detail">
					<ProductDetail />
				</div>
			</div>
		);
	}
}

export default ProductCarousel;
