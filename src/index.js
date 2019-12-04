import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import authReducer from './redux/authReducer';

// redux store
const persistConfig = {
  key: 'root',
  storage,
};
const persistedAuthReducer = persistReducer(persistConfig, authReducer);
// export default () => {
//   let store = createStore(persistedAuthReducer)
//   let persistor = persistStore(store)
//   return { store, persistor }
// }
export const store = createStore(
  persistedAuthReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
