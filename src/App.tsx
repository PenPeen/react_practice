import './App.css';
import SampleAsynchronous from './components/test_effect_asynchronous/SampleAsynchronous';
import Providers from './Providers';

function App() {
  return (
    <>
      <Providers>
        <SampleAsynchronous />
      </Providers>
    </>
  );
}

export default App;
