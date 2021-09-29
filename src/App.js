import './App.css';

import Related from './components/related';

function App() {
  return (
    <div className="App">
      <br></br>
      <Related type={"test"} related={[1,2,3,4,5]} />
    </div>
  );
}

export default App;
