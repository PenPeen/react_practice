import { FC, useContext } from 'react';

import { ParentContext } from './ContextProvider';

const ChildSecond: FC = () => {
  // 3. Context Valueの取得
  const [, , hogeDown] = useContext(ParentContext);

  return (
    <>
      <h2>ChildSecond</h2>
      <button onClick={hogeDown}>hogeDown</button>
    </>
  );
};

export default ChildSecond;
