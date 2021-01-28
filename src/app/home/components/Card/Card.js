import React from 'react';
import {Link} from 'react-router-dom';

import './card.scss';

const Card = ({id, img, title, price}) => {
	return (
		<Link className="card-link" to={`/product/${id}`}>
			<div className="card">
				<div className="card__image">
					<img
						alt=""
						src={`https://fashioncare.ch/Content/img/${img}`}
						className="card__image-img"
					/>
				</div>
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
