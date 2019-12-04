import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from '../../Interceptor/Interceptor';
import { Link, withRouter } from 'react-router-dom';

import styles from './LineSearch.module.css';

class LineSearch extends Component {
  state = {
    productLines: [],
    chosen: 0,
    chosenName: ''
  };

  componentDidMount() {
    axios.get('http://localhost:8080/api/productLines')
      .then(response => {
        const datas = response['data']['_embedded']['productLines'];
        const lines = [];
        for (let data of datas) {
          lines.push({
            'productLineId': + data['_links']['self']['href'].replace("http://localhost:8080/api/productLines/", ""),
            'productLineName': data['productLineName']
          });
        }
        this.setState({
          productLines: lines
        });
      });
  }

  render() {
    return (
      <div className={styles.LineSearch}>
        <Autocomplete
          id="line-search"
          style={{ width: '50%', marginLeft: '20%' }}
          options={this.state.productLines}
          getOptionLabel={option => option['productLineName']}
          renderInput={params => (
            <TextField {...params} label="search..." variant="outlined" fullWidth />
          )}
          onChange={(event, value) => this.setState({ chosen: value['productLineId'], chosenName: value['productLineName'] })}
        />
        <Link to={location => (
          {
            ...location,
            pathname: '/productPage/' + this.state.chosen,
            query: this.state.chosenName
          }
        )}>
          <button style={{ marginTop: '15px' }}>Search</button>
        </Link>
      </div>
    );
  }

}

export default withRouter(LineSearch);
