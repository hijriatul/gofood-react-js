import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Cards from './component/card';
import Home from './page/home';
import About from './page/about';
import ListMakanan from './page/makanan-indonesia';
import ListMakananFast from './page/fast-food';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/makanan-indonesia">
          <ListMakanan />
        </Route>
        <Route path="/fast-food">
          <ListMakananFast />
        </Route>
        <Route path="/card">
          <Cards />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
