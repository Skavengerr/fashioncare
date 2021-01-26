import React from 'react';

import './info.scss';

const IMAGES = [
	{id: 1, title: 'About Us', link: 'https://fashioncare.ch/Home/AboutUs'},
	{id: 2, title: 'New Brands', link: 'https://fashioncare.ch/Home/NewBrands'},
	{id: 3, title: 'Our Pillars', link: 'https://fashioncare.ch/Home/Pillars'},
	{
		id: 4,
		title: 'Environment problem',
		link: 'https://fashioncare.ch/Home/Environment'
	},
	{
		id: 5,
		title: 'Social responsible',
		link: 'https://fashioncare.ch/Home/Sustainability'
	},
	{id: 6, title: 'Our technologies', link: 'https://fashioncare.ch/Home/Technologies'}
];

const Info = ({noText}) => {
	return (
		<div className="info">
			{IMAGES.map(el => (
				<div key={el.title} className="info-el">
					<a rel="noreferrer" target="_blank" href={el.link}>
						<img alt="" src={`/icons/home/info_${el.id}.svg`} />
						{!noText && <p>{el.title}</p>}
					</a>
				</div>
			))}
		</div>
	);
};

export default Info;
