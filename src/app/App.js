import React from 'react';
import history from '../@history';
import {Router, Route, Switch} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import rootReducer from './store/reducers/products';
import Home from './home';
import Product from './product';
import Footer from './home/components/Footer';
import CookieBanner from './OtherComponents/CookieBanner';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
	return (
		<Provider store={store}>
			<Router history={history}>
				<Switch>
					<Route path="/product/:id" component={Product} />
					<Route path="/" component={Home} />
				</Switch>
			</Router>
			<Footer />
			<CookieBanner />
		</Provider>
	);
};

export default App;
