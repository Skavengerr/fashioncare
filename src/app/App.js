import React from 'react';
import history from '../@history';
import {Router, Route, Switch} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import CookieBanner from './Layout/CookieBanner/CookieBanner';
import rootReducer from './store/reducers/products';
import Loading from './Layout/Loading';
import Layout from './Layout';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

const Home = React.lazy(() => import('./home')); // Lazy-loaded
const Product = React.lazy(() => import('./product')); // Lazy-loaded

const App = () => {
	return (
		<Provider store={store}>
			<React.Suspense fallback={<Loading />}>
				<Router history={history}>
					<Switch>
						<Layout>
							<Route path="/product/:id" component={Product} />
							<Route path="/home/index2" exact component={Home} />
						</Layout>
					</Switch>
				</Router>
				<CookieBanner />
			</React.Suspense>
		</Provider>
	);
};

export default App;
