import { BrowserRouter } from 'react-router-dom';

import './App.css';
import IndexRoutes from './routes/Index';

function App() {
  return (
    <>
      <BrowserRouter>
        <IndexRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
