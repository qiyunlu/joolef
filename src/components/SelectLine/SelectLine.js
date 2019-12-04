import React from 'react';

import LineSearch from '../../containers/LineSearch/LineSearch';

const SelectLine = () => {
  return (
    <div style={{ backgroundImage: 'linear-gradient(rgb(107, 166, 255), white)', bottom: '0px', right: '0px', top: '0px', left: '0px', position: 'absolute' }}>
      <div style={{ fontWeight: 'bold', fontSize: '20px', color: 'rgb(84, 84, 84)', float: 'right', marginRight: '5%', marginTop: '2%' }}>
        <div style={{ display: 'flex' }}>
          <div style={{ marginTop: '20px', marginRight: '20px' }}>Projects</div>
          <img src={process.env.PUBLIC_URL + '/stocking.png'} alt='' style={{ width: '70px', borderRadius: '50%' }} />
        </div>
      </div>
      <div><img src={process.env.PUBLIC_URL + '/joole.png'} alt='' style={{ width: '300px', marginLeft: '40%', marginTop: '10%' }} /></div>
      <div style={{ fontWeight: 'bold', fontSize: '25px', color: 'rgb(84, 84, 84)', marginLeft: '36.5%' }}>Building Product Selection Platform</div>
      <div style={{ marginLeft: '10%', marginTop: '20px' }}>
        <LineSearch />
      </div>
    </div>
  );
}

export default SelectLine;
