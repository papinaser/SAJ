import {createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk"
import mainReducer from "./reducers/main"
function cofigureStore(state) {
    return createStore(mainReducer,state,applyMiddleware(thunk));
}

export default cofigureStore();
