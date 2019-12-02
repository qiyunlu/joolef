import React from 'react';

import styles from './TableLine01.module.css';

const TableLine01 = (props) => {
  return (
    <div className={styles.oneLine} style={{ marginLeft: '30px' }}>
      <div className={styles.grey} style={{ width: '30%' }}>{props.name}</div>
      <div>{props.value}</div>
    </div>
  );
}

export default TableLine01;
