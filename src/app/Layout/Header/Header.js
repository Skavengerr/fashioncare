import React from 'react';
import {Hidden} from '@material-ui/core';

import './header.scss';

const TopHeader = React.lazy(() => import('./TopHeader'));
const NavBar = React.lazy(() => import('./NavBar'));
const Menu = React.lazy(() => import('./Menu'));

const Header = () => {
	return (
		<div className="header">
			<Hidden lgUp>
				<NavBar />
			</Hidden>
			<Hidden mdDown>
				<TopHeader />
			</Hidden>

			<Menu />
			<Hidden mdDown>
				<NavBar />
			</Hidden>
		</div>
	);
};

export default Header;
