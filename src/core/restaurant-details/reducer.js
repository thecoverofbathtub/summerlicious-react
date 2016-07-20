import {
    LOAD_DETAILS_SUCCESS,
    LOAD_DETAILS_FAILURE
} from './action-types';

const initialState = {
    details: []
};

export function restaurantDetailsReducer(state = initialState, {payload, type}) {
    switch (type) {
        case LOAD_DETAILS_SUCCESS:
            return {
                details: payload
            };
        case LOAD_DETAILS_FAILURE:
            console.error(payload);
            return state;
        default:
            return state;
    }
}