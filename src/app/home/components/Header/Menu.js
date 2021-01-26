import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Hidden} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import PublicIcon from '@material-ui/icons/Public';

const Menu = ({region}) => {
	const [active, setActive] = useState('kids');

	return (
		<div className="header__menu">
			<Hidden mdDown>
				<Link to="/" className="header__menu-image">
					<img alt="" src="/icons/header/header.svg" />
				</Link>
			</Hidden>

			<div className="header__menu-buttons">
				<button
					onClick={() => setActive('women')}
					className={active === 'women' ? 'header-b-active' : 'header-b'}
				>
					Women
				</button>
				<button
					onClick={() => setActive('men')}
					className={active === 'men' ? 'header-b-active' : 'header-b'}
				>
					Men
				</button>
				<button
					onClick={() => setActive('kids')}
					className={active === 'kids' ? 'header-b-active' : 'header-b'}
				>
					Kids
				</button>
			</div>

			<div className="header__menu-actions">
				<IconButton size="medium" className="header__menu-actions-icon ml-12">
					<PublicIcon />
					<p>{region}</p>
				</IconButton>
				<IconButton size="medium" className="header__menu-actions-icon ml-12">
					<div className="mx-12">ENG</div>
				</IconButton>
				<IconButton size="medium" className="header__menu-actions-icon ml-12">
					<div className="mx-12">CHF</div>
				</IconButton>

				<a
					href="https://fashioncare.ch/Account/Login"
					target="_blank"
					rel="noreferrer"
					className="header__menu-actions-icon"
				>
					<AccountCircleOutlinedIcon classes={{root: 'm-auto'}} />
				</a>
				<a
					href="https://fashioncare.ch/Account/Login"
					target="_blank"
					rel="noreferrer"
					className="header__menu-actions-icon"
				>
					<ShoppingBasketOutlinedIcon classes={{root: 'm-auto'}} />
				</a>
			</div>
		</div>
	);
};

export default Menu;
