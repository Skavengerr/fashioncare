import React, {useState, useRef} from 'react';
import {ControlledMenu, MenuItem, SubMenu} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import {Hidden} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import SearchIcon from '@material-ui/icons/Search';
import {useHistory} from 'react-router-dom';

import * as Actions from '../../store/actions/products';
import {PRODUCT_CLASSES, BRANDS} from '../../constants';
import './nav.scss';

const NavBar = () => {
	const dispatch = useDispatch();
	let history = useHistory();
	const ref = useRef(null);
	const brandRef = useRef(null);
	const [isOpen, setOpen] = useState(false);
	const [brandIsOpen, setBrandOpen] = useState(false);
	const value = useRef(null);
	const {category_id} = useSelector(state => state);

	const filterByCategoryAndClass = (classId, categoryId) => {
		history.push('/home/index2');
		dispatch(Actions.filterByCategoryAndClass(classId, categoryId));
	};

	const filterByBrand = brandId => {
		history.push('/home/index2');
		dispatch(Actions.filterByBrand(brandId));
	};

	const onFilterByClass = () => {
		history.push('/home/index2');
		filterByClass(7);
	};

	const filterByClass = classId => {
		history.push('/home/index2');
		dispatch(Actions.filterByClass(classId));
	};

	const closeMenus = () => {
		setOpen(false);
		setBrandOpen(false);
	};

	const toggleSearch = () => {
		dispatch(Actions.searchByValue(value.current.value));
		value.current.value = '';
	};

	return (
		<>
			<div>
				<div className="nav" onMouseLeave={closeMenus}>
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
						<p className="text-bold">Services</p>
						<>
							<button
								ref={ref}
								className="nav__menu-button"
								onMouseEnter={() => setOpen(true)}
							>
								Shop
							</button>

							<ControlledMenu
								anchorRef={ref}
								isOpen={isOpen}
								onClose={() => setOpen(false)}
							>
								<SubMenu label="Men">
									<MenuItem
										onClick={() => filterByCategoryAndClass(7, 1)}
									>
										Jackets and Hoodies
									</MenuItem>
								</SubMenu>
								<SubMenu label="Women">
									<MenuItem
										onClick={() => filterByCategoryAndClass(7, 2)}
									>
										Jackets and Hoodies
									</MenuItem>
								</SubMenu>
								<SubMenu label="Kids">
									{PRODUCT_CLASSES.map(el => (
										<MenuItem
											key={el.id}
											onClick={() =>
												filterByCategoryAndClass(el.id, 3)
											}
										>
											{el.title}
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
								Brands
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
						<p onClick={() => onFilterByClass(7)}>Jackets and hoodies</p>
						{category_id > 2 && (
							<p onClick={() => onFilterByClass(11)}>Bodies and Onesies</p>
						)}
						{category_id > 2 && (
							<p onClick={() => onFilterByClass(1)}>T-Shirts</p>
						)}
						{category_id > 2 && (
							<p onClick={() => onFilterByClass(5)}>Dresses</p>
						)}
						{category_id > 2 && (
							<p onClick={() => onFilterByClass(4)}>Shorts</p>
						)}
						{category_id > 2 && (
							<p onClick={() => onFilterByClass(9)}>Leggings</p>
						)}
						<Hidden lgUp>
							<p>Delivery</p>
							<p>Submit a return</p>
							<p>Packaging</p>
							<p>Contact us</p>
							<p>FAQ</p>
						</Hidden>
						<Hidden mdDown className="ml-20">
							<div className="flex">
								<input
									style={{
										height: 23,
										minWidth: 200
									}}
									type="text"
									placeholder="Search..."
									ref={value}
								/>

								<button
									style={{
										background: '#2796FF',
										border: 'none',
										cursor: 'pointer'
									}}
									onClick={toggleSearch}
								>
									<SearchIcon style={{color: '#fff'}} />
								</button>
							</div>
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
						Delivery
					</a>
					<a
						href="https://fashioncare.ch/Home/SubmitReturn"
						className="header__static-el"
					>
						Submit and return
					</a>
					<a
						href="https://fashioncare.ch/Home/Packaging"
						className="header__static-el"
					>
						Packaging
					</a>
					<a
						href="https://fashioncare.ch/Home/ContactUs"
						className="header__static-el"
					>
						Contact us
					</a>
					<a
						href="https://fashioncare.ch/Home/FAQ"
						className="header__static-el"
					>
						FAQ
					</a>
				</div>
			</Hidden>
		</>
	);
};

export default NavBar;
