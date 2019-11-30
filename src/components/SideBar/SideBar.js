import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import styles from './SideBar.module.css';

const SideBar = (props) => {

  const [value, setValue] = React.useState([2000, 10000]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.SideBar}>
      <div style={{ display: 'flex' }}>
        <p>Search: </p>
        <button>save</button>
        <button>clear</button>
      </div>
      <div className={styles.title}>Product Type</div>
      <div className={styles.para}>
        <div>Model year:</div>
        <input size='1' />
        {'-'}
        <input size='1' />
      </div>
      <div className={styles.title}>Technical Specifications</div>
      <div>
        <div>Airflow (CFM)</div>
        <div className={styles.para}>
          <input size='1' value={value[0]} onChange={(event)=>setValue([+event.target.value,value[1]])} />
          <Slider
            value={value}
            min={2000}
            max={10000}
            onChange={handleChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            getAriaValueText={valuetext}
          />
          <input size='1' value={value[1]} onChange={(event)=>setValue([value[0],+event.target.value])} />
        </div>
        <div>Max power (W)</div>
        <div></div>
        <div>Sound at max speed (dBA)</div>
        <div></div>
        <div>Fan sweep diameter (in)</div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default SideBar;

// slider
const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}`;
}
