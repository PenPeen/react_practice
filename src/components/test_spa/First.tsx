import { FC } from 'react';

import { useNavigate } from 'react-router-dom';

const First: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>First!</h1>
      <div>
        <button onClick={() => navigate(-1)}>戻る</button>
      </div>
    </>
  );
};

export default First;
