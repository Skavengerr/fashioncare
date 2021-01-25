import React from 'react';
import {Hidden} from '@material-ui/core';

import TopHeader from './TopHeader';
import NavBar from './NavBar';
import Menu from './Menu';

import './header.scss';

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
