import React, {useState} from 'react';
import {Button, Divider} from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';
import {Menu, Bookmarks, NavigateNext} from '@material-ui/icons';

import {CATEGORY, PRODUCT_CLASSES} from '../../../constants';
import * as Actions from '../../../store/actions/products';
import Accordion from './Accordion';
import './productDetail.scss';

const ProductDetail = () => {
	const dispatch = useDispatch();
	const {Product} = useSelector(state => state.product);
	const [selectedIndex] = useState();
	const [product, setProduct] = useState({...Product, quantity: 1, size: 'M'});
	const onIncrement = () => {
		if (product.quantity <= Product.StockAmount) {
			setProduct({
				...product,
				quantity: (product.quantity += 1)
			});
		} else if (product.quantity >= Product.StockAmount - 1) {
			return alert(`Max product quantity it's ${Product.StockAmount}`);
		}
	};

	const onDecrement = () => {
		if (product.quantity > 0) {
			setProduct({
				...product,
				quantity: (product.quantity -= 1)
			});
		}
	};

	const handleSubmit = () => {
		if (product.quantity <= Product.StockAmount) {
			dispatch(Actions.addToCart(product));
			setProduct({...product, quantity: 0});
			sessionStorage.setItem('UserID', 10);
			sessionStorage.setItem('Username', 'User');
			sessionStorage.setItem('UserRole', 'UserRole');
			sessionStorage.setItem('BrandId', 23);
			sessionStorage.setItem('cart', JSON.stringify({product}));
		}
	};
	if (!Product) return <div>Loading...</div>;
	return (
		<>
			<div className="appBar">
				<div className="appBar-product">
					<Menu fontSize="large" />
					<div>PRODUCT</div>
				</div>
				<div className="appBar-product appBar-product-avatar">3D Avatar</div>
			</div>
			<div className="productInfo">
				<p className="title-2">{Product.Title}</p>
				<p className="title-3">CHF {Product.Price}</p>
				<div className="productInfo__category">
					<Bookmarks className="mr-4" />
					<p className="productInfo__details-tag mr-20">
						{
							PRODUCT_CLASSES.find(el => el.id === Product.ProductClassId)
								.title
						}
					</p>
					<Bookmarks className="mr-4" />
					<p className="productInfo__details-tag">
						{CATEGORY[Product.CategoryId - 1]}
					</p>
				</div>
				<Divider />
				<p className="title-4">Details</p>
				<div className="productInfo__details">
					<div className="productInfo__details-item">
						<img
							alt={Product.Name}
							src="/icons/product/detail_1.svg"
							className="productInfo__details-img"
						/>
						Fair working conditions
					</div>
					<div className="productInfo__details-item">
						<img
							alt={Product.Name}
							src="/icons/product/detail_2.svg"
							className="productInfo__details-img"
						/>
						Environmental materials
					</div>
					<div className="productInfo__details-item">
						<img
							alt={Product.Name}
							src="/icons/product/detail_3.svg"
							className="productInfo__details-img"
						/>
						High-quality material
					</div>
					<div className="productInfo__details-item">
						<img
							alt={Product.Name}
							src="/icons/product/detail_4.svg"
							className="productInfo__details-img"
						/>
						Made in Italy
					</div>
				</div>
				<div className="productInfo__details">
					<div className="title-4">
						Colour: <span>{Product.Color}</span>
						<div className="productInfo__details-size">
							<button>{Product.Color}</button>
						</div>
					</div>
					<div className="title-4">
						Size:<span>{product.size}</span>
						<div className="productInfo__details-size">
							<button onClick={() => setProduct({...product, size: 'S'})}>
								S
							</button>
							<button onClick={() => setProduct({...product, size: 'M'})}>
								M
							</button>
							<button onClick={() => setProduct({...product, size: 'L'})}>
								L
							</button>
						</div>
					</div>
					<div className="title-4">
						Quantity:
						<div className="productInfo__details-size">
							<button onClick={onIncrement}>+</button>
							<p className="mr-10 text-black self-center mt-0 mb-0">
								{product.quantity}
							</p>
							<button onClick={onDecrement}>-</button>
						</div>
					</div>
					<div className="title-4">
						Delivery from:
						<div className="productInfo__details-size">
							<p className="productInfo__details-country">Italy</p>
						</div>
					</div>
				</div>

				<div className="flex">
					<Button
						variant="contained"
						classes={{root: 'productInfo__details-button'}}
						onClick={handleSubmit}
					>
						Buy <NavigateNext fontSize="large" />
					</Button>
					<img alt="" src="/icons/product/heart.svg" />
				</div>
				<div className="productInfo__description">
					<a
						target="_blank"
						rel="noreferrer"
						href="https://fashioncare.ch/Home/socksSize"
						className="productInfo__description-el"
					>
						<img alt="" src="/icons/product/plus.svg" className="mr-10" />
						<p>How to choose the right size</p>
					</a>
					<Accordion className="accordion" selectedIndex={selectedIndex}>
						<div
							data-header={
								<div className="productInfo__description-el">
									<img
										alt=""
										src="/icons/product/plus.svg"
										className="mr-10"
									/>
									<p>Description</p>
								</div>
							}
						>
							{Product.Content || Product.Details}
						</div>
						<div
							data-header={
								<div className="productInfo__description-el">
									<img
										alt=""
										src="/icons/product/plus.svg"
										className="mr-10"
									/>
									<p>Certificates</p>
								</div>
							}
							className="accordion-item"
						>
							<img
								alt=""
								src="/icons/product/Certificates.jpg"
								className="productInfo__description-certificate"
							/>
						</div>
					</Accordion>
				</div>
			</div>
		</>
	);
};

export default ProductDetail;
