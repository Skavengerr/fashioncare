import React from 'react';
import {useTranslation} from 'react-i18next';

import './info.scss';

const IMAGES = [
	{id: 1, title: 'about-us', link: 'https://fashioncare.ch/Home/AboutUs'},
	{id: 2, title: 'new-brands', link: 'https://fashioncare.ch/Home/NewBrands'},
	{id: 3, title: 'our-pillars', link: 'https://fashioncare.ch/Home/Pillars'},
	{
		id: 4,
		title: 'environment-problems',
		link: 'https://fashioncare.ch/Home/Environment'
	},
	{
		id: 5,
		title: 'social-responsible',
		link: 'https://fashioncare.ch/Home/Sustainability'
	},
	{id: 6, title: 'our-technologies', link: 'https://fashioncare.ch/Home/Technologies'}
];

const Info = () => {
	const {t} = useTranslation('main');
	return (
		<div className="info">
			{IMAGES.map(el => (
				<div key={el.title} className="info-el">
					<a rel="noreferrer" target="_blank" href={el.link}>
						<img alt="" src={`/icons/home/info_${el.id}.svg`} />
						<p>{t(el.title)}</p>
					</a>
				</div>
			))}
		</div>
	);
};

export default Info;
