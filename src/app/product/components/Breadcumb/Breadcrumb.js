import React from 'react';
import {useSelector} from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import * as Actions from '../../../store/actions/products';
import {CATEGORY, PRODUCT_CLASSES} from '../../../constants';

import './breadcrumb.scss';

function Breadcrumb() {
	const dispatch = useDispatch();
	const {Product} = useSelector(state => state.product);

	return (
		<Breadcrumbs aria-label="breadcrumb" className="breadcrumb">
			<Link to="/home/index2">Home</Link>
			<Link
				to="/home/index2"
				onClick={() => dispatch(Actions.filterByCategory(Product.CategoryId))}
			>
				{CATEGORY[Product.CategoryId - 1]}
			</Link>
			<Link
				onClick={() =>
					dispatch(
						Actions.filterByCategoryAndClass(
							Product.ProductClassId,
							Product.CategoryId
						)
					)
				}
				to="/home/index2"
			>
				{PRODUCT_CLASSES.find(el => el.id === Product.ProductClassId).title}
			</Link>
			<Typography color="textPrimary">{Product.Title}</Typography>
		</Breadcrumbs>
	);
}
export default React.memo(Breadcrumb);
