import { FC } from 'react';

import Child from './Child';
import ChildSecond from './ChildSecond';
import ContextProvider from './ContextProvider';

const Parent: FC = () => {
  return (
    <ContextProvider>
      <h1>Parent</h1>
      <Child />
      <ChildSecond />
    </ContextProvider>
  );
};

export default Parent;
