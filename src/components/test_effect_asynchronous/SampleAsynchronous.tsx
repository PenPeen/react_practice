import { FC, useEffect, useState } from 'react';

import { requestPath, weatherConditionsMap } from './data';
import { Weather } from './domain/type';

const SampleAsynchronous: FC = () => {
  const [weather, setWeather] = useState<Weather>({} as never);

  useEffect(() => {
    const getTodayWeather = () => {
      fetch(requestPath)
        .then((data) => data.json())
        .then((json) => {
          setWeather((state) => ({
            ...state,
            code: weatherConditionsMap[json.current.weather_code],
            temperature: json.current.temperature_2m,
          }));
        });
    };

    void getTodayWeather();
  }, []);

  return (
    <>
      <h1>Tokyo Weather</h1>
      {weather.code ? (
        <>
          <div>{`東京の天気は${weather.code}です`}</div>
          <div>{`温度: ${weather.temperature}℃`}</div>
        </>
      ) : (
        'data loading...'
      )}
    </>
  );
};

export default SampleAsynchronous;
