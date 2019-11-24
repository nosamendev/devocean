
import { combineReducers } from 'redux';

import fetchItemsReducer from './fetchItemsReducer';

export default combineReducers({
    fetchItemsReducer: fetchItemsReducer
});
