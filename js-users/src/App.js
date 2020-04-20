import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./containers/Home";
import Header from "./components/Header";
import AddUser from "./containers/AddUser";
import EditUser from "./containers/EditUser";
import { ToastContainer } from "react-toastify";
import "./assets/css/style.css";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <ToastContainer />
      <Header />
      <Switch>
        <Route path="/new" component={AddUser} />
        <Route path="/edit" component={EditUser} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
};
export default App;
