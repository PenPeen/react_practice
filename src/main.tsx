import React from 'react';

import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';

import App from './App.tsx';

import './index.css';
import { counterReducer, initialState } from './plain_redux_counter/reducer.ts';

const store = createStore(counterReducer, initialState);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ReduxProvider store={store}>
        <App />
      </ReduxProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
