import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.js';

const HatsPage = () => (
 <div>
  <h1>HATS PAGE</h1>
 </div>
);

function App() {
 return (
  <div className="App">
   <Switch>
    <Route exact path="/" component={Homepage} />
    <Route path="/hats" component={HatsPage} />
    <Route path="/shop" component={ShopPage} />
   </Switch>
  </div>
 );
}

export default App;
