import {Divider, Hidden} from '@material-ui/core';

import YouTubeVideos from './components/YouTubeVideos';
import Instagram from './components/Instagram';
import Carousel from './components/Carousel';
import Category from './components/Category';
import Popular from './components/Popular';
import Info from './components/Info/Info';
import Header from './components/Header';
import Eco from './components/Eco/Eco';
import {useHome} from './useHome';

import './home.scss';

const Home = () => {
	const homeInfo = useHome();
	const {region} = homeInfo;
	return (
		<div className="home">
			<div className="home__page">
				<Header region={region} />
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
