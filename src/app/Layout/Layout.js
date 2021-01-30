import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import Loading from './Loading';

import * as Actions from '../store/actions/products';
import './layout.scss';

const Header = React.lazy(() => import('./Header')); // Lazy-loaded
const Footer = React.lazy(() => import('./Footer')); // Lazy-loaded

const Layout = ({children}) => {
	const dispatch = useDispatch();
	const location = useLocation();
	const [loading, setLoading] = useState(true);
	const className = location.pathname === '/' ? 'layout-home' : 'layout';

	useEffect(() => {
		setLoading(true);
		dispatch(Actions.getRegion());
		dispatch(Actions.getProducts()).then(() => setLoading(false));
	}, []); // eslint-disable-line

	if (loading) {
		return (
			<div className={className}>
				<Header />
				<Loading />
				<Footer />
			</div>
		);
	}

	return (
		<div className={className}>
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
