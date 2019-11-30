import React from 'react';
import Slider from '@material-ui/core/Slider';
import styles from './SideBar.module.css';

const SideBar = (props) => {
  // state
  const [airflowValue, setAirflowValue] = React.useState([2000, 10000]);
  const handleAirflowChange = (event, newValue) => {
    setAirflowValue(newValue);
  };
  const [maxPowerValue, setMaxPowerValue] = React.useState([0, 100]);
  const handleMaxPowerChange = (event, newValue) => {
    setMaxPowerValue(newValue);
  };
  const [maxSoundValue, setMaxSoundValue] = React.useState([0, 100]);
  const handleMaxSoundChange = (event, newValue) => {
    setMaxSoundValue(newValue);
  };
  const [sweepDiameterValue, setSweepDiameterValue] = React.useState([0, 100]);
  const handleSweepDiameterChange = (event, newValue) => {
    setSweepDiameterValue(newValue);
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
          <input size='1' value={airflowValue[0]} onChange={(event)=>setAirflowValue([+event.target.value,airflowValue[1]])} />
          <Slider
            value={airflowValue}
            min={2000}
            max={10000}
            onChange={handleAirflowChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            getAriaValueText={valuetext}
          />
          <input size='1' value={airflowValue[1]} onChange={(event)=>setAirflowValue([airflowValue[0],+event.target.value])} />
        </div>
        <div>Max power (W)</div>
        <div className={styles.para}>
          <input size='1' value={maxPowerValue[0]} onChange={(event)=>setMaxPowerValue([+event.target.value,maxPowerValue[1]])} />
          <Slider
            value={maxPowerValue}
            min={0}
            max={100}
            onChange={handleMaxPowerChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            getAriaValueText={valuetext}
          />
          <input size='1' value={maxPowerValue[1]} onChange={(event)=>setMaxPowerValue([maxPowerValue[0],+event.target.value])} />
        </div>
        <div>Sound at max speed (dBA)</div>
        <div className={styles.para}>
          <input size='1' value={maxSoundValue[0]} onChange={(event)=>setMaxSoundValue([+event.target.value,maxSoundValue[1]])} />
          <Slider
            value={maxSoundValue}
            min={0}
            max={100}
            onChange={handleMaxSoundChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            getAriaValueText={valuetext}
          />
          <input size='1' value={maxSoundValue[1]} onChange={(event)=>setMaxSoundValue([maxSoundValue[0],+event.target.value])} />
        </div>
        <div>Fan sweep diameter (in)</div>
        <div className={styles.para}>
          <input size='1' value={sweepDiameterValue[0]} onChange={(event)=>setSweepDiameterValue([+event.target.value,sweepDiameterValue[1]])} />
          <Slider
            value={sweepDiameterValue}
            min={0}
            max={100}
            onChange={handleSweepDiameterChange}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            getAriaValueText={valuetext}
          />
          <input size='1' value={sweepDiameterValue[1]} onChange={(event)=>setSweepDiameterValue([sweepDiameterValue[0],+event.target.value])} />
        </div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default SideBar;

// slider
function valuetext(value) {
  return `${value}`;
}
