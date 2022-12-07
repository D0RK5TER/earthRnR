import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ModalProvider } from "./context/Modal";
import './index.css';
import configureStore from './store';
import { restoreCSRF, csrfFetch } from './store/csrf';

// import App from './App';
import App from './App2';
import * as spotsActions from './store/spots2';
import * as sessionActions from './store/session2';
import * as reviewsActions from './store/reviews2'

const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  restoreCSRF();
  window.csrfFetch = csrfFetch;
  window.store = store;
  window.sessionActions = sessionActions;
  window.spotsActions = spotsActions
  window.reviewsActions = reviewsActions
}



function Root() {
  return (
    <Provider store={store}>
      <ModalProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ModalProvider>
    </Provider>
  );
}
ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
