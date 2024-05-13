import { useEffect, useState } from 'react';

const TestCleanUp: React.FC = () => {
  const [count, setCount] = useState(0);
  const handleButtonClick = () => setCount((count) => count + 1);
  useEffect(() => {
    console.log('レンダリングの度に実行');

    // アンマウント & 副作用の実行前に実行
    return () => console.log('クリーンアップ関数が実行されました');
  });

  return (
    <>
      <div>{count}</div>
      <button onClick={handleButtonClick}>Focus</button>
    </>
  );
};

export default TestCleanUp;
