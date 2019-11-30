import React from 'react';

import styles from './HeadBar.module.css';

const HeadBar = () => {
  return (
    <div className={styles.HeadBar}>
      <div className={styles.left}>joole</div>
      <div className={styles.middle}>search bar</div>
      <div className={styles.right}>user</div>
    </div>
  );
}

export default HeadBar;
