import React from 'react';
import {Button, Divider} from '@material-ui/core';
import {Social} from '../Header/TopHeader';
import TextField from '@material-ui/core/TextField';
import LazyLoad from 'react-lazyload';
import {useTranslation} from 'react-i18next';

import './footer.scss';

const Footer = () => {
	const {t} = useTranslation('main');
	return (
		<div className="footer">
			<div className="footer__info">
				<div className="footer__info-left">
					<div className="footer__info-left-support">
						<LazyLoad once>
							<img alt="footer-images" src="/icons/product/logo.svg" />
						</LazyLoad>
					</div>
					<div className="footer__info-left-support">
						<h3 className="footer-h3">{t('support')}</h3>
						<ul>
							<a href="https://fashioncare.ch/Home/AboutUs">
								{t('about-us')}
							</a>
							<a href="https://fashioncare.ch/Home/NewBrands">
								{t('new-brands')}
							</a>
							<a href="https://fashioncare.ch/Home/Pillars">
								{t('our-pillars')}
							</a>
							<a href="https://fashioncare.ch/Home/Environment">
								{t('environment-problem')}
							</a>
							<a href="https://fashioncare.ch/Home/Sustainability">
								{t('social-responsible')}
							</a>
							<a href="/technologies">{t('our-technologies')}</a>
						</ul>
					</div>
					<div className="footer__info-left-support">
						<h3 className="footer-h3">{t('customer-care')}</h3>
						<ul>
							<a href="/about-us">{t('return-policy')}</a>
							<a href="/brands">{t('submit-return')}</a>
							<a href="/pillars">{t('delivery')}</a>
							<a href="/environment">{t('packaging')}</a>
						</ul>
					</div>
					<div className="footer__info-left-blog">
						<h3 className="footer-h3">{t('from-the-blog')}</h3>
					</div>
				</div>
				<div className="footer__info-right">
					<div className="footer__info-right-search">
						<TextField
							fullWidth
							id="outlined-search"
							label={t('search-field')}
							type="search"
							variant="outlined"
							className="footer__info-search-input"
						/>
						<Button>{t('go')}!</Button>
					</div>
					<p className="footer__info-right-text">{t('sign-up-to-receive')}</p>
					<Divider className="footer__info-right-divider" />
					<p className="footer__info-right-soc">{t('socialize-with-us')}</p>
					<Social />
				</div>
			</div>
			<div className="footer__bot">
				<p>{t('all-rights')}</p>
			</div>
		</div>
	);
};

export default Footer;
