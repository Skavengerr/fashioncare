import React from 'react';
import {Social} from '../Header/TopHeader';
import TextField from '@material-ui/core/TextField';

import './footer.scss';
import {Button} from '@material-ui/core';

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer__top">
				<div className="footer__top-social">
					<p>Social</p> <Social />
				</div>
				<div className="footer__top-social">Call</div>
			</div>
			<div className="footer__info">
				<div className="footer__info-left">
					<div className="footer__info-left-support">
						<h3 className="footer-h3">Support</h3>
						<ul>
							<a href="/about-us">About us</a>
							<a href="/brands">New Brands</a>
							<a href="/pillars">Our Pillars</a>
							<a href="/environment">Environment problem</a>
							<a href="/social-problems">Social responsible</a>
							<a href="/technologies">Our technologies</a>
						</ul>
					</div>
					<div className="footer__info-left-blog">
						<h3 className="footer-h3">From the blog</h3>
					</div>
				</div>
				<div className="footer__info-search">
					<TextField
						fullWidth
						id="outlined-search"
						label="Search field"
						type="search"
						variant="outlined"
					/>
					<Button>Go!</Button>
				</div>
			</div>
			<div className="footer__bot">
				<p>All rights reserved by © Fashioncare Aisarinova Group March 2020</p>
			</div>
		</div>
	);
};

export default Footer;
