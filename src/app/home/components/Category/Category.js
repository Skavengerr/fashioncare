import React from 'react';
import ElasticCarousel from 'react-elastic-carousel';

import './category.scss';

const breakPoints = [
	{width: 1, itemsToShow: 1},
	{width: 550, itemsToShow: 2, itemsToScroll: 3},
	{width: 768, itemsToShow: 4},
	{width: 1500, itemsToShow: 5}
];

const items = ['1', '2', '3', '4', '5', '1', '2', '3', '4', '5'];

function Category() {
	return (
		<div className="category">
			<ElasticCarousel
				breakPoints={breakPoints}
				enableAutoPlay
				autoPlaySpeed={7500}
				pagination={false}
			>
				{items.map((el, i) => (
					<div key={i} className="category-item">
						<img alt="" src={`/icons/product/category_${el}.jpg`} />
					</div>
				))}
			</ElasticCarousel>
		</div>
	);
}

export default Category;
