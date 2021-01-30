import React, {useState, useRef} from 'react';
import {ControlledMenu, MenuItem, SubMenu} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import {Hidden} from '@material-ui/core';
import {useDispatch} from 'react-redux';

import * as Actions from '../../store/actions/products';
import './nav.scss';
import {PRODUCT_CLASSES} from '../../constants';

const NavBar = () => {
	const dispatch = useDispatch();
	const ref = useRef(null);
	const [isOpen, setOpen] = useState(false);

	const filterProduct = (classId, categoryId) => {
		dispatch(Actions.filterByCategoryAndClass(classId, categoryId));
	};

	return (
		<>
			<div>
				<div className="nav" onMouseLeave={() => setOpen(false)}>
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
									<MenuItem onClick={() => filterProduct(7, 1)}>
										Jackets and Hoodies
									</MenuItem>
								</SubMenu>
								<SubMenu label="Women">
									<MenuItem onClick={() => filterProduct(7, 2)}>
										Jackets and Hoodies
									</MenuItem>
								</SubMenu>
								<SubMenu label="Kids">
									{PRODUCT_CLASSES.map(el => (
										<MenuItem
											onClick={() => filterProduct(el.id, 3)}
											key={el.id}
										>
											{el.title}
										</MenuItem>
									))}
								</SubMenu>
							</ControlledMenu>
						</>
						<p>Brands</p>
						<p>Coats and jackets</p>
						<p>Bodys and Onesies</p>
						<p>T-Shirts</p>
						<p>Dresses</p>
						<p>Shorts</p>
						<p>Leggings</p>
						<Hidden lgUp>
							<p>Delivery</p>
							<p>Submit a return</p>
							<p>Packaging</p>
							<p>Contact us</p>
							<p>FAQ</p>
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
