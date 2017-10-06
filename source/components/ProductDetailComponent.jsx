import React, { Component } from 'react';
import { render } from 'react-dom';

require('./ProductDetailComponent.scss');

class ProductDetailComponent extends Component {

  constructor (props) {
    super(props);
    this.state = {
      item: '',
      breadcrumb: ''
    }
  }

  componentDidMount() {

    if (this.props.params.id) {
      fetch('/api/items/' + this.props.params.id)
        .then(_data => _data.json())
        .then(_data => {
          this.setState({ item: _data.product });
          this.setState({ breadcrumb: _data.breadcrumb });
        });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="breadcrumb flex flex-justify-start max-width">
          { this.state.breadcrumb }
        </div>
        <div className="container-product flex flex-column">
          <div className="detail-product">
            <div className="detail-product-info flex">
              <img className="detailProduct-image" src={ this.state.item.fullSizeImage } width="100%"/>
            </div>
            <div className="detail-product-content flex flex-column flex-align-start flex-justify-start max-width">
              <span className="detail-product-sold">{ (this.state.item.condition === 'new')?('Nuevo'):('Usado') } - { this.state.item.sold_quantity } vendidos</span>
              <h2 className="detail-product-title">{ this.state.item.title }</h2>
              <span className="detail-product-price"><span className="coin">$</span>{ this.state.item.price }</span>
              <button className="detail-product-button">Comprar</button>
            </div>
          </div>
          <div className="description-product">
            <h2>Descripción del producto</h2>
            <div className="description-text" contentEditable="true" role="textbox" dangerouslySetInnerHTML={{ __html: this.state.item.textDescription }}></div>
          </div>
        </div>
      </div>
    )
  }
}

export default ProductDetailComponent;
