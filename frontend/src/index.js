import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ModalProvider, Modal } from "./context/Modal";
import './index.css';
import configureStore from './store';
import { restoreCSRF, csrfFetch } from './store/csrf';

// import App from './App';
import App from './App';
import * as spotsActions from './store/spots';
import * as sessionActions from './store/session';
import * as reviewsActions from './store/reviews'
import * as bookingsActions from './store/bookings'
const store = configureStore();

if (process.env.NODE_ENV !== "production") {
  restoreCSRF();
  window.csrfFetch = csrfFetch;
  window.store = store;
  window.sessionActions = sessionActions;
  window.spotsActions = spotsActions;
  window.reviewsActions = reviewsActions;
  window.bookingsActions = bookingsActions;
}

function Root() {
  return (
    <Provider store={store}>
      <ModalProvider>
        <BrowserRouter>
          <App />
          <Modal />
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
