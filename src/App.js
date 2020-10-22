import React from "react";
import "./styles/App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Sponsorship from "./components/Sponsorship";
import About from "./components/About";
import ScrollToTop from "./components/ScrollToTop";
import GalleryPage from "./components/GalleryPage";

function App() {
  return (
    <div className="app">
      <Router>
        <ScrollToTop>
          <Header />
          <Switch>
            <Route path="/gallery">
              <GalleryPage />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/sponsorship">
              <Sponsorship />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
