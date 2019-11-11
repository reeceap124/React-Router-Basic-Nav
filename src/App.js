import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import {Route} from 'react-router-dom';

const App = () => (
  <div>
    <Navigation />
    <Route exact path='/' component={Home} /> //path defines when the component is to be displayed
    <Route path='/about' component={About} />
    <Route path='/contact' component={Contact} />
  </div>
  //seems to need to be inside the div tag
);

export default App;
