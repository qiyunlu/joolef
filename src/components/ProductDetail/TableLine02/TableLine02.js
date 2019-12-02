import React from 'react';

import styles from './TableLine02.module.css';

const TableLine02 = (props) => {
  return (
    <div className={styles.oneLine} style={{ marginLeft: '30px' }}>
      <div className={styles.grey} style={{ width: '30%' }}>{props.name}</div>
      <div className={styles.grey} style={{ width: '15%' }}>Min</div>
      <div style={{ width: '15%' }}>{props.value1}</div>
      <div className={styles.grey} style={{ width: '15%' }}>Max</div>
      <div>{props.value2}</div>
    </div>
  );
}

export default TableLine02;
