import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loading = () => {
	return (
		<div className="layout__loading">
			<CircularProgress classes={{root: 'layout__loading-color'}} size={80} />
		</div>
	);
};

export default Loading;
