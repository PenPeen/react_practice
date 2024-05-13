import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { getPrimes } from '@/utils/prime';

const DEFAULT_TIME = 5;

export const useTimer = (
  remmainingTime = DEFAULT_TIME,
): [time: number, primes: number[], reset: () => void, stop: () => void] => {
  const primes = useMemo(() => getPrimes(remmainingTime), [remmainingTime]);

  const intervalIdRef = useRef<NodeJS.Timeout | null>(null);
  const [time, setTime] = useState(remmainingTime);
  const tick = () => {
    intervalIdRef.current = setInterval(() => {
      setTime((time) => time - 1);
    }, 1000);
  };

  const reset = useCallback(() => {
    setTime(remmainingTime);

    if (intervalIdRef.current !== null) {
      clearInterval(intervalIdRef.current);
    }

    tick();
  }, [remmainingTime]);

  const stop = () => {
    if (intervalIdRef.current !== null) {
      clearInterval(intervalIdRef.current);
    }
    setTime(-1);
  };

  useEffect(() => {
    reset();

    return () => {
      if (intervalIdRef.current !== null) {
        clearInterval(intervalIdRef.current);
      }
    };
  }, [reset]);

  useEffect(() => {
    if (time === 0) setTime(remmainingTime);
  }, [time, remmainingTime]);

  return [time, primes, reset, stop];
};
