import { FC } from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';

import First from '@/components/test_spa/First';
import Home from '@/components/test_spa/Home';
import Member from '@/components/test_spa/Member';

const IndexRoutes: FC = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/first" element={<First />}></Route>
        <Route path="/members/:member_id" element={<Member />}></Route>
        <Route path="*" element={<Navigate to="/home" />}></Route>
      </Routes>
    </>
  );
};

export default IndexRoutes;
