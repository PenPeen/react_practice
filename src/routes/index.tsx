import { FC } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import Home from '@/components/test_spa/Home';

const IndexRoutes: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="*" element={<Navigate to="/home" />}></Route>
      </Routes>
    </>
  );
};

export default IndexRoutes;
