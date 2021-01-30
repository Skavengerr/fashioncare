import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import * as Actions from '../store/actions/products';
import Loading from '../Layout/Loading';
import Breadcrumb from './components/Breadcumb';

import './product.scss';

const OtherProducts = React.lazy(() => import('./components/OtherProducts'));
const ProductCarousel = React.lazy(() => import('./components/ProductCarousel'));

const Product = () => {
	let {id} = useParams();
	const dispatch = useDispatch();
	const [loading, setLoading] = useState(true);

	const {Product} = useSelector(state => state.product);

	useEffect(() => {
		setLoading(true);
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth'
		});
		dispatch(Actions.getProductById(id)).then(() => setLoading(false));
	}, [id]); // eslint-disable-line

	if (!Product || loading)
		return (
			<div className="layout__loading">
				<Loading />
			</div>
		);
	return (
		<div className="product">
			<Breadcrumb />
			<ProductCarousel />
			<OtherProducts />
		</div>
	);
};

export default Product;
