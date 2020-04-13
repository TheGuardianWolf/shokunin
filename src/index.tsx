import 'react-hot-loader';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'typeface-roboto';
import 'components/google-analytics/GoogleAnalytics';

import * as serviceWorker from './serviceWorker';

import App from './App';
import { Provider } from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { store } from 'app/store';

const scrollBehavior = window.history.scrollRestoration;
if (scrollBehavior) {
  window.history.scrollRestoration = 'manual';
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
