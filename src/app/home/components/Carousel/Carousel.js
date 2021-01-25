import React from 'react';
import ElasticCarousel from 'react-elastic-carousel';

import './carousel.scss';

const breakPoints = [
	{width: 1, itemsToShow: 1},
	{width: 550, itemsToShow: 2, itemsToScroll: 3},
	{width: 768, itemsToShow: 4},
	{width: 1500, itemsToShow: 5}
];

const Item = () => <div className="carousel-item"></div>;

function Carousel() {
	return (
		<div className="carousel">
			<ElasticCarousel
				breakPoints={breakPoints}
				enableAutoPlay
				autoPlaySpeed={5000}
				pagination={false}
			>
				<div style={{display: 'flex', width: 250, flexDirection: 'column'}}>
					<Item>1</Item>
					<Item>2</Item>
				</div>
				<div style={{display: 'flex', width: 250, flexDirection: 'column'}}>
					<Item>1</Item>
					<Item>2</Item>
				</div>
				<div style={{display: 'flex', width: 250, flexDirection: 'column'}}>
					<Item>1</Item>
					<Item>2</Item>
				</div>
				<div style={{display: 'flex', width: 250, flexDirection: 'column'}}>
					<Item>1</Item>
					<Item>2</Item>
				</div>
				<div style={{display: 'flex', width: 250, flexDirection: 'column'}}>
					<Item>1</Item>
					<Item>2</Item>
				</div>
				<div style={{display: 'flex', width: 250, flexDirection: 'column'}}>
					<Item>1</Item>
					<Item>2</Item>
				</div>
				<div style={{display: 'flex', width: 250, flexDirection: 'column'}}>
					<Item>1</Item>
					<Item>2</Item>
				</div>
			</ElasticCarousel>
		</div>
	);
}

export default Carousel;
