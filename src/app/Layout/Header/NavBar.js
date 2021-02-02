import React, {useState, useRef} from 'react';
import {ControlledMenu, MenuItem, SubMenu} from '@szhsin/react-menu';
import {useTranslation} from 'react-i18next';
import '@szhsin/react-menu/dist/index.css';
import {Hidden} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';

import * as Actions from '../../store/actions/products';
import {PRODUCT_CLASSES, BRANDS} from '../../constants';
import './nav.scss';

const NavBar = () => {
	const {t} = useTranslation('main');
	const dispatch = useDispatch();
	let history = useHistory();
	const ref = useRef(null);
	const brandRef = useRef(null);
	const [isOpen, setOpen] = useState(false);
	const [brandIsOpen, setBrandOpen] = useState(false);
	const {category_id} = useSelector(state => state);

	const filterByCategoryAndClass = (classId, categoryId) => {
		history.push('/home/index2');
		dispatch(Actions.filterByCategoryAndClass(classId, categoryId));
	};

	const filterByBrand = brandId => {
		history.push('/home/index2');
		dispatch(Actions.filterByBrand(brandId));
	};

	const onFilterByClass = id => {
		history.push('/home/index2');
		filterByClass(id);
	};

	const filterByClass = classId => {
		history.push('/home/index2');
		dispatch(Actions.filterByClass(classId));
	};

	const closeMenus = () => {
		setOpen(false);
		setBrandOpen(false);
	};

	return (
		<>
			<div>
				<div
					className={`nav ${category_id === 3 ? 'h-100' : ''}`}
					onMouseLeave={closeMenus}
				>
					<Hidden lgUp>
						<div className="header__nav">
							<img
								className="header__nav-image"
								alt=""
								src="/icons/header/header.svg"
							/>
						</div>
					</Hidden>

					<input type="checkbox" id="nav-check" />
					<div className="nav-btn">
						<label htmlFor="nav-check">
							<span></span>
							<span></span>
							<span></span>
						</label>
					</div>

					<div className="nav-links">
						<a
							href="https://fashioncare.ch/Home/Services"
							className="nav__menu-button"
							style={{textDecoration: 'none'}}
						>
							{t('services')}
						</a>
						<>
							<button
								ref={ref}
								className="nav__menu-button"
								onMouseEnter={() => setOpen(true)}
							>
								{t('shop')}
							</button>

							<ControlledMenu
								anchorRef={ref}
								isOpen={isOpen}
								onClose={() => setOpen(false)}
							>
								<SubMenu label={t('men')}>
									<MenuItem
										onClick={() => filterByCategoryAndClass(7, 1)}
									>
										{t('jackets')}
									</MenuItem>
								</SubMenu>
								<SubMenu label={t('women')}>
									<MenuItem
										onClick={() => filterByCategoryAndClass(7, 2)}
									>
										{t('jackets')}
									</MenuItem>
								</SubMenu>
								<SubMenu label={t('kids')}>
									{PRODUCT_CLASSES.map(el => (
										<MenuItem
											key={el.id}
											onClick={() =>
												filterByCategoryAndClass(el.id, 3)
											}
										>
											{t(el.title)}
										</MenuItem>
									))}
								</SubMenu>
							</ControlledMenu>
						</>
						<>
							<button
								ref={brandRef}
								className="nav__menu-button"
								onMouseEnter={() => setBrandOpen(true)}
							>
								{t('brands')}
							</button>
							<ControlledMenu
								anchorRef={brandRef}
								isOpen={brandIsOpen}
								onClose={() => setBrandOpen(false)}
							>
								{BRANDS.map(brand => (
									<MenuItem
										key={brand.BrandId}
										onClick={() => filterByBrand(brand.BrandId)}
									>
										{brand.Name}
									</MenuItem>
								))}
							</ControlledMenu>
						</>
						<p onClick={() => onFilterByClass(7)}>{t('jackets')}</p>

						{category_id > 2 &&
							PRODUCT_CLASSES.map(el => (
								<p onClick={() => onFilterByClass(el.id)}>
									{t(el.title)}
								</p>
							))}
						<Hidden lgUp>
							<p>{t('delivery')}</p>
							<p>{t('submit-return')}</p>
							<p>{t('packaging')}</p>
							<p>{t('contact-us')}</p>
							<p>{t('faq')}</p>
						</Hidden>
					</div>
				</div>
			</div>
			<Hidden mdDown>
				<div className="header__static">
					<a
						href="https://fashioncare.ch/Home/Delivery"
						className="header__static-el"
					>
						{t('delivery')}
					</a>
					<a
						href="https://fashioncare.ch/Home/SubmitReturn"
						className="header__static-el"
					>
						{t('submit-return')}
					</a>
					<a
						href="https://fashioncare.ch/Home/Packaging"
						className="header__static-el"
					>
						{t('packaging')}
					</a>
					<a
						href="https://fashioncare.ch/Home/ContactUs"
						className="header__static-el"
					>
						{t('contact-us')}
					</a>
					<a
						href="https://fashioncare.ch/Home/FAQ"
						className="header__static-el"
					>
						{t('faq')}
					</a>
				</div>
			</Hidden>
		</>
	);
};

export default NavBar;
