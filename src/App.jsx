import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { AddEmployee } from "./components/AddEmployees";
import { EditEmployee } from "./components/EditEmployees";
import { EmployeeList } from "./components/EmployeeList";
import Home from "./components/Home";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={EmployeeList} exact />
          <Route path="/add" component={AddEmployee} exact />
          <Route path="/edit/:id" component={EditEmployee} exact />
        </Switch>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
