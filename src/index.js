import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './component/Header';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Work from './component/Work';
import Contact from './component/Contact';
import Footer from './component/Footer';

ReactDOM.render(
  <BrowserRouter>
  {/*<Header /> */}
  <Navbar />
  <Route exact path = {'/'} component = {Home}/>
  <Route path = {'/about'} component = {About}/>
  <Route path = {'/work'} component = {Work}/>
  <Route path={'/contact'} component = {Contact}/>
  <Footer />
  </BrowserRouter>
  ,document.getElementById('root')
);
