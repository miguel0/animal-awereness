import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SearchScreen from './screens/SearchScreen';
import SearchResultsScreen from './screens/SearchResultsScreen'; 
import AnimalScreen from './screens/AnimalScreen';

function App() {
  return (
    <div id="app">
      <h1 id="title">Animal Awareness</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <SearchScreen />
          </Route>
          <Route exact path="/results">
            <SearchResultsScreen />
          </Route>
          <Route exact path="/animal">
            <AnimalScreen />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
