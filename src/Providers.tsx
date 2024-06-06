import { FC, PropsWithChildren } from 'react';

import { HelmetProvider } from 'react-helmet-async';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';

import {
  counterReducer,
  initialState,
} from './components/test_redux_plain/reducer';

const store = createStore(counterReducer, initialState);
const Providers: FC<PropsWithChildren> = ({ children }) => (
  <BrowserRouter>
    <HelmetProvider>
      {' '}
      <ReduxProvider store={store}>{children}</ReduxProvider>{' '}
    </HelmetProvider>
  </BrowserRouter>
);

export default Providers;
