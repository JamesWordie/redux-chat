// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

// internal modules
import App from './components/app';
// import '../assets/stylesheets/application.scss';
import 'bootstrap/dist/css/bootstrap.css';
import reducers from './reducers';

// State and reducers
const messages = [
  {
    "author":"anonymous92",
    "content":"Hello world!",
    "created_at":"2017-09-26T23:03:16.365Z"
  },
  {
    "author":"anonymous77",
    "content":"My name is anonymous77",
    "created_at":"2017-09-26T23:03:21.194Z"
  }
]

const initialState = {
  messages,
  currentUser: window.prompt('What is your username?' || `anonymous${Math.floor(10 + (Math.random() * 90))}`),
  channels: ['General', 'React', 'Edinburgh', 'Javascript', 'Help'],
  selectedChannel: 'General'
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(reduxThunk));
const store = createStore(reducers, initialState, middlewares);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);