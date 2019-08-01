
import * as types from "../actions/actionTypes";

const initialState = {
    CoffeeShopList: [],
    location: ''
}

const coffeeShopsReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.FETCH_SHOPS_BEGIN:

        return {
            ...state, 
            error: null
        };
        case types.SETNEWLOCATION:
        return {
            ...state,
            location: action.payload
        }
        case types.FETCH_SHOPS_SUCCESS:
            // console.log('hello!')
            // console.log(state.CoffeeShopList);
            // console.log(action.payload)
        return {
            ...state,
            CoffeeShopList: action.payload,
            location: ''
        };

        case types.FETCH_SHOPS_FAILURE:

        return {
            ...state,
            error: action.payload.error,
            CoffeeShopList: []
        };

        default: 
            return state;
    }
}

export default coffeeShopsReducer;