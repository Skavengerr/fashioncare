import React from 'react';
import ElasticCarousel, {consts} from 'react-elastic-carousel';

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
	return (
		<div className="carousel">
			<ElasticCarousel
				renderArrow={myArrow}
				breakPoints={breakPoints}
				enableAutoPlay
				autoPlaySpeed={5000}
				pagination={false}
			>
				{items.map(el => (
					<div style={{display: 'flex', width: 250, flexDirection: 'column'}}>
						<div>
							<div className="carousel-item">
								<img
									alt=""
									src={`/icons/product/popular_${el}.jpg`}
									className="w-full h-full"
								/>
							</div>
							<div className="carousel-item">
								<img
									alt=""
									src={`/icons/product/spring_${el}.jpg`}
									className="w-full h-full"
								/>
							</div>
						</div>
					</div>
				))}
			</ElasticCarousel>
		</div>
	);
}

export default Carousel;
