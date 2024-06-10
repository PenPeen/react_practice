import './App.css';
import Parent from './components/test_use_context_1/Parent';
import Providers from './Providers';

function App() {
  return (
    <>
      <Providers>
        <Parent />
      </Providers>
    </>
  );
}

export default App;
