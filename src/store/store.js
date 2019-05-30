import {createStore} from "redux";
import mainReducer from "./reducers/main"
function cofigureStore(state) {
    return createStore(mainReducer,state);
}

export default cofigureStore();
