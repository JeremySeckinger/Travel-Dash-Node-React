// =========================================================
// * Volt React Dashboard
// =========================================================

// * Product Page: https://themesberg.com/product/dashboard/volt-react
// * Copyright 2021 Themesberg (https://www.themesberg.com)
// * Official Repository: https://github.com/themesberg/volt-react-dashboard
// * License: MIT License (https://themesberg.com/licensing)

// * Designed and coded by https://themesberg.com

// =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. Please contact us to request a removal.

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux' // keeps track of store and allows access from anywhere inside of app
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk'; //used for async actions with redux




import { HashRouter } from "react-router-dom"; // A <Router> that uses the hash portion of the URL (i.e. window.location.hash) to keep your UI in sync with the URL.


// core styles
import "./scss/volt.scss";

// vendor styles
import "@fortawesome/fontawesome-free/css/all.css";
import "react-datetime/css/react-datetime.css";

import reducers from './reducers';

import HomePage from "./pages/HomePage";
import ScrollToTop from "./components/ScrollToTop";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <HashRouter>
    <ScrollToTop />
    <Provider store={store}>
    <HomePage />
    </Provider>
  </HashRouter>,
  document.getElementById("root")
);
