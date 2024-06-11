import { FC, useContext } from 'react';

import { StateContext } from './ContextProvider';

const Child: FC = () => {
  // 3. Context Valueの取得
  const [state] = useContext(StateContext);

  return (
    <>
      <h2>Child</h2>
      <p>state = {state}</p>
    </>
  );
};

export default Child;
