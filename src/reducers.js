import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

/*
const PLACEHOLDER = 'PLACEHOLDER';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case PLACEHOLDER:
            return {};
        default:
            return state;
    }
};
*/

export default combineReducers({
    routing: routerReducer
});