import {
    LOAD_DETAILS_SUCCESS
} from './action-types';

import { details } from 'json!./details.json';

export function loadRestaurantDetails() {
    return (dispatch) => {
        dispatch({
            type: LOAD_DETAILS_SUCCESS,
            payload: details
        });
    };
}