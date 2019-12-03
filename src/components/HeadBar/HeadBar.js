import React from 'react';

import styles from './HeadBar.module.css';
import LineSearch from '../../containers/LineSearch/LineSearch'

const HeadBar = () => {
  return (
    <div className={styles.HeadBar}>
      <div className={styles.left} style={{marginTop:'20px'}}><img src={process.env.PUBLIC_URL + '/joole.png'} alt='' style={{ width: '100px' }} /></div>
      <div className={styles.middle} style={{ marginTop: '15px', width: '80%' }}><LineSearch /></div>
      <div className={styles.right}>
        <div style={{ display: 'flex', marginTop: '-25px', marginRight: '20px' }}>
          <div style={{ marginTop: '20px', marginRight: '20px' }}>Projects</div>
          <img src={process.env.PUBLIC_URL + '/stocking.png'} alt='' style={{ width: '70px', borderRadius: '50%' }} />
        </div>
      </div>
    </div>
  );
}

export default HeadBar;
