// Import Node Modules
import React, { Component } from 'react';
import { render } from 'react-dom';

// Require Style Component
require('./Search.scss');

class Search extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="search">
        <form className="flex" action="/items" method="get">
          <input name="search" placeholder="Nunca dejes de buscar" />
          <button className="flex">
            <img src="./public/images/ic_Search@2x.png.png" alt="" />
          </button>
        </form>
      </div>
    )
  }
}

export default Search;
