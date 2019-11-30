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

//   componentDidMount() {
//     axios.get('http://localhost:8080/api/productLines')
//       .then(response => {
//         const datas = response['data']['_embedded']['productLines'];
//         const lines = [];
//         for(let data of datas) {
//           lines.push({'productLineId': + data['_links']['self']['href'].replace("http://localhost:8080/api/productLines/", ""),
//                       'productLineName': data['productLineName']});
//         }
//         this.setState({
//           productLines: lines
//         });
//       });
//   }

  render() {
    return (
      <div>
        <HeadBar />
        <SideBar searchParas={this.state.searchParas}/>
        <Products />
      </div>
    );
  }

}

export default ProductPage;
