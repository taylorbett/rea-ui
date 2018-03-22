import { combineReducers } from 'redux';
import searchReducer from './searchReducer';

const combinedReducer = combineReducers({
    search: searchReducer,
});

export default combinedReducer;