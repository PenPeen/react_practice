import { FC } from 'react';

import { HelmetProvider } from 'react-helmet-async';
import { Navigate, Route, Routes } from 'react-router-dom';

import { First, Home, Member } from '@/components/test_spa';

const IndexRoutes: FC = () => {
  return (
    <>
      <HelmetProvider>
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/first" element={<First />}></Route>
          <Route path="/members/:member_id" element={<Member />}></Route>
          <Route path="*" element={<Navigate to="/home" />}></Route>
        </Routes>
      </HelmetProvider>
    </>
  );
};

export default IndexRoutes;
