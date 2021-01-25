import React from 'react';
import {Hidden} from '@material-ui/core';

import './nav.scss';

const NavBar = () => {
	return (
		<>
			<div>
				<div className="nav">
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
						<p>Shop</p>
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
					<div className="header__static-el">Delivery</div>
					<div className="header__static-el">Submit and return</div>
					<div className="header__static-el">Packaging</div>
					<div className="header__static-el">Contact us</div>
					<div className="header__static-el">FAQ</div>
				</div>
			</Hidden>
		</>
	);
};

export default NavBar;
