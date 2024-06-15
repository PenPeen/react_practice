import { useRef } from 'react';

const TestFocus: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleButtonClick = () => {
    if (inputRef.current !== null) {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <input ref={inputRef}></input>
      <button onClick={handleButtonClick}>Focus</button>
    </>
  );
};

export default TestFocus;
