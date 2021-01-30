import React from 'react';
import {useSelector} from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import {Link} from 'react-router-dom';

import {CATEGORY, PRODUCT_CLASSES} from '../../../constants';
import './breadcrumb.scss';

function Breadcrumb() {
	const {Product} = useSelector(state => state.product);

	return (
		<Breadcrumbs aria-label="breadcrumb" className="breadcrumb">
			<Link to="/home/index2">Home</Link>
			<Typography color="textPrimary">
				{CATEGORY[Product.CategoryId - 1]}
			</Typography>
			<Typography color="textPrimary">
				{PRODUCT_CLASSES.find(el => el.id === Product.ProductClassId).title}
			</Typography>
			<Typography color="textPrimary">{Product.Title}</Typography>
		</Breadcrumbs>
	);
}
export default React.memo(Breadcrumb);
