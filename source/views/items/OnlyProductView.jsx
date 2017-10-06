import React, { Component } from 'react';
import { render } from 'react-dom';
import ProductDetailComponent from '../../components/ProductDetailComponent.jsx';

class OnlyProductView extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ProductDetailComponent params={ this.props.match.params } />
      </div>
    )
  }
}

export default OnlyProductView;
