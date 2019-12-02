import React from 'react';
import Button from '@material-ui/core/Button';

import styles from './ProductDetail.module.css';
import TableLine01 from './TableLine01/TableLine01';
import TableLine02 from './TableLine02/TableLine02';

const ProductDetail = (props) => {

  const product = { ...props.product };  

  return (
    <div>
      <div>{'Mechanical > HVAC Fans > ' + product.productModel}</div>
      <div style={{ display: 'flex', border: '1px solid lightgrey', height: '50px' }}>
        <div><img src={process.env.PUBLIC_URL + product['productPicture']} alt='' style={{ width: '100px' }} /></div>
        <div>{product.productManufacturer + ' / ' + product.productSeries + ' / ' + product.productModel}</div>
        <div style={{ color: 'red' }}>{'Past specifications: ' + product.productFirm + ' firm / ' + product.productGlobal + ' global'}</div>
        <div><Button variant="contained" color="primary">Add to</Button></div>
      </div>
      <div style={{ border: '1px solid lightgrey' }}>
        <Button onClick={''} style={{ border: '1px solid lightgrey' }}>Product Summary</Button>
        <Button onClick={''} style={{ border: '1px solid lightgrey' }}>Product Detail</Button>
        <Button onClick={''} style={{ border: '1px solid lightgrey' }}>Product Documentation</Button>
        <Button onClick={''} style={{ border: '1px solid lightgrey' }}>Contact</Button>
      </div>

      <div className={styles.detailTable}>

        <div className={styles.title}>Product Summary</div>
        <div className={styles.oneLine}>
          <div style={{ width: '50%' }}>
            <div className={styles.subTitle}>DESCRIPTION</div>
            <TableLine01 name='Manufacturer' value={product.productManufacturer} />
            <TableLine01 name='Series' value={product.productSeries} />
            <TableLine01 name='Model' value={product.productModel} />
            <div className={styles.subTitle}>TYPE</div>
            <TableLine01 name='Use Type' value={product.productUseType} />
            <TableLine01 name='Application' value={product.productApplication} />
            <TableLine01 name='Mounting Location' value={product.productMountingLocation} />
            <TableLine01 name='Accessories' value={product.productAccessories} />
            <TableLine01 name='Model year' value={product.productModelYear} />
          </div>
          <div style={{ width: '50%' }}>
            <div className={styles.subTitle}>TECHNICAL SPECIFICATIONS</div>
            <TableLine01 name='Airflow (CFM)' value={product.productAirflow} />
            <TableLine02 name='Power (W)' value1={product.productPowerMin} value2={product.productPowerMax} />
            <TableLine02 name='Operating voltage (VAC)' value1={product.productOperatingVoltageMin} value2={product.productOperatingVoltageMax} />
            <TableLine02 name='Fan speed (RPM)' value1={product.productFanSpeedMin} value2={product.productFanSpeedMax} />
            <TableLine01 name='Number of fan speeds' value={product.productFanSpeedNumber} />
            <TableLine01 name='Sound at max speed (dBA)' value={product.productMaxSound} />
            <TableLine01 name='Fan sweep diameter (in)' value={product.productSweepDiameter} />
            <TableLine02 name='Height (in)' value1={product.productHeightMin} value2={product.productHeightMax} />
            <TableLine01 name='Weight (lbs)' value={product.productWeight} />
          </div>
        </div>
        <div className={styles.title}>Product Details</div>
        <div className={styles.title}>Product Documentation</div>
        <div className={styles.title}>Contact</div>
      </div>

    </div>
  );
}

export default ProductDetail;
