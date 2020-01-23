import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const initialState = {}; //initial app-level state

const middleware = [thunk]; // the middleware we want to use

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware))); // the reducer we working with, initial state, 

export default store;