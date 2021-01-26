import React from 'react';
import {Typography} from '@material-ui/core';

import './popular.scss';

const Popular = ({products}) => {
	return (
		<>
			<Typography variant="h4">Popular</Typography>
			<div className="popular m-0">
				{products.winterProducts.slice(0, 5).map((p, i) => (
					<div className="popular__item">
						<img
							alt={p.Title}
							src={`/icons/product/popular_${i + 1}.jpg`}
							className="popular__item-el"
						/>
					</div>
				))}
			</div>
			<Typography variant="h4">Winter</Typography>
			<div className="popular m-0">
				{products.winterProducts.slice(0, 5).map((p, i) => (
					<div className="popular__item">
						<img
							alt={p.Title}
							src={`/icons/product/spring_${i + 1}.jpg`}
							className="popular__item-el"
						/>
					</div>
				))}
			</div>
		</>
	);
};

export default Popular;
