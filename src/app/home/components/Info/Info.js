import React from 'react';
import {Link} from 'react-router-dom';

import './info.scss';

const IMAGES = [
	{id: 1, title: 'About Us', link: '/about-us'},
	{id: 2, title: 'New Brands', link: '/brands'},
	{id: 3, title: 'Our Pillars', link: '/pillars'},
	{id: 4, title: 'Environment problem', link: '/environment'},
	{id: 5, title: 'Social responsible', link: '/social-problems'},
	{id: 6, title: 'Our technologies', link: '/technologies'}
];

const Info = ({noText}) => {
	return (
		<div className="info">
			{IMAGES.map(el => (
				<Link key={el.title} to={el.link} className="info-el">
					<img alt="" src={`/icons/home/info_${el.id}.svg`} />
					{!noText && <p>{el.title}</p>}
				</Link>
			))}
		</div>
	);
};

export default Info;
