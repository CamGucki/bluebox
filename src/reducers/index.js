import { combineReducers } from "redux";
import { reducer as Form } from "redux-form";

import headerNavbar from "./headernavbarReducer";

const rootReducer = combineReducers({
	Form,
	headerNavbar,
});

export default rootReducer;
