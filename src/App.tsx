import './App.css';
import Parent from './components/use_context_and_use_reducer/Parent';
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
