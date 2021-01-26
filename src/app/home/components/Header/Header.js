import React from 'react';
import {Hidden} from '@material-ui/core';

import TopHeader from './TopHeader';
import NavBar from './NavBar';
import Menu from './Menu';

import './header.scss';

const Header = props => {
	const {region, filterByCategory} = props;
	return (
		<div className="header">
			<Hidden lgUp>
				<NavBar />
			</Hidden>
			<Hidden mdDown>
				<TopHeader />
			</Hidden>

			<Menu region={region} filterByCategory={filterByCategory} />
			<Hidden mdDown>
				<NavBar />
			</Hidden>
		</div>
	);
};

export default Header;
