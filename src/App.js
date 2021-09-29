import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SearchScreen from './screens/SearchScreen';
import SearchResultsScreen from './screens/SearchResultsScreen'; 
import DetailsScreen from './screens/DetailsScreen';

function goToSearch() {
  window.location.href = '/';
}

function App() {
  return (
    <div id="app">
      <h1 id="title" onClick={goToSearch.bind(this)}>Animal Awareness</h1>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <SearchScreen />
          </Route>
          <Route exact path="/results">
            <SearchResultsScreen />
          </Route>
          <Route exact path="/details">
            <DetailsScreen />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
