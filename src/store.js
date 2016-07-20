import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

export default (initialState = {}) => {
    let middleware = applyMiddleware(thunk);
    return createStore(reducers, initialState, middleware);
};