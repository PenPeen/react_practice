import { FC, PropsWithChildren } from 'react';

import { configureStore } from '@reduxjs/toolkit';
import { HelmetProvider } from 'react-helmet-async';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import reducers from '@/components/test_redux_tool_kit_slice/stores/counter';

const store = configureStore({ reducer: reducers });

const Providers: FC<PropsWithChildren> = ({ children }) => (
  <BrowserRouter>
    <HelmetProvider>
      <ReduxProvider store={store}>{children}</ReduxProvider>
    </HelmetProvider>
  </BrowserRouter>
);

export default Providers;
