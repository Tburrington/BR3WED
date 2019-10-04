import { createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers/reducersMain";
import thunk from "redux-thunk";

const composeEnhancer = composeWithDevTools || compose;

const store = createStore(reducers, composeEnhancer(applyMiddleware(thunk)));

export default store;
