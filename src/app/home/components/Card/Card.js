import React from 'react';
import {Link} from 'react-router-dom';

import './card.scss';

const Card = ({id, img, title, price, other}) => {
	return (
		<Link className={`card-link  ${other ? 'card-other' : ''}`} to={`/product/${id}`}>
			<div className="card">
				<img
					alt=""
					src={`https://fashioncare.ch/Content/img/${img}`}
					className="card__image-img"
				/>
				<div className="card__info">
					<p className="card__info-title">{title || ''}</p>
					<p className="card__info-price">
						CHF <span>{price || 'CHF '}</span>
					</p>
				</div>
			</div>
		</Link>
	);
};

export default Card;
