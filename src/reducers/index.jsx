import { combineReducers } from "redux";
import messagesReducer from "./messagesReducer";

const identityReducer = (state = null) => state;

const reducers = combineReducers({
  messages: messagesReducer,
  currentUser: identityReducer,
  channels: identityReducer,
  selectedChannel: identityReducer
});

export default reducers;
