import React from "react";
import "./App.css";
import MainPage from "./components/main/MainPage";
import Register from "./components/users/UserReg";
import Login from "./components/users/UserLogin";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route path="/" component={MainPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
