import React from "react";
import {BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom";
import Order from "../componets/Order";
import Aboutus from "../componets/Aboutus";
import History from "../componets/History";
import Home from "../componets/Home"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Sidebar}  from "../componets/Slidebar";

import '../css/Dashboard.css'

export function Routing() {
  return (
    <div>
      <Router>
      <Sidebar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/order" component={Order} />
          <Route path="/history" component={History} />
          <Route path="/aboutus" component={Aboutus} />
        </Switch>
      </Router>
    </div>
  )
}
