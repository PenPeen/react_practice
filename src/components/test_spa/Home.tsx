import { FC } from 'react';

import { Link, useSearchParams } from 'react-router-dom';

export const Home: FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const hogeValue = searchParams.get('hoge');
  const updateSearchParams = () => {
    setSearchParams({ hoge: 'hoge' });
  };

  return (
    <>
      <h1>MyHome!</h1>
      <div>
        <button onClick={updateSearchParams}>
          updateHogeSearchParams from {hogeValue}
        </button>
      </div>
      <div>
        <Link to="/first">to First</Link>
      </div>
      <div>
        <Link to="/members/1">to Member</Link>
      </div>
    </>
  );
};
