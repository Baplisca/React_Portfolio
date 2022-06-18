import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './component/Navbar.jsx';
import About from './component/About';
import Work from './component/Work';
import Footer from './component/Footer.js';

ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path={'/'} component={About} />
      <Route path={'/work'} component={Work} />
    </Switch>
    <Footer />
  </BrowserRouter>,
  document.getElementById('root'),
);
