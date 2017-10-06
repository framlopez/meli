// Import Node Modules
import React, { Component } from "react";
import { render } from "react-dom";

// Import React Components
import AppHeader from "./AppHeader.jsx";

// Require Style Component
require("./App.scss");

class App extends Component {

  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>
        <AppHeader />
        <div className="app-content">
          { this.props.children }
        </div>
      </div>
    )
  }
}

export default App;
