import React, { Component } from 'react';
import axios from '../../Interceptor/Interceptor';

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

  // side bar funcs
  updateSearchParas = (useTypeValue, applicationValue, mountingLocationValue, accessoriesValue,
    modelYearValue, airflowValue, maxPowerValue, maxSoundValue, sweepDiameterValue,
    heightValue, firmValue, globalValue, brandValue) => {
    let newParas = {
      useType: useTypeValue,
      application: applicationValue,
      mountingLocation: mountingLocationValue,
      accessories: accessoriesValue,
      modelYearMin: modelYearValue[0],
      modelYearMax: modelYearValue[1],
      airflowMin: airflowValue[0],
      airflowMax: airflowValue[1],
      maxPowerMin: maxPowerValue[0],
      maxPowerMax: maxPowerValue[1],
      maxSoundMin: maxSoundValue[0],
      maxSoundMax: maxSoundValue[1],
      sweepDiameterMin: sweepDiameterValue[0],
      sweepDiameterMax: sweepDiameterValue[1],
      heightMin: heightValue[0],
      heightMax: heightValue[1],
      firmMin: firmValue[0],
      firmMax: firmValue[1],
      globalMin: globalValue[0],
      globalMax: globalValue[1],
      brand: brandValue
    };
    this.setState({ searchParas: newParas });
  }
  clearSearchParas = () => {
    let initParas = {
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
    };
    this.setState({ searchParas: initParas });
  }

  // filter methods
  modelYearFilter(products, min, max) {
    let pts = [...products];
    let ans = [];
    for (let pt of pts) {
      if (min !== '' && pt.productModelYear < (+min)) continue;
      if (max !== '' && pt.productModelYear > (+max)) continue;
      ans.push(pt);
    }
    return ans;
  }
  airflowFilter(products, min, max) {
    let pts = [...products];
    let ans = [];
    for (let pt of pts) {
      if (min !== '' && pt.productAirflow < (+min)) continue;
      if (max !== '' && pt.productAirflow > (+max)) continue;
      ans.push(pt);
    }
    return ans;
  }
  maxPowerFilter(products, min, max) {
    let pts = [...products];
    let ans = [];
    for (let pt of pts) {
      if (min !== '' && pt.productPowerMax < (+min)) continue;
      if (max !== '' && pt.productPowerMax > (+max)) continue;
      ans.push(pt);
    }
    return ans;
  }
  maxSoundFilter(products, min, max) {
    let pts = [...products];
    let ans = [];
    for (let pt of pts) {
      if (min !== '' && pt.productMaxSound < (+min)) continue;
      if (max !== '' && pt.productMaxSound > (+max)) continue;
      ans.push(pt);
    }
    return ans;
  }
  sweepDiameterFilter(products, min, max) {
    let pts = [...products];
    let ans = [];
    for (let pt of pts) {
      if (min !== '' && pt.productSweepDiameter < (+min)) continue;
      if (max !== '' && pt.productSweepDiameter > (+max)) continue;
      ans.push(pt);
    }
    return ans;
  }
  firmFilter(products, min, max) {
    let pts = [...products];
    let ans = [];
    for (let pt of pts) {
      if (min !== '' && pt.productFirm < (+min)) continue;
      if (max !== '' && pt.productFirm > (+max)) continue;
      ans.push(pt);
    }
    return ans;
  }
  globalFilter(products, min, max) {
    let pts = [...products];
    let ans = [];
    for (let pt of pts) {
      if (min !== '' && pt.productGlobal < (+min)) continue;
      if (max !== '' && pt.productGlobal > (+max)) continue;
      ans.push(pt);
    }
    return ans;
  }


  componentDidMount() {

    let URL = 'http://localhost:8080/api/products';
    console.log(this.props);
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
          this.setState({
            products: pts,
            productLineFk: productLineFk
          })

        }
      });
  }

  render() {
    
    // start filtering
    var pts = [...this.state.products];
    var searchParas = { ...this.state.searchParas };
    pts = this.modelYearFilter(pts, searchParas.modelYearMin, searchParas.modelYearMax);
    pts = this.airflowFilter(pts, searchParas.airflowMin, searchParas.airflowMax);
    pts = this.maxPowerFilter(pts, searchParas.maxPowerMin, searchParas.maxPowerMax);
    pts = this.maxSoundFilter(pts, searchParas.maxSoundMin, searchParas.maxSoundMax);
    pts = this.sweepDiameterFilter(pts, searchParas.sweepDiameterMin, searchParas.sweepDiameterMax);
    pts = this.firmFilter(pts, searchParas.firmMin, searchParas.firmMax);
    pts = this.globalFilter(pts, searchParas.globalMin, searchParas.globalMax);
    return (
      <div>
        <HeadBar />
        <SideBar
          searchParas={this.state.searchParas}
          updateSearchParas={this.updateSearchParas}
          clearSearchParas={this.clearSearchParas}
        />
        <Products products={pts} url={this.props.location.query} />
      </div>
    );
  }

}

export default ProductPage;
