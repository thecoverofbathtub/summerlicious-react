import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import { restaurantDetailsReducer } from './restaurant-details';

export default combineReducers({
    restaurantDetails: restaurantDetailsReducer,
    routing: routerReducer
});