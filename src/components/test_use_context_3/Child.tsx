import { FC, useContext } from 'react';

import { ParentContext } from './ContextProvider';

const Child: FC = () => {
  // 3. Context Valueの取得
  const [state, hogeUp] = useContext(ParentContext);

  return (
    <>
      <h2>Child</h2>
      <button onClick={hogeUp}>hogeUp</button>
      <p>state = {state}</p>
    </>
  );
};

export default Child;
