import React from "react";
import { Provider } from "react-redux";
import "./App.css";
import store from "./redux/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Form from "./components/form";
import Show_Message from "./components/showMessage";
import Show_Users from "./components/showUsers";
import Manue from "./components/manue";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Manue></Manue>
          <Switch>
            <Route path="/SHOW_MESSAGE">
              <Show_Message />
            </Route>
            <Route path="/SHOW_USERS">
              <Show_Users />
            </Route>
            <Route path="/">
              <Form />
            </Route>
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
