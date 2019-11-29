import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import axios from 'axios';

class LineSearch extends Component {
  state = {
    productLines: []
  };

  componentDidMount() {
    axios.get('http://localhost:8080/api/productLines')
      .then(response => {
        const datas = response['data']['_embedded']['productLines'];
        const lines = [];
        for(let data of datas) {
          lines.push({'productLineId': + data['_links']['self']['href'].replace("http://localhost:8080/api/productLines/", ""),
                      'productLineName': data['productLineName']});
        }
        this.setState({
          productLines: lines
        });
      });
  }

  render() {
    return (
      <>
        <p>joole pic</p>
        <p>Building Product Selection Platform</p>
        <Autocomplete
          id="line-search"
          ref="line-search"
          options={this.state.productLines}
          getOptionLabel={option => option['productLineName']}
          style={{ width: 300 }}
          renderInput={params => (
            <TextField {...params} label="search..." variant="outlined" fullWidth />
          )}
        />
        <button onClick={() => console.log(document.getElementById('line-search').value)}>show</button>
      </>
    );
  }

}

export default LineSearch;
