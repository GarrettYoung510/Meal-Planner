import { combineReducers } from "redux";
<<<<<<< HEAD
import { reducer as form } from "redux-form";
import counter from "./counter";
import auth from "./auth";
=======
import { reducer as form } from 'redux-form';
import counter from './counter';
import auth from './auth';
>>>>>>> 981b233ef2ebd0bc265200c716dec7c1eeb13f5c
// import todo from './todo';

export default combineReducers({
  auth,
  form,
  // todo,
  counter
});
