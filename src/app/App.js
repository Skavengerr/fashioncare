import React from 'react';
import history from '../@history';
import {Router, Route, Switch} from 'react-router-dom';

import Home from './home';
import Product from './product';
import Footer from './home/components/Footer';

const App = () => {
	return (
		<>
			<Router history={history}>
				<Switch>
					<Route path="/product/:id" component={Product} />
					<Route path="/" component={Home} />
				</Switch>
			</Router>
			<Footer />
		</>
	);
};

export default App;
