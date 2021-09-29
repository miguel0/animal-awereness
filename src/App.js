import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SearchScreen from './screens/SearchScreen';
import AnimalScreen from './screens/AnimalScreen';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <SearchScreen />
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
