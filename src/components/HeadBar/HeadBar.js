import React from 'react';

import styles from './HeadBar.module.css';
import LineSearch from '../../containers/LineSearch/LineSearch'

const HeadBar = () => {
  return (
    <div className={styles.HeadBar}>
      <div className={styles.left}>joole</div>
      <div className={styles.middle} style={{marginTop:'15px', width:'80%'}}><LineSearch /></div>
      <div className={styles.right}>user</div>
    </div>
  );
}

export default HeadBar;
