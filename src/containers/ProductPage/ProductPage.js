import React, { Component } from 'react';
import axios from 'axios';

import SideBar from '../../components/SideBar/SideBar';
import HeadBar from '../../components/HeadBar/HeadBar';
import Products from '../../components/Products/Products';

class ProductPage extends Component {
  state = {
    products: [],
    searchParas: {
      useType: '',
      application: '',
      mountingLocation: '',
      accessories: '',
      modelVerifiedTime: '',
      airflow: '',
      maxPower: '',
      maxSound: '',
      sweepDiameter: '',
      height: '',
      firm: '',
      global: '',
      brand: ''
    }
  };

  componentDidMount() {
    axios.get('http://localhost:8080/api/products')
      .then(response => {
        const datas = response['data']['_embedded']['products'];
        const pts = [];
        for(let data of datas) {
          let pt = {...data};
          pt['productId'] = + data['_links']['self']['href'].replace("http://localhost:8080/api/products/", "");
          pts.push(pt);
        }
        this.setState({
          products: pts
        });
      });
  }

  render() {
    return (
      <div>
        <HeadBar />
        <SideBar searchParas={this.state.searchParas}/>
        <Products products={this.state.products}/>
        <div>{console.log(this.state.products)}</div>
      </div>
    );
  }

}

export default ProductPage;
