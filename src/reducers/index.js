import { combineReducers } from "redux";
import { reducer as Form } from "redux-form";
import user from "./userReducer";

import headerNavbar from "./headernavbarReducer";

const rootReducer = combineReducers({
	Form,
	headerNavbar,
	user,
});

export default rootReducer;
