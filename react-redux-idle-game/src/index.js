import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import allReducers from './reducers';
import './index.css';
import {loadState, saveState} from './localStorage';

const persistedState = loadState();
const store = createStore(allReducers, persistedState);

store.subscribe(() => {
  saveState(store.getState());
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// console.log(store.getState())
// const unsubscribe = store.subscribe(() => console.log(store.getState()))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
