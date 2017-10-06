// Import Node Modules
import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";

// Import React Components
import App from "../components/App.jsx";

class AppRoutes extends Component {

  constructor (props) {
    super(props);
  }

  render() {
    return (
      <App>
        <Switch>
          <Route exact path="/items/:id" component={ require("../views/items/OnlyProductView.jsx").default } />
          <Route exact path="/items" component={ require("../views/items/AllProductsView.jsx").default } />
          <Route exact path="/" component={ require("../views/HomeView.jsx").default } />
          <Route component={ require("../views/errors/Error.jsx").default } />
        </Switch>
      </App>
    )
  }
}

export default AppRoutes;
