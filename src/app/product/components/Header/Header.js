//import React from 'react';
//import {Link} from 'react-router-dom';
//import IconButton from '@material-ui/core/IconButton';
//import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
//import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';

//import './header.scss';

//const Header = () => {
//	return (
//		<div className="product-header">
//			<Link to="/" className="m-auto">
//				<img alt="" src="/icons/header/logo.svg" />
//			</Link>
//			<div className="product-header-group">
//				<div className="header__menu-actions ml-auto">
//					<div>USA</div>
//					<div className="mx-12">ENG</div>
//					<div>CHF</div>
//					<IconButton size="medium" className="header__menu-actions-icon ml-12">
//						<AccountCircleOutlinedIcon />
//					</IconButton>
//					<IconButton size="medium" className="header__menu-actions-icon">
//						<ShoppingBasketOutlinedIcon />
//					</IconButton>
//				</div>
//				<div className="product-header__menu">
//					<Link to="/" className="product-header__menu-item">
//						Home
//					</Link>
//					<Link to="/" className="product-header__menu-item">
//						Services
//					</Link>
//					<Link to="/" className="product-header__menu-item">
//						Shop
//					</Link>
//					<Link to="/" className="product-header__menu-item">
//						Contacts us
//					</Link>
//					<Link to="/" className="product-header__menu-item">
//						Return Policy
//					</Link>
//					<Link to="/" className="product-header__menu-item">
//						Submit a Return
//					</Link>
//					<Link to="/" className="product-header__menu-item">
//						Delivery
//					</Link>
//					<Link to="/" className="product-header__menu-item">
//						Packaging
//					</Link>
//				</div>
//			</div>
//		</div>
//	);
//};

//export default Header;

import React from 'react';
import {Link} from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';

import './header.scss';

const Header = () => {
	return (
		<div className="navP">
			<Link to="/" className="navP-link">
				<img alt="" src="/icons/header/logo.svg" />
			</Link>

			<input type="checkbox" id="navP-check" />
			<div className="navP-btn">
				<label htmlFor="navP-check">
					<span></span>
					<span></span>
					<span></span>
				</label>
			</div>
			<div className="header__menu-actions ml-auto">
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
