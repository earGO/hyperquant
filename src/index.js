import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from "redux";
import logger  from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

import { dataReduser,timePeriodReducer,botSelectionReducer } from "./containers/App/reducers";
import { loadFromLocalStorage,saveState } from './common/functions/localStorage';

const persistedState = loadFromLocalStorage();

console.log('loaded state: ',persistedState);

const rootReducer = combineReducers({ dataReduser,timePeriodReducer,botSelectionReducer });

const store = createStore(rootReducer,persistedState,applyMiddleware(logger,thunkMiddleware));

console.log(store.getState());

store.subscribe(()=>{
    console.log(store.getState())
    saveState({
        state:store.getState()})
});

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
