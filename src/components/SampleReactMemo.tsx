import React from 'react';

type Props = {
  value: number;
};

const SampleReactMemo: React.FC<Props> = React.memo<Props>((props) => {
  console.log('レンダリングされました');

  // eslint-disable-next-line react/prop-types
  const { value } = props;

  return (
    <>
      <div>メモ化コンポーネント: {value}</div>
    </>
  );
});

SampleReactMemo.displayName = 'SampleReactMemo';

export default SampleReactMemo;
