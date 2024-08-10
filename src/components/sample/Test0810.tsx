import { FC, PropsWithChildren, useEffect, useState } from 'react';

type Props = {
  name: string;
};

const initialData = ['data1', 'data2', 'data3'];

const Test: FC<Props & PropsWithChildren> = ({ name }) => {
  const [count, setCount] = useState(0);
  const [countSecond, setCountSecond] = useState(0);
  const [data, setData] = useState(initialData);
  const countUp = () => setCount((count) => ++count);
  const countSecondUp = () => setCountSecond((count) => ++count);
  const addData = () => setData((data) => [...data, 'addData']);
  console.log('rendered');

  useEffect(() => {
    console.log('called 1st rendering');
  }, []);

  useEffect(() => {
    console.log('update count');
  }, [count]);

  return (
    <>
      <h1>Hello! {name}</h1>

      <div>
        <div>count</div>
        <div>count = {count}</div>
        <div>
          <button onClick={countUp}>count up</button>
        </div>
      </div>

      <div>
        <div>countSecond</div>
        <div>countSecond = {countSecond}</div>
        <div>
          <button onClick={countSecondUp}>count up</button>
        </div>
      </div>

      <div>
        <div>data</div>
        <div>data = {data.join(', ')}</div>
        <div>
          <button onClick={addData}>addData</button>
        </div>
      </div>
    </>
  );
};

export default Test;
