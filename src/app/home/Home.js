import React from 'react';
import {Divider, Hidden} from '@material-ui/core';
import {useSelector} from 'react-redux';
// import Category from './components/Category';

import './home.scss';

const YouTubeVideos = React.lazy(() => import('./components/YouTubeVideos'));
const Instagram = React.lazy(() => import('./components/Instagram'));
const Carousel = React.lazy(() => import('./components/Carousel'));
const Popular = React.lazy(() => import('./components/Popular'));
const Info = React.lazy(() => import('./components/Info'));
const Eco = React.lazy(() => import('./components/Eco'));

const Home = () => {
	const {category_id} = useSelector(state => state);
	return (
		<div className="home">
			<div className="home__page">
				<div className="home__main">
					<div className="home__main-top">
						<Hidden mdDown>
							{category_id === 3 ? (
								<img
									alt=""
									className="home-img"
									src="/icons/home/welcome.jpg"
								/>
							) : (
								<img
									className="home-img"
									alt=""
									src="/icons/home/welcome_2.jpg"
								/>
							)}
						</Hidden>
						<Carousel />
					</div>
					<Info />
					{/*<Category />*/}
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
