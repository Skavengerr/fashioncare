import React from 'react';
import {Typography} from '@material-ui/core';

import './popular.scss';

const Popular = () => {
	return (
		<>
			<Typography variant="h4">Popular</Typography>
			<div className="popular m-0">
				<div className="popular__item"></div>
				<div className="popular__item"></div>
				<div className="popular__item"></div>
				<div className="popular__item"></div>
			</div>
			<Typography variant="h4">Winter</Typography>
			<div className="popular m-0">
				<div className="popular__item"></div>
				<div className="popular__item"></div>
				<div className="popular__item"></div>
				<div className="popular__item"></div>
			</div>
		</>
	);
};

export default Popular;
