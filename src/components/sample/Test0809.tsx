import { FC } from 'react';

type Props = {
  name: string;
};

const value1 = true;
const value2 = false;
const data = ['data1', 'data2', 'data3'];

const Test: FC<Props> = ({ name }) => {
  return (
    <>
      <h1>Hello! {name}</h1>

      <div>{value1 && 'value1 == truthy'}</div>
      <div>{value2 || 'value2 == falthy'}</div>
      <br />
      <div>
        dataのイテレート処理
        {data.map((value, index) => {
          return <div key={index}>{value}</div>;
        })}
      </div>

      {/* コメントアウト */}
    </>
  );
};

export default Test;
