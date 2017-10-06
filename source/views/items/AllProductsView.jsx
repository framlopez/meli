import React, { Component } from 'react';
import { render } from 'react-dom';

import ProductsListComponent from '../../components/ProductsListComponent.jsx';

class AllProductsView extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ProductsListComponent />
    )
  }
}

export default AllProductsView;
