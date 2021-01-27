import React from 'react';
import {Typography} from '@material-ui/core';
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';

import './popular.scss';

const Popular = () => {
	const products = useSelector(state => state.products);
	if (!products) return null;
	return (
		<>
			<Typography variant="h4">Popular</Typography>
			<div className="popular m-0">
				{products.slice(0, 5).map((p, i) => (
					<div className="popular__item">
						<Link to={`/product/${p.ProductId}`}>
							<img
								alt={p.Title}
								src={`https://fashioncare.ch/Content/img/${p.Path}`}
								className="popular__item-el"
							/>
						</Link>
					</div>
				))}
			</div>
			<Typography variant="h4">Winter</Typography>
			<div className="popular m-0">
				{products.slice(0, 5).map((p, i) => (
					<div className="popular__item">
						<Link to={`/product/${p.ProductId}`}>
							<img
								alt={p.Title}
								src={`https://fashioncare.ch/Content/img/${p.Path}`}
								className="popular__item-el"
							/>
						</Link>
					</div>
				))}
			</div>
		</>
	);
};

export default Popular;
