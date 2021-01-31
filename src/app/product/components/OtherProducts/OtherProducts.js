import React, {useRef} from 'react';
import {TextField} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';

import Card from '../../../home/components/Card';
import {Social} from '../../../Layout/Header/TopHeader';
import * as Actions from '../../../store/actions/products';

import './otherProducts.scss';

const OtherProducts = () => {
	const {alsoLikeProducts, category_id} = useSelector(state => state);
	const dispatch = useDispatch();
	const email = useRef();

	const handleSubmit = e => {
		e.preventDefault();
		dispatch(Actions.sendEmail(email.current.value));
	};

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
				{shuffle(alsoLikeProducts)
					.slice(0, 10)
					.map(p => (
						<Card
							key={p.ProductId}
							id={p.ProductId}
							img={p.Path}
							title={p.Title}
							price={p.Price}
							other
						/>
					))}
			</div>
			<div className="other__video">
				<iframe
					title="New sustainable brand"
					src={
						category_id === 3
							? 'https://www.youtube.com/embed/QLEaSOTrGQk'
							: 'https://www.youtube.com/embed/-WFXo43ks7c'
					}
					allowFullScreen
					frameBorder="0"
				/>
			</div>
			<div className="flex m-auto">
				<div className="other__email-wrap">
					<form onSubmit={handleSubmit} className="other__email-search">
						<TextField
							fullWidth
							id="outlined-search"
							label="Email"
							type="email"
							variant="outlined"
							inputRef={email}
							className="other__email-search-input"
						/>
						<button type="submit">Send</button>
					</form>
					<Social other />
				</div>
			</div>
		</div>
	);
};

export default OtherProducts;
