import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductListing from "./pages/ProductListing";
import Sidebar from "./components/Sidebar";
import "./App.css";
import ProductDetails from "./pages/ProductDetails";
import Support from "./pages/Support";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetails} />
          <Route path="/support" component={Support} />
          <Route path="/review" component={Reviews} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route>404 Not Found!</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
