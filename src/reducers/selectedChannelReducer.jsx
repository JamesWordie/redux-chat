import { SELECTED_CHANNEL } from '../actions/index';

const selectedChannelReducer = (state = '', action) => {
  switch (action.type) {
    case SELECTED_CHANNEL:
      return action.payload;
    default:
      return state;
  }
}

export default selectedChannelReducer;
