import React, { Component } from 'react';
import { render } from 'react-dom';

import ProductsListComponent from '../../components/ProductsListComponent.jsx';
console.log('all');
class AllProductsView extends Component {

  render() {
    return (
      <ProductsListComponent />
    )
  }
}

export default AllProductsView;
