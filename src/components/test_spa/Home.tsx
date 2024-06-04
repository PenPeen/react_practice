import { FC } from 'react';

import { useSearchParams } from 'react-router-dom';

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
        <button onClick={updateSearchParams}>updateHogeSearchParams</button>
      </div>
      <div>
        <p>hoge: {hogeValue}</p>
      </div>
    </>
  );
};

export default Home;
