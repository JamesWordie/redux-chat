import { combineReducers } from "redux";
import messagesReducer from "./messagesReducer";
import selectedChannelReducer from "./selectedChannelReducer";

const identityReducer = (state = null) => state;

const reducers = combineReducers({
  messages: messagesReducer,
  currentUser: identityReducer,
  channels: identityReducer,
  selectedChannel: selectedChannelReducer
});

export default reducers;
