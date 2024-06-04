import { FC } from 'react';

import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';

const Member: FC = () => {
  const navigate = useNavigate();

  const { member_id } = useParams();

  return (
    <>
      <Helmet>
        <title>Member</title>
      </Helmet>

      <h1>Member!</h1>
      <div>
        <p>member_id is {member_id}</p>
      </div>
      <div>
        <button onClick={() => navigate(-1)}>戻る</button>
      </div>
    </>
  );
};

export default Member;
