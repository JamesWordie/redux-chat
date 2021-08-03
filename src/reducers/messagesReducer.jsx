import { GET_MESSAGES } from '../actions/index';
import { POST_MESSAGE } from '../actions/index';

const messagesReducer = (state = [], action) => {
  switch (action.type) {
    case GET_MESSAGES:
      return [ ...action.payload ];
    case POST_MESSAGE:
      return [ ...state, action.payload ]
    default:
      return state;
  }
}

export default messagesReducer;
