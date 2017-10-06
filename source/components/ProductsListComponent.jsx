// Import Node Modules
import React, { Component } from 'react';
import { render } from 'react-dom';

import ProductComponent from './ProductComponent.jsx';

require('./ProductsListComponent.scss');

class ProductsListComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [],
      breadcrumb: ""
    };
  }

  componentDidMount() {
    function getQueryParams(qs) {
      qs = qs.split('+').join(' ');

      var params = {},
          tokens,
          re = /[?&]?([^=]+)=([^&]*)/g;

      while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
      }

      return params;
    }

    var query = getQueryParams(window.location.search);

    if (query.search) {
      fetch('/api/items?q=' + query.search)
        .then(_data => _data.json())
        .then(_data => {
          console.log(_data);
          this.setState({ products: _data.products })
          this.setState({ breadcrumb: _data.breadcrumb })
        });
    }
  }

  render() {
    return (
      <div className="container overflow">
        <div className="breadcrumb flex flex-justify-start max-width">
          { this.state.breadcrumb }
        </div>
        <ul className="normalize-list listProduct">
          { this.state.products.map((_product) => <ProductComponent data={ _product } />) }
        </ul>
      </div>
    );
  }
}

export default ProductsListComponent;
