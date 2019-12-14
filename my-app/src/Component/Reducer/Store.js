import {createStore} from "redux";
import myRootReducer from "./myRootReducer"

const store = createStore(myRootReducer);
export default store