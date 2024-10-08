import { FC, PropsWithChildren } from 'react';

import stylesssss from './test0810.module.css';
import useCounter0810 from '../hooks/useCounter0810';

type Props = {
  name: string;
};

const Test: FC<Props & PropsWithChildren> = ({ name }) => {
  console.log('rendered');

  const { count, countUp } = useCounter0810();
  const { count: countSecond, countUp: countSecondUp } = useCounter0810();

  return (
    <>
      <h1 className={stylesssss.title}>Hello! {name}</h1>

      <div>
        <div>count = {count}</div>
        <div>
          <button onClick={countUp}>count up</button>
        </div>
      </div>

      <div>
        <div>countSecond = {countSecond}</div>
        <div>
          <button onClick={countSecondUp}>count up</button>
        </div>
      </div>
    </>
  );
};

export default Test;
