import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';

import styles from './Products.module.css';

const Products = (props) => {

  const [checkedState, setCheckedState] = React.useState(new Set());
  const handleCheckedChange = (productId) => {
    if (checkedState.has(productId)) {
      let _cs = new Set(checkedState);
      _cs.delete(productId);
      setCheckedState(_cs);
    } else {
      let _cs = new Set(checkedState);
      _cs.add(productId);
      setCheckedState(_cs);
    }
  }

  return (

    <div className={styles.Products}>
      <div>Mechanical > HVAC Fans</div>
      <GridList cellHeight={450} cols={4}>
        {props.products.map(product => (

          <GridListTile key={product.productId} cols={1}>
            <Card className={styles.card}>
              <div style={{ fontSize: 10 }}>{"Verified " + product.productModelVerifiedTime}</div>
              <Link to={'/SummaryPage/'+product.productId}>
                <CardMedia
                  style={{ paddingTop: '30%' }}
                  image={process.env.PUBLIC_URL+product.productPicture}
                />
              </Link>
              <CardContent>
                <Typography style={{ textAlign: 'center' }}>
                  <div>{product.productManufacturer}</div>
                  <div>{product.productSeries + ' Series'}</div>
                  <div>{product.productModel}</div>
                </Typography>
                <Typography style={{ textAlign: 'center', backgroundColor: 'lightgray', fontSize: 12 }}>
                  <div>{product.productAirflow}</div>
                  <div>{product.productPowerMax + ' W at max speed'}</div>
                  <div>{product.productMaxSound + ' dBA at max speed'}</div>
                  <div>{product.productSweepDiameter + "'' fan sweep diameter"}</div>
                </Typography>
                <Typography style={{ textAlign: 'center', fontSize: 12, color: 'red' }}>
                  <div>Past specifications:</div>
                  <div>{product.productFirm + ' firm / ' + product.productGlobal + ' global'}</div>
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <Checkbox
                  color="default"
                  onChange={() => handleCheckedChange(product.productId)}
                />
                <div>compare</div>
                <Button variant="contained" color="primary">
                  Add to
                </Button>
              </CardActions>
            </Card>
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}

export default Products;
