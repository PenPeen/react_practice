import { FC } from 'react';

import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

export const First: FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>First</title>
      </Helmet>
      <h1>First!</h1>
      <div>
        <button onClick={() => navigate(-1)}>戻る</button>
      </div>
    </>
  );
};
