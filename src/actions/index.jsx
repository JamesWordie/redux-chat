// TODO: add and export your own actions
import wagonChat from '../api/wagonChat';

export const GET_MESSAGES = 'GET_MESSAGES';
export const POST_MESSAGE = 'POST_MESSAGE';

export const fetchMessages = (channel) => async dispatch => {
  const response = await wagonChat.get(`${channel}/messages`);

  dispatch({ type: GET_MESSAGES, payload: response.data.messages });
}

export const createMessage = (channel, author, content) => async dispatch => {
  const response = await wagonChat.post(`${channel}/messages`, { author, content });

  dispatch({ type: POST_MESSAGE, payload: response.data })
}
