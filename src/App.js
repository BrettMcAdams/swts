import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Sponsorship from './components/Sponsorship'

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Switch>
          <Route path='/sponsorship'>
            <Sponsorship />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
