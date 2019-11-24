import { FETCH_ITEMS, FETCH_ITEMS_START, FETCH_ITEMS_FAILED } from "../actions/types";

const INITIAL_STATE = {
    error: false,
    loading: false,
    description: '',
    clients: []
};

const fetchItemsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_ITEMS:
            return {...state, ...action.payload, loading: false};       
        case FETCH_ITEMS_START:
            return {...state, loading: true}
        case FETCH_ITEMS_FAILED:
            return {...state, loading: false, description: action.payload, error: true}    

        default:
            return state;
    }
}

export default fetchItemsReducer;