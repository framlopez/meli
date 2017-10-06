// Import Node Modules
import React, { Component } from "react";
import { render } from "react-dom";

// Import React Components
import Search from './Search.jsx';
import { Link } from "react-router-dom";

// Require Style Component
require('./AppHeader.scss');

class AppHeader extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header-app">
        <div className="container">
          <div className="header-logo">
            <Link to="/">
              <img src="./public/images/Logo_ML@2x.png.png" alt="Logo Mercado Libre" />
            </Link>
          </div>
          <Search />
        </div>
      </header>
    )
  }
}

export default AppHeader;
