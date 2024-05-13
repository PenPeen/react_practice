import { useEffect, useState } from 'react';

const DEFAULT_TIME = 5;

export const useTimer = (
  remmainingTime = DEFAULT_TIME,
): [time: number, reset: () => void] => {
  const [time, setTime] = useState(remmainingTime);
  const reset = () => {
    setTime(remmainingTime);
  };

  useEffect(() => {
    const id = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (time === 0) setTime(remmainingTime);
  }, [time, remmainingTime]);

  return [time, reset];
};
