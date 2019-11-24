import { FETCH_ITEMS, FETCH_ITEMS_START, FETCH_ITEMS_FAILED } from "../actions/types";

import items from '../../api/items';

export const fetchItems = () => async dispatch => {
    dispatch({type: FETCH_ITEMS_START});

    try {
        const response = await items.get('/');
        dispatch({type: FETCH_ITEMS, payload: response.data});
    }
    catch(error) {
        dispatch({type: FETCH_ITEMS_FAILED, payload: error});     
    }
}

export const fetchItemsFailed = (error) => {
    return {
        type: FETCH_ITEMS_FAILED,
        payload: error
    }
}



