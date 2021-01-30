import React from 'react';

import Timer from './Timer';

export const Social = ({other}) => (
	<div className={`header__top-social${other ? '-2' : ''}`}>
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
		<a
			className="mr-6"
			rel="noreferrer"
			target="_blank"
			href="https://www.google.com/search?q=fashioncare.ch&oq=fas&aqs=chrome.2.69i60j69i57j69i59l2j69i60l2j69i61l2.1974j0j1&sourceid=chrome&ie=UTF-8"
		>
			<img alt="" src="/icons/header/gl.svg" />
		</a>
		<a
			className="mr-6"
			rel="noreferrer"
			target="_blank"
			href="https://api.whatsapp.com/send/?phone=41799001177&text&app_absent=0"
		>
			<img alt="" src="/icons/header/wa.svg" />
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
