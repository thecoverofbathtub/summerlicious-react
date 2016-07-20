import {
    LOAD_DETAILS_SUCCESS
} from './action-types';

export function loadRestaurantDetails() {
    return (dispatch) => {
        dispatch({
            type: LOAD_DETAILS_SUCCESS,
            payload: require('json!./details.json')
        });
    };
}