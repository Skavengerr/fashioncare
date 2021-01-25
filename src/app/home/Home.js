import React from 'react';
import {Divider, Hidden} from '@material-ui/core';

import YouTubeVideos from './components/YouTubeVideos';
import Header from './components/Header';
import Footer from './components/Footer';
import Instagram from './components/Instagram';
import Carousel from './components/Carousel';
import Category from './components/Category';
import Popular from './components/Popular';
import Info from './components/Info/Info';
import Eco from './components/Eco/Eco';

import './home.scss';

const Home = () => {
	return (
		<div className="home">
			<div className="home__page">
				<Header />
				<div className="home__main">
					<div className="home__main-top">
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
			</div>
		</div>
	);
};

export default Home;
