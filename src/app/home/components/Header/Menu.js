import React, {useState} from 'react';
import {Hidden} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';

const Menu = () => {
	const [active, setActive] = useState('kids');

	return (
		<div className="header__menu">
			<Hidden mdDown>
				<div className="header__menu-image">
					<img alt="" src="/icons/header/header.svg" />
				</div>
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
		</div>
	);
};

export default Menu;
