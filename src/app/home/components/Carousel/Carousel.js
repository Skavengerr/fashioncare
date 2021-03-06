import React from 'react';
import ElasticCarousel, {consts} from 'react-elastic-carousel';
import {useSelector} from 'react-redux';

import './carousel.scss';

const Card = React.lazy(() => import('../Card'));

const breakPoints = [
	{width: 1, itemsToShow: 1},
	{width: 550, itemsToShow: 2},
	{width: 700, itemsToShow: 3},
	{width: 1100, itemsToShow: 4},
	{width: 1300, itemsToShow: 5}
];

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

	let size = 2;
	let subarray = [];
	for (let i = 0; i < Math.ceil(products.length / size); i++) {
		subarray[i] = products.slice(i * size, i * size + size);
	}
	return (
		products && (
			<div className="carousel">
				<ElasticCarousel
					renderArrow={myArrow}
					breakPoints={breakPoints}
					enableAutoPlay
					autoPlaySpeed={5000}
					pagination={false}
				>
					{products.length >= 5
						? subarray.slice(0, 40).map((arr, index) => (
								<div key={index}>
									{arr.map(p => (
										<div key={p.ProductId} className="carousel__grid">
											<Card
												id={p.ProductId}
												img={p.Path}
												title={p.Title}
												price={p.Price}
											/>
										</div>
									))}
								</div>
						  ))
						: products.map(p => (
								<div key={p.ProductId} className="carousel__grid">
									<Card
										id={p.ProductId}
										img={p.Path}
										title={p.Title}
										price={p.Price}
									/>
								</div>
						  ))}
				</ElasticCarousel>
			</div>
		)
	);
}

export default Carousel;
