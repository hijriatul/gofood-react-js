import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Counters from './component/counter';
import Counter from './component/counter-class';
import Data from './component/data-diri';
import Menu from './component/menu';
import Cards from './component/card';
import Home from './page/home';
import About from './page/about';
import ListMakanan from './page/list-makanan';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/List-Makanan">
          <ListMakanan />
        </Route>
        <Route path="/Counter-class">
          <Counter />
        </Route>
        <Route path="/Data-diri">
          <Data />
        </Route>
        <Route path="/Menu">
          <Menu />
        </Route>
        <Route path="/Card">
          <Cards />
        </Route>
        <Route path="/Counter">
          <Counters />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
