import { FC, PropsWithChildren } from 'react';

import { configureStore } from '@reduxjs/toolkit';
import { HelmetProvider } from 'react-helmet-async';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { reducer } from '@/components/test_use_reducer/hooks/useCounter';

const store = configureStore({ reducer });

const Providers: FC<PropsWithChildren> = ({ children }) => (
  <BrowserRouter>
    <HelmetProvider>
      <ReduxProvider store={store}>{children}</ReduxProvider>
    </HelmetProvider>
  </BrowserRouter>
);

export default Providers;
