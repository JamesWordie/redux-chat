import { MESSAGES } from '../actions/index';

const messagesReducer = (state, action) => {
  switch (action.type) {
    case MESSAGES:
      return action.payload;
    default:
      return state;
  }
}

export default messagesReducer;
