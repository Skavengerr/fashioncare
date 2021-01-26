import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';

import './header.scss';

const Header = () => {
	return (
		<div className="navP">
			<input type="checkbox" id="navP-check" />
			<div className="navP-btn">
				<label htmlFor="navP-check">
					<span></span>
					<span></span>
					<span></span>
				</label>
			</div>
			<div className="header__menu-actions mt ml-auto">
				<div>USA</div>
				<div className="mx-12">ENG</div>
				<div>CHF</div>
				<IconButton size="medium" className="header__menu-actions-icon ml-12">
					<AccountCircleOutlinedIcon />
				</IconButton>
				<IconButton size="medium" className="header__menu-actions-icon">
					<ShoppingBasketOutlinedIcon />
				</IconButton>
			</div>
			<div className="navP-links">
				<p className="text-bold">Services</p>
				<p>Shop</p>
				<p>Brands</p>
				<p>Coats and jackets</p>
				<p>Bodys and Onesies</p>
				<p>T-Shirts</p>
				<p>Dresses</p>
				<p>Shorts</p>
				<p>Leggings</p>
			</div>
		</div>
	);
};

export default Header;
