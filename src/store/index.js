import {createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import reducers from './../reducers';

const initialState = {
  city: 'Buenos Aires,ar'
};

// noinspection JSUnresolvedVariable
const composeEhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, initialState, composeEhancer(applyMiddleware(thunk)));

export default store;