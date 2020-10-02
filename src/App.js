import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Home from "./pages/home";
import PresentPage from "./pages/present";
import Loader from "./components/loader";

function App() {
  return (
    <>
      <Router>
        <Loader />
        <Sidebar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/present" component={PresentPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
