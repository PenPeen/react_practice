import { Suspense } from 'react';

const Sample20240813: React.FC = () => {
  function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const AlwaysSuspend: React.FC = () => {
    throw sleep(1000);
  };

  return (
    <div className="text-center">
      <h1 className="text-2xl">React App!</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <AlwaysSuspend />
      </Suspense>
    </div>
  );
};

export default Sample20240813;
