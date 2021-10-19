import { combineReducers } from "redux";
import goodsReducer from "./goodsReducer";
import alertReducer from "./alertReducer";

const rootReducer = combineReducers({goodsReducer, alertReducer});

export default rootReducer