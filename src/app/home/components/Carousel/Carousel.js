import React from 'react';
import ElasticCarousel, {consts} from 'react-elastic-carousel';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

import './carousel.scss';

const breakPoints = [
	{width: 1, itemsToShow: 1},
	{width: 550, itemsToShow: 2, itemsToScroll: 3},
	{width: 768, itemsToShow: 4},
	{width: 1500, itemsToShow: 5}
];

const items = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];

const myArrow = ({type, onClick, isEdge}) => {
	const pointer = type === consts.PREV ? '❮' : '❯';
	return (
		<button onClick={onClick} disabled={isEdge} className="carousel-button">
			{pointer}
		</button>
	);
};

function Carousel() {
	const products = useSelector(state => state.products);
	console.log('🚀 ~ file: Carousel.js ~ line 27 ~ Carousel ~ products', products);
	return (
		<div className="carousel">
			<ElasticCarousel
				renderArrow={myArrow}
				breakPoints={breakPoints}
				//enableAutoPlay
				//autoPlaySpeed={5000}
				pagination={false}
			>
				{products.map(el => (
					<div style={{display: 'flex', width: 250, flexDirection: 'column'}}>
						<div>
							<div className="carousel-item-top">
								<Link to={`/product/${el.ProductId}`}>
									<img
										alt=""
										src={`https://fashioncare.ch/Content/img/${el.Path}`}
										className="w-full h-auto"
									/>
								</Link>
							</div>
							<div className="carousel-item-bot">
								<Link t to={`/product/${el.ProductId}`}>
									<img
										alt=""
										src={`https://fashioncare.ch/Content/img/${el.Path}`}
										className="w-full h-auto"
									/>
								</Link>
							</div>
						</div>
					</div>
				))}
			</ElasticCarousel>
		</div>
	);
}

export default Carousel;
