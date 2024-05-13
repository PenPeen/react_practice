import PropTypes from 'prop-types';

import { useTimer } from './hooks/useTimer';

type Props = {
  remmainingTime?: number;
};

const Timer: React.FC<Props> = ({ remmainingTime }) => {
  const [time, reset, stop] = useTimer(remmainingTime);
  return (
    <>
      <div>{time > 0 ? time : 0}</div>
      <button onClick={reset}>Reset</button>
      <button onClick={stop}>stop</button>
    </>
  );
};

Timer.propTypes = {
  remmainingTime: PropTypes.number,
};

export default Timer;
