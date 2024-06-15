import { useRef } from 'react';

const SampleUseRef = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const outPut = () => console.log(inputRef.current);
  const addA = () => {
    if (inputRef.current !== null)
      inputRef.current.value = inputRef.current.value + 'a';
  };

  return (
    <>
      <input type="text" ref={inputRef} defaultValue={'a'} />
      <div>
        <button onClick={outPut}>output</button>
        <button onClick={addA}>addA</button>
      </div>
    </>
  );
};

export default SampleUseRef;
