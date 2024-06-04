import { FC } from 'react';

import { Link, useSearchParams } from 'react-router-dom';

const Home: FC = () => {
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
      <Link to="/first">to First</Link>
    </>
  );
};

export default Home;
