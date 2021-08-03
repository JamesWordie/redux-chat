import { combineReducers } from "redux";

const identityReducer = (state = null) => state;

const reducers = combineReducers({
  messages: identityReducer,
  currentUser: identityReducer,
  channels: identityReducer,
  selectedChannel: identityReducer
});

export default reducers;
