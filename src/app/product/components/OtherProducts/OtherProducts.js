import React from 'react';
import {useSelector} from 'react-redux';

import Card from '../../../home/components/Card';

import './otherProducts.scss';

const OtherProducts = () => {
	const {otherProducts} = useSelector(state => state);

	function shuffle(array) {
		var currentIndex = array.length,
			temporaryValue,
			randomIndex;

		while (0 !== currentIndex) {
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	}

	return (
		<div className="other">
			<p className="other__text">You may also like</p>
			<div className="other__products">
				{shuffle(otherProducts)
					.slice(0, 10)
					.map(p => (
						<Card
							key={p.ProductId}
							id={p.ProductId}
							img={p.Path}
							title={p.Title}
							price={p.Price}
						/>
					))}
			</div>
			<div className="other__video">
				<iframe
					title="New sustainable brand"
					src="https://www.youtube.com/embed/-WFXo43ks7c"
					allowFullScreen
					frameBorder="0"
				/>
			</div>
		</div>
	);
};

export default OtherProducts;
