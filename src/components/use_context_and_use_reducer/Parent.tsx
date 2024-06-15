import { FC } from 'react';

import ChildFirst from './ChildFirst';
import ChildSecond from './ChildSecond';
import ParentProvider from './context/ParentProvider';

const Parent: FC = () => {
  return (
    <>
      <ParentProvider>
        <h1>Parent</h1>
        <ChildFirst />
        <ChildSecond />
      </ParentProvider>
    </>
  );
};

export default Parent;
