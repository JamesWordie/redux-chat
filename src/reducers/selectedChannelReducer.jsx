import { SELECTED } from '../actions/index';

const selectedChannelReducer = (state, action) => {
  switch (action.type) {
    case SELECTED:
      return action.payload;
    default:
      return state;
  }
}

export default selectedChannelReducer;
