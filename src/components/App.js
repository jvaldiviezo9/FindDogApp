import React from 'react';
import '../App.css';
import Header from './Header';
import Main from './Main';
import Description from "./Description";
import Elements from "./Elements";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer";
import WebApp from "./WebApp";

import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
  return (
  <>

    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Main />
          <Description />
          <Elements />
          <About />
        </Route>
        <Route path="/app">
          <WebApp />
        </Route>
      </Switch>
      <Contact />
      <Footer />

    </BrowserRouter>



  </>
  );
}

export default App;
