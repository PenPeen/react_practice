import PropTypes from 'prop-types';
import styled from 'styled-components';

import { useTimer } from '../hooks/useTimer';

const PrimeTime = styled.div`
  color: red;
  font-weight: 900;
`;

const NotPrimeTime = styled.div`
  color: blue;
  font-weight: 900;
`;

type Props = {
  remmainingTime?: number;
};

const Timer: React.FC<Props> = ({ remmainingTime }) => {
  const [time, primes, reset, stop] = useTimer(remmainingTime);

  return (
    <>
      {time > 0 && primes.includes(time) ? (
        <PrimeTime>{time}</PrimeTime>
      ) : (
        <div>{time > 0 ? <NotPrimeTime>{time}</NotPrimeTime> : 0}</div>
      )}
      <button onClick={reset}>Reset</button>
      <button onClick={stop}>stop</button>
    </>
  );
};

Timer.propTypes = {
  remmainingTime: PropTypes.number,
};

export default Timer;
