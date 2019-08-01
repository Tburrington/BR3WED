import { combineReducers } from 'redux';
import coffeeShopsReducer from './coffeeShopsReducer';

const reducers = combineReducers({
    coffeeShops: coffeeShopsReducer,
})

export default reducers;