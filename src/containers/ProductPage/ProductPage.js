import React, { Component } from 'react';
import axios from 'axios';

import SideBar from '../../components/SideBar/SideBar';
import HeadBar from '../../components/HeadBar/HeadBar';
import Products from '../../components/Products/Products';

class ProductPage extends Component {

  state = {
    productLineFk: '',
    products: [],
    searchParas: {
      useType: '',
      application: '',
      mountingLocation: '',
      accessories: '',
      modelYearMin: '',
      modelYearMax: '',
      airflowMin: '',
      airflowMax: '',
      maxPowerMin: '',
      maxPowerMax: '',
      maxSoundMin: '',
      maxSoundMax: '',
      sweepDiameterMin: '',
      sweepDiameterMax: '',
      heightMin: '',
      heightMax: '',
      firmMin: '',
      firmMax: '',
      globalMin: '',
      globalMax: '',
      brand: ''
    }
  }

  componentDidMount() {

    let URL = 'http://localhost:8080/api/products';
    let productLineFk = this.props.match.params.productLineFk;
    if (productLineFk) {
      URL += '/search/findByProductLineFk?theFk=' + productLineFk;
    } else {
      productLineFk = '';
    }

    axios.get(URL)
      .then(response => {

        const datas = response['data']['_embedded']['products'];
        if (datas) {
          let pts = [];
          for (let data of datas) {
            let pt = { ...data };
            pt['productId'] = + data['_links']['self']['href'].replace("http://localhost:8080/api/products/", "");
            pts.push(pt);
          }
          this.setState({
            products: pts,
            productLineFk: productLineFk
          })

        }
      });
  }

  render() {

    return (
      <div>
        <HeadBar />
        <SideBar searchParas={this.state.searchParas} />
        <Products products={this.state.products} />
      </div>
    );
  }

}

export default ProductPage;
