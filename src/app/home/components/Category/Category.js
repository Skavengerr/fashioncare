import React, {useState} from 'react';
import ElasticCarousel, {consts} from 'react-elastic-carousel';
import {useDispatch} from 'react-redux';

import {PRODUCT_CLASSES} from '../../../constants';
import * as Actions from '../../../store/actions/products';
import './category.scss';

const breakPoints = [
	{width: 1, itemsToShow: 1},
	{width: 550, itemsToShow: 2, itemsToScroll: 3},
	{width: 768, itemsToShow: 4},
	{width: 1500, itemsToShow: 5}
];

const myArrow = ({type, onClick, isEdge}) => {
	const pointer = type === consts.PREV ? '❮' : '❯';
	return (
		<button onClick={onClick} disabled={isEdge} className="category-button">
			{pointer}
		</button>
	);
};

const classes = [1, 7, 3, 4, 5];

function Category() {
	const dispatch = useDispatch();
	const [classId, setClassId] = useState(null);

	const changeProductClass = id => {
		if (id === classId) {
			dispatch(Actions.clearFilterByClass());
			setClassId(null);
		} else {
			setClassId(id);
			dispatch(Actions.filterByClass(id));
		}
	};

	return (
		<div className="category">
			<ElasticCarousel
				renderArrow={myArrow}
				breakPoints={breakPoints}
				enableAutoPlay
				autoPlaySpeed={7500}
				pagination={false}
			>
				{PRODUCT_CLASSES.slice(0, 5).map((el, i) => (
					<div
						key={el.id}
						className={`category-item ${
							classId === classes[i] ? 'category-item-active' : ''
						}`}
						onClick={() => changeProductClass(el.id)}
					>
						<img alt="" src={`/icons/product/category_${el.id}.jpg`} />
					</div>
				))}
			</ElasticCarousel>
		</div>
	);
}

export default Category;
