import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Work from './component/Work';
import Contact from './component/Contact';

ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Route exact path={'/'} component={Home} />
    <Route path={'/about'} component={About} />
    <Route path={'/work'} component={Work} />
    <Route path={'/contact'} component={Contact} />
  </BrowserRouter>,
  document.getElementById('root'),
);
