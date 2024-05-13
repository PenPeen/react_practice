import { useEffect, useRef, useState } from 'react';

const DEFAULT_TIME = 5;

export const useTimer = (
  remmainingTime = DEFAULT_TIME,
): [time: number, reset: () => void, stop: () => void] => {
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);
  const [time, setTime] = useState(remmainingTime);
  const reset = () => {
    setTime(remmainingTime);

    if (intervalIdRef.current !== null) {
      clearInterval(intervalIdRef.current);
    }

    intervalIdRef.current = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);
  };

  const stop = () => {
    if (intervalIdRef.current !== null) {
      clearInterval(intervalIdRef.current);
    }
    setTime(-1);
  };

  useEffect(() => {
    intervalIdRef.current = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);

    return () => {
      if (intervalIdRef.current !== null) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (time === 0) setTime(remmainingTime);
  }, [time, remmainingTime]);

  return [time, reset, stop];
};
