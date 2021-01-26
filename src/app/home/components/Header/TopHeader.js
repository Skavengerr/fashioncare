import React from 'react';

import Timer from './Timer';

export const Social = () => (
	<div className="header__top-social">
		<a
			className="mr-6"
			rel="noreferrer"
			target="_blank"
			href="https://www.facebook.com/Fashioncarech-629962404296813"
		>
			<img alt="" src="/icons/header/fb.svg" />
		</a>
		<a
			className="mr-6"
			rel="noreferrer"
			target="_blank"
			href="https://www.instagram.com/fashioncare.ch/"
		>
			<img alt="" src="/icons/header/ig.svg" />
		</a>
		<a
			className="mr-6"
			rel="noreferrer"
			target="_blank"
			href="https://www.youtube.com/channel/UCWdsBwRgAh6CXheiMOajZ8A/featured"
		>
			<img alt="" src="/icons/header/yt.svg" />
		</a>
		<a
			className="mr-6"
			rel="noreferrer"
			target="_blank"
			href="https://www.linkedin.com/company/fashioncareshop/?viewAsMember=true"
		>
			<img alt="" src="/icons/header/ld.svg" />
		</a>
		<a
			className="mr-6"
			rel="noreferrer"
			target="_blank"
			href="https://www.pinterest.com/fashioncare_ch/"
		>
			<img alt="" src="/icons/header/pr.svg" />
		</a>
	</div>
);

const Title = () => (
	<div className="header__top-main">
		<div className="header__top-block">
			<img alt="" src="/icons/header/delivery.svg" />
			<p className="header__top-title">Free home delivery</p>
			<p className="header__top-text">for orders from 500CHF (Switzerland)</p>
		</div>
	</div>
);

const TopHeader = () => {
	return (
		<div className="header__top">
			<Social />
			<Title />
			<Timer />
		</div>
	);
};

export default TopHeader;
