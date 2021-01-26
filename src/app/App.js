import React, {useReducer} from 'react';
import {ContextApp, initialState, testReducer} from './reducer.js';
import history from '../@history';
import {Router, Route, Switch} from 'react-router-dom';

import Home from './home';
import Product from './product';
import Footer from './home/components/Footer';
import CookieBanner from './OtherComponents/CookieBanner';

const App = () => {
	const [state, dispatch] = useReducer(testReducer, initialState);
	return (
		<ContextApp.Provider value={{dispatch, state}}>
			<Router history={history}>
				<Switch>
					<Route path="/product/:id" component={Product} />
					<Route path="/" component={Home} />
				</Switch>
			</Router>
			<Footer />
			<CookieBanner />
		</ContextApp.Provider>
	);
};

export default App;
