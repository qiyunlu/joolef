import React, { Component } from 'react';
import axios from 'axios';

import HeadBar from '../../components/HeadBar/HeadBar';
import ProductDetail from '../../components/ProductDetail/ProductDetail';

class SummaryPage extends Component {

  state = {
    product: {}
  }

  componentDidMount() {

    let URL = 'http://localhost:8080/api/products';
    let productFk = this.props.match.params.productId;
    console.log(this.props);
    if(productFk) {
      URL += '/'+productFk;
    } else {
      URL += '/1';
    }

    axios.get(URL)
      .then(response => {
        const pt = {...response['data']};
        pt['productId'] = + productFk;
        this.setState({
          product: pt
        });
      });
  }

  render() {
    return (
      <div>
        <HeadBar />
        <ProductDetail product={this.state.product} />
      </div>
    );
  }

}

export default SummaryPage;
