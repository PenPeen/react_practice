import { FC, useContext } from 'react';

import { DispacherContext } from './ContextProvider';

const ChildSecond: FC = () => {
  // 3. Context Valueの取得
  const [hogeUp, hogeDown] = useContext(DispacherContext);

  return (
    <>
      <h2>ChildSecond</h2>
      <button onClick={hogeUp}>hogeUp</button>
      <button onClick={hogeDown}>hogeDown</button>
    </>
  );
};

export default ChildSecond;
