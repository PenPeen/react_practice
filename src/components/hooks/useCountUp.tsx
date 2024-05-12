import { useEffect, useRef, useState } from 'react';

export const useCountUp = (): [number, () => void, () => void] => {
  const [time, setTime] = useState<number>(0);
  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);
  const setTimer = () => {
    if (intervalIdRef.current !== null) {
      clearInterval(intervalIdRef.current);
    }

    intervalIdRef.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  };

  const reset = () => {
    setTime(0);
    setTimer();
  };

  const stop = () => {
    setTime(-1);
    if (intervalIdRef.current) {
      clearInterval(intervalIdRef.current);
      intervalIdRef.current = null;
    }
  };

  useEffect(() => {
    setTimer();

    return () => {
      if (intervalIdRef.current) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, []);

  return [time, reset, stop];
};
