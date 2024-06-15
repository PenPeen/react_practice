import styled from 'styled-components';

import { useCountUp } from '../hooks/useCountUp';

const Button = styled.button`
  padding: 8px 16px;
  margin: 8px;
  font-size: 16px;
  border-radius: 4px;
  cursor: pointer;
  border: none;
  min-width: 100px;
`;

const ResetButton = styled(Button)`
  background-color: pink;
`;

const StopButton = styled(Button)`
  background-color: red;
  color: white;
`;

const CountUp: React.FC = () => {
  const [time, reset, stop] = useCountUp();

  return (
    <div>
      <h1>CountUp</h1>
      <div>{time === -1 ? '中止' : `count is ${time}`}</div>
      <div>
        <ResetButton onClick={reset}>リセット</ResetButton>
      </div>
      <div>
        <StopButton onClick={stop}>停止</StopButton>
      </div>
    </div>
  );
};

export default CountUp;
