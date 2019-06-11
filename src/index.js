import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'

import App from './app'
import DefaultPage from './defaultPage'
import FavouritesList from './favouritesList'

import * as serviceWorker from './serviceWorker'
import { StoreProvider } from './store'

import 'bootstrap/dist/css/bootstrap.min.css'
import './style.css'

ReactDOM.render(
	<StoreProvider>
		<Router>
			<App path='/'>
				<DefaultPage path='/' />
				<FavouritesList path='/favs' />
			</App>
		</Router>
	</StoreProvider>,
	document.getElementById('app')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
