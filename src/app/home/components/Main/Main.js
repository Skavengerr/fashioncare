import React from 'react';
import {Divider, Hidden} from '@material-ui/core';

import YouTubeVideos from '../YouTubeVideos';
import Instagram from '../Instagram';
import Carousel from '../Carousel';
import Category from '../Category';
import Popular from '../Popular';
import Info from '../Info/Info';
import Eco from '../Eco/Eco';

import './main.scss';

const Main = () => {
	return (
		<div className="main">
			<div className="main__top">
				<Hidden mdDown>
					<img alt="" src="/icons/home/welcome.jpg" />
				</Hidden>
				<Carousel />
			</div>
			<Info />
			<Category />
			<Divider classes={{root: 'main__category-divider'}} />
			<Popular />
			<Eco />
			<Divider classes={{root: 'main__eco-divider'}} />
			<YouTubeVideos />
			<Instagram />
		</div>
	);
};

export default Main;
