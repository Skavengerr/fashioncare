import React from 'react';
import {Link, useHistory} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

import {Hidden, Badge, IconButton} from '@material-ui/core';
import {AccountCircleOutlined, ShoppingBasketOutlined, Public} from '@material-ui/icons';
import {Menu as ReactMenu, MenuItem, MenuButton} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';

import {useDispatch, useSelector} from 'react-redux';
import * as Actions from '../../store/actions/products';

const CATEGORIES = [
	{id: 2, title: 'Women'},
	{id: 1, title: 'Men'},
	{id: 3, title: 'Kids'}
];

const Menu = () => {
	const {t, i18n} = useTranslation('main');
	const history = useHistory();
	const dispatch = useDispatch();
	const {category_id, region, cartQuantity} = useSelector(state => state);

	const changeCategory = id => {
		history.push('/home/index2');
		dispatch(Actions.filterByCategory(id));
	};

	const changeLanguage = lng => {
		i18n.changeLanguage(lng);
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
						{t(el.title.toLocaleLowerCase())}
					</button>
				))}
			</div>

			<div className="header__menu-actions">
				<IconButton size="medium" className="header__menu-actions-icon ml-12">
					<Public />
					<p>{region}</p>
				</IconButton>
				<ReactMenu
					menuButton={
						<MenuButton style={{background: 'transparent', border: 'none'}}>
							<IconButton
								size="medium"
								className="header__menu-actions-icon ml-12"
							>
								<div className="mx-12">{i18n.language.toUpperCase()}</div>
							</IconButton>
						</MenuButton>
					}
				>
					<MenuItem onClick={() => changeLanguage('en')}>ENG</MenuItem>
					<MenuItem onClick={() => changeLanguage('de')}>DE</MenuItem>
				</ReactMenu>
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
