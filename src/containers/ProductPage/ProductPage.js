import React, { Component } from 'react';
import axios from 'axios';

import SideBar from '../../components/SideBar/SideBar';
import HeadBar from '../../components/HeadBar/HeadBar';
import Products from '../../components/Products/Products';

class ProductPage extends Component {

  // state
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

  // filter methods
  modelYearFilter(products, min, max) {
    let pts = [...products];
    let ans = [];
    for(let pt of pts) {
      if(min != '' && pt.productModelYear < (+min)) continue;
      if(max != '' && pt.productModelYear > (+max)) continue;
      ans.push(pt);
    }
    return ans;
  }
  airflowFilter(products, min, max) {
    let pts = [...products];
    let ans = [];
    for(let pt of pts) {
      if(min != '' && pt.productAirflow < (+min)) continue;
      if(max != '' && pt.productAirflow > (+max)) continue;
      ans.push(pt);
    }
    return ans;
  }
  maxPowerFilter(products, min, max) {
    let pts = [...products];
    let ans = [];
    for(let pt of pts) {
      if(min != '' && pt.productPowerMax < (+min)) continue;
      if(max != '' && pt.productPowerMax > (+max)) continue;
      ans.push(pt);
    }
    return ans;
  }
  maxSoundFilter(products, min, max) {
    let pts = [...products];
    let ans = [];
    for(let pt of pts) {
      if(min != '' && pt.productMaxSound < (+min)) continue;
      if(max != '' && pt.productMaxSound > (+max)) continue;
      ans.push(pt);
    }
    return ans;
  }
  sweepDiameterFilter(products, min, max) {
    let pts = [...products];
    let ans = [];
    for(let pt of pts) {
      if(min != '' && pt.productSweepDiameter < (+min)) continue;
      if(max != '' && pt.productSweepDiameter > (+max)) continue;
      ans.push(pt);
    }
    return ans;
  }
  firmFilter(products, min, max) {
    let pts = [...products];
    let ans = [];
    for(let pt of pts) {
      if(min != '' && pt.productFirm < (+min)) continue;
      if(max != '' && pt.productFirm > (+max)) continue;
      ans.push(pt);
    }
    return ans;
  }
  globalFilter(products, min, max) {
    let pts = [...products];
    let ans = [];
    for(let pt of pts) {
      if(min != '' && pt.productGlobal < (+min)) continue;
      if(max != '' && pt.productGlobal > (+max)) continue;
      ans.push(pt);
    }
    return ans;
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
          // adding id
          for (let data of datas) {
            let pt = { ...data };
            pt['productId'] = + data['_links']['self']['href'].replace("http://localhost:8080/api/products/", "");
            pts.push(pt);
          }
          // start filtering
          pts = this.modelYearFilter(pts, this.state.searchParas.modelYearMin, this.state.searchParas.modelYearMax);
          pts = this.airflowFilter(pts, this.state.searchParas.airflowMin, this.state.searchParas.airflowMax);
          pts = this.maxPowerFilter(pts, this.state.searchParas.maxPowerMin, this.state.searchParas.maxPowerMax);
          pts = this.maxSoundFilter(pts, this.state.searchParas.maxSoundMin, this.state.searchParas.maxSoundMax);
          pts = this.sweepDiameterFilter(pts, this.state.searchParas.sweepDiameterMin, this.state.searchParas.sweepDiameterMax);
          pts = this.firmFilter(pts, this.state.searchParas.firmMin, this.state.searchParas.firmMax);
          pts = this.globalFilter(pts, this.state.searchParas.globalMin, this.state.searchParas.globalMax);

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
        <SideBar searchParas={this.state.searchParas} setState={this.setState}/>
        <Products products={this.state.products} />
      </div>
    );
  }

}

export default ProductPage;
