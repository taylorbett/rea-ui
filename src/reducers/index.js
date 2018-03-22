import { combineReducers } from 'redux';
import searchReducer from './searchReducer';

const combinedReducer = combineReducers({
    searchReducer,
});

export default combinedReducer;