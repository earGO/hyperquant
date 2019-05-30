import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from "redux";
import logger  from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import { dataReduser,timePeriodReducer } from "./containers/App/reducers";

const rootReducer = combineReducers({ dataReduser,timePeriodReducer });

const store = createStore(rootReducer,applyMiddleware(logger,thunkMiddleware));

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
