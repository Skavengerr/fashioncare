import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProductInfo from '../ProductInfo';

import './productDetail.scss';

function TabPanel(props) {
	const {children, value, index, ...other} = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && <Box p={3}>{children}</Box>}
		</div>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired
};

function a11yProps(index) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`
	};
}

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper
	},
	underline: {
		'&&&:before': {
			borderBottom: 'none'
		},
		'&&:after': {
			borderBottom: 'none'
		}
	}
}));

export default function ProductDetail() {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>
			<AppBar position="static" classes={{root: 'detail__appbar'}}>
				<Tabs
					value={value}
					onChange={handleChange}
					aria-label="simple tabs example"
				>
					<Tab
						label="Product"
						{...a11yProps(0)}
						classes={{
							selected: 'detail__selected',
							underline: classes.underline
						}}
					/>
					<Tab
						label="Shipping"
						{...a11yProps(1)}
						classes={{
							selected: 'detail__selected',
							underline: classes.underline
						}}
						disabled
					/>
					<Tab
						label="Returns"
						{...a11yProps(2)}
						classes={{
							selected: 'detail__selected',
							underline: classes.underline
						}}
						disabled
					/>
					<Tab
						label="Ratings"
						{...a11yProps(3)}
						classes={{
							selected: 'detail__selected',
							underline: classes.underline
						}}
						disabled
					/>
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0}>
				<ProductInfo />
			</TabPanel>
			<TabPanel value={value} index={1}>
				Shipping
			</TabPanel>
			<TabPanel value={value} index={2}>
				Returns
			</TabPanel>
			<TabPanel value={value} index={3}>
				Ratings
			</TabPanel>
		</div>
	);
}
