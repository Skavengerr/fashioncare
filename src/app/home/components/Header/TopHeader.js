import React from 'react';

export const Social = () => (
	<div className="header__top-social">
		<img className="mr-6" alt="" src="/icons/header/fb.svg" />
		<img className="mr-6" alt="" src="/icons/header/ig.svg" />
		<img className="mr-6" alt="" src="/icons/header/yt.svg" />
		<img className="mr-6" alt="" src="/icons/header/ld.svg" />
		<img className="mr-6" alt="" src="/icons/header/pr.svg" />
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

const Timer = () => (
	<div className="header__top-timer">
		<p className="header__top-title ml-auto">1 hour 12 minutes 00 seconds</p>
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
