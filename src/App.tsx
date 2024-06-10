import './App.css';
import ComponentA from './components/test_use_reducer/ComponentA';
import ComponentB from './components/test_use_reducer/ComponentB';
import Providers from './Providers';

function App() {
  return (
    <>
      <Providers>
        <ComponentA />
        <ComponentB />
      </Providers>
    </>
  );
}

export default App;
