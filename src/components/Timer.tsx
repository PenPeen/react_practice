import PropTypes from 'prop-types';

import { useTimer } from './hooks/useTimer';

type Props = {
  remmainingTime?: number;
};

const Timer: React.FC<Props> = ({ remmainingTime }) => {
  const [time, reset] = useTimer(remmainingTime);
  return (
    <>
      <div>{time}</div>
      <button onClick={reset}>Reset</button>
    </>
  );
};

Timer.propTypes = {
  remmainingTime: PropTypes.number,
};

export default Timer;
