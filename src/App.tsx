import './App.css';
import Providers from './Providers';
import IndexRoutes from './routes/IndexRoutes';

function App() {
  return (
    <>
      <Providers>
        <IndexRoutes />
      </Providers>
    </>
  );
}

export default App;
