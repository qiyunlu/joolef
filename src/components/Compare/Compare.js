import React from 'react';
import Button from '@material-ui/core/Button';

import HeadBar from '../HeadBar/HeadBar';

const Compare = (props) => {

  var products = [];
  products = Object.values({ ...props.location.query });
  console.log(products);

  return (
    <>
      <HeadBar />
      <div style={{ margin: '20px', overflow: 'auto' }}>
        <p>Mechanical > HVAC Fans > Compare</p>

        <div style={{ display: 'flex' }}>
          <div>
            <div style={{ width: '300px', height: '120px', border: '1px solid white' }}></div>
            <div style={{ width: '300px', height: '30px', border: '1px solid grey' }}>DESCRIPTION</div>
            <div style={{ width: '300px', height: '30px', border: '1px solid lightgrey', backgroundColor: 'lightgrey' }}>Manufacturer</div>
            <div style={{ width: '300px', height: '30px', border: '1px solid lightgrey', backgroundColor: 'lightgrey' }}>Series</div>
            <div style={{ width: '300px', height: '30px', border: '1px solid lightgrey', backgroundColor: 'lightgrey' }}>Model</div>
            <div style={{ width: '300px', height: '30px', border: '1px solid grey' }}>TYPE</div>
            <div style={{ width: '300px', height: '30px', border: '1px solid lightgrey', backgroundColor: 'lightgrey' }}>Use Type</div>
            <div style={{ width: '300px', height: '30px', border: '1px solid lightgrey', backgroundColor: 'lightgrey' }}>Application</div>
            <div style={{ width: '300px', height: '30px', border: '1px solid lightgrey', backgroundColor: 'lightgrey' }}>Mounting Location</div>
            <div style={{ width: '300px', height: '30px', border: '1px solid lightgrey', backgroundColor: 'lightgrey' }}>Accessories</div>
            <div style={{ width: '300px', height: '30px', border: '1px solid lightgrey', backgroundColor: 'lightgrey' }}>Model year</div>
            <div style={{ width: '300px', height: '30px', border: '1px solid grey' }}>TECHNICAL SPECIFICATIONS</div>
            <div style={{ width: '300px', height: '30px', border: '1px solid lightgrey', backgroundColor: 'lightgrey' }}>Airflow (CFM)</div>
            <div style={{ width: '300px', height: '30px', border: '1px solid lightgrey', backgroundColor: 'lightgrey' }}>Power (W)</div>
            <div style={{ width: '300px', height: '30px', border: '1px solid lightgrey', backgroundColor: 'lightgrey' }}>Operating voltage (VAC)</div>
            <div style={{ width: '300px', height: '30px', border: '1px solid lightgrey', backgroundColor: 'lightgrey' }}>Fan speed (RPM)</div>
          </div>

          <div style={{ display: 'flex' }}>
            {products.map(product => (
              <div>
                <div style={{ width: '300px', height: '120px', border: '1px solid grey' }}>
                  <Button variant="contained" color="primary">
                    Add to
                  </Button>
                  <span>{"Verified " + product.productModelVerifiedTime}</span>
                  <div style={{ textAlign: 'center' }}><img src={process.env.PUBLIC_URL + product['productPicture']} alt='' style={{ width: '150px' }} /></div>
                </div>
                <div style={{ width: '300px', height: '30px', border: '1px solid grey' }}></div>
                <div style={{ width: '300px', height: '30px', border: '1px solid lightgrey', textAlign: 'center' }}>{product['productManufacturer']}</div>
                <div style={{ width: '300px', height: '30px', border: '1px solid lightgrey', textAlign: 'center' }}>{product['productSeries']}</div>
                <div style={{ width: '300px', height: '30px', border: '1px solid lightgrey', textAlign: 'center' }}>{product['productModel']}</div>
                <div style={{ width: '300px', height: '30px', border: '1px solid grey' }}></div>
                <div style={{ width: '300px', height: '30px', border: '1px solid lightgrey', textAlign: 'center' }}>{product['productUseType']}</div>
                <div style={{ width: '300px', height: '30px', border: '1px solid lightgrey', textAlign: 'center' }}>{product['productApplication']}</div>
                <div style={{ width: '300px', height: '30px', border: '1px solid lightgrey', textAlign: 'center' }}>{product['productMountingLocation']}</div>
                <div style={{ width: '300px', height: '30px', border: '1px solid lightgrey', textAlign: 'center' }}>{product['productMountingLocation']}</div>
                <div style={{ width: '300px', height: '30px', border: '1px solid lightgrey', textAlign: 'center' }}>{product['productModelYear']}</div>
                <div style={{ width: '300px', height: '30px', border: '1px solid grey' }}></div>
                <div style={{ width: '300px', height: '30px', border: '1px solid lightgrey', textAlign: 'center' }}>{product['productAirflow']}</div>
                <div style={{ width: '300px', height: '30px', border: '1px solid lightgrey', textAlign: 'center', display: 'flex' }}>
                  <div style={{ width: '25%', height: '31px', backgroundColor: 'lightgrey' }}>Min</div>
                  <div style={{ width: '25%', height: '31px' }}>{product['productPowerMin']}</div>
                  <div style={{ width: '25%', height: '31px', backgroundColor: 'lightgrey' }}>Max</div>
                  <div style={{ width: '25%', height: '31px' }}>{product['productPowerMax']}</div>
                </div>
                <div style={{ width: '300px', height: '30px', border: '1px solid lightgrey', textAlign: 'center', display: 'flex' }}>
                  <div style={{ width: '25%', height: '31px', backgroundColor: 'lightgrey' }}>Min</div>
                  <div style={{ width: '25%', height: '31px' }}>{product['productOperatingVoltageMin']}</div>
                  <div style={{ width: '25%', height: '31px', backgroundColor: 'lightgrey' }}>Max</div>
                  <div style={{ width: '25%', height: '31px' }}>{product['productOperatingVoltageMax']}</div>
                </div>
                <div style={{ width: '300px', height: '30px', border: '1px solid lightgrey', textAlign: 'center', display: 'flex' }}>
                  <div style={{ width: '25%', height: '31px', backgroundColor: 'lightgrey' }}>Min</div>
                  <div style={{ width: '25%', height: '31px' }}>{product['productFanSpeedMin']}</div>
                  <div style={{ width: '25%', height: '31px', backgroundColor: 'lightgrey' }}>Max</div>
                  <div style={{ width: '25%', height: '31px' }}>{product['productFanSpeedMax']}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
}

export default Compare;
