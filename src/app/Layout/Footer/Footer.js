import React from 'react';
import {Button, Divider} from '@material-ui/core';
import {Social} from '../Header/TopHeader';
import TextField from '@material-ui/core/TextField';

import './footer.scss';

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__info">
				<div className="footer__info-left">
					<div className="footer__info-left-support">
						<img alt="footer-images" src="/icons/product/logo.svg" />
					</div>
					<div className="footer__info-left-support">
						<h3 className="footer-h3">Support</h3>
						<ul>
							<a href="https://fashioncare.ch/Home/AboutUs">About us</a>
							<a href="https://fashioncare.ch/Home/NewBrands">New Brands</a>
							<a href="https://fashioncare.ch/Home/Pillars">Our Pillars</a>
							<a href="https://fashioncare.ch/Home/Environment">
								Environment problem
							</a>
							<a href="https://fashioncare.ch/Home/Sustainability">
								Social responsible
							</a>
							<a href="/technologies">Our technologies</a>
						</ul>
					</div>
					<div className="footer__info-left-support">
						<h3 className="footer-h3">Customer Care</h3>
						<ul>
							<a href="/about-us">Return Policy</a>
							<a href="/brands">Submit a Return</a>
							<a href="/pillars">Delivery</a>
							<a href="/environment">Packaging</a>
						</ul>
					</div>
					<div className="footer__info-left-blog">
						<h3 className="footer-h3">From the blog</h3>
					</div>
				</div>
				<div className="footer__info-right">
					<div className="footer__info-right-search">
						<TextField
							fullWidth
							id="outlined-search"
							label="Search field"
							type="search"
							variant="outlined"
							className="footer__info-search-input"
						/>
						<Button>Go!</Button>
					</div>
					<p className="footer__info-right-text">
						Sign up to receive our latest news and updates direct to your
						inbox
					</p>
					<Divider className="footer__info-right-divider" />
					<p className="footer__info-right-soc">Socialize with us</p>
					<Social />
				</div>
			</div>
			<div className="footer__bot">
				<p>All rights reserved by © Fashioncare Aisarinova Group March 2020</p>
			</div>
		</div>
	);
};

export default Footer;
