import './App.css';
import Test from './components/sample/Test0810';
import Providers from './Providers';

function App() {
  return (
    <>
      <Providers>
        <Test name="React太郎">
          <div>childrenとして渡されたdiv要素</div>
        </Test>
      </Providers>
    </>
  );
}

export default App;
