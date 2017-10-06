import React, { Component } from 'react';
import { render } from 'react-dom';

import ProductsListComponent from '../components/ProductsListComponent.jsx';

class HomeView extends Component {

  constructor (props) {
    super(props);
  }

  render() {
    return (
      <ProductsListComponent />
    )
  }
}

export default HomeView;
