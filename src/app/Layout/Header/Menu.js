import React from 'react';
import {Link} from 'react-router-dom';

import {Hidden, Badge, IconButton} from '@material-ui/core';
import {AccountCircleOutlined, ShoppingBasketOutlined, Public} from '@material-ui/icons';

import {useDispatch, useSelector} from 'react-redux';
import * as Actions from '../../store/actions/products';

const CATEGORIES = [
	{id: 2, title: 'Women'},
	{id: 1, title: 'Men'},
	{id: 3, title: 'Kids'}
];

const Menu = () => {
	const dispatch = useDispatch();
	const {category_id, region, cartQuantity} = useSelector(state => state);

	const changeCategory = id => {
		dispatch(Actions.filterByCategory(id));
	};

	return (
		<div className="header__menu">
			<Hidden mdDown>
				<Link to="/home/index2" className="header__menu-image">
					<img alt="" src="/icons/header/header.svg" />
				</Link>
			</Hidden>

			<div className="header__menu-buttons">
				{CATEGORIES.map(el => (
					<button
						key={el.id}
						onClick={() => changeCategory(el.id)}
						className={category_id === el.id ? 'header-b-active' : 'header-b'}
					>
						{el.title}
					</button>
				))}
			</div>

			<div className="header__menu-actions">
				<IconButton size="medium" className="header__menu-actions-icon ml-12">
					<Public />
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
					className="header__menu-actions-icon"
				>
					<AccountCircleOutlined fontSize="large" classes={{root: 'm-auto'}} />
				</a>
				<Badge badgeContent={cartQuantity} color="primary">
					<a
						href="https://fashioncare.ch/Shop/Checkout"
						className="header__menu-actions-icon"
					>
						<ShoppingBasketOutlined
							fontSize="large"
							classes={{root: 'm-auto'}}
						/>
					</a>
				</Badge>
			</div>
		</div>
	);
};

export default Menu;
