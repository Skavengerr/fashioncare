import React from 'react';
import {Link} from 'react-router-dom';

import {Hidden} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined';
import PublicIcon from '@material-ui/icons/Public';

import {useDispatch, useSelector} from 'react-redux';
import * as Actions from '../../store/actions/products';

const CATEGORIES = [
	{id: 2, title: 'Women'},
	{id: 1, title: 'Men'},
	{id: 3, title: 'Kids'}
];

const Menu = () => {
	const dispatch = useDispatch();
	const {category_id, region} = useSelector(state => state);

	const changeCategory = id => {
		dispatch(Actions.changeProductCategory(id));
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
					className="header__menu-actions-icon"
				>
					<AccountCircleOutlinedIcon classes={{root: 'm-auto'}} />
				</a>
				<a
					href="https://fashioncare.ch/Account/Login"
					className="header__menu-actions-icon"
				>
					<ShoppingBasketOutlinedIcon classes={{root: 'm-auto'}} />
				</a>
			</div>
		</div>
	);
};

export default Menu;
