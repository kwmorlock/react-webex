import React from "react";
import "./App.css";
import MainPage from "./components/main/MainPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" component={MainPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
