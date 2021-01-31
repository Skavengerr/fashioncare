import React from 'react';
import {Typography} from '@material-ui/core';
import {useSelector} from 'react-redux';
import ElasticCarousel, {consts} from 'react-elastic-carousel';

import './popular.scss';

const Card = React.lazy(() => import('../Card'));

const breakPoints = [
	{width: 1, itemsToShow: 1},
	{width: 550, itemsToShow: 2},
	{width: 700, itemsToShow: 4},
	{width: 1000, itemsToShow: 5},
	{width: 1100, itemsToShow: 5}
];

const myArrow = ({type, onClick, isEdge}) => {
	const pointer = type === consts.PREV ? '❮' : '❯';
	return (
		<button onClick={onClick} disabled={isEdge} className="carousel-button">
			{pointer}
		</button>
	);
};

const Popular = () => {
	const {products, winterProducts} = useSelector(state => state);
	if (!products) return null;
	return (
		<>
			{products.length ? (
				<>
					<Typography variant="h4">Popular</Typography>
					<ElasticCarousel
						renderArrow={myArrow}
						breakPoints={breakPoints}
						enableAutoPlay
						autoPlaySpeed={5000}
						pagination={false}
					>
						{products.map(p => (
							<Card
								key={p.ProductId}
								id={p.ProductId}
								img={p.Path}
								title={p.Title}
								price={p.Price}
							/>
						))}
					</ElasticCarousel>
				</>
			) : null}
			{winterProducts.length ? (
				<>
					<Typography variant="h4">
						{winterProducts ? 'Winter' : 'Summer'}
					</Typography>

					<ElasticCarousel
						renderArrow={myArrow}
						breakPoints={breakPoints}
						enableAutoPlay
						autoPlaySpeed={5000}
						pagination={false}
					>
						{winterProducts.map(p => (
							<Card
								key={p.ProductId}
								id={p.ProductId}
								img={p.Path}
								title={p.Title}
								price={p.Price}
							/>
						))}
					</ElasticCarousel>
				</>
			) : null}
		</>
	);
};

export default Popular;
