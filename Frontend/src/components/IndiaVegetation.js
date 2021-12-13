import React from 'react';
import indialogo from '../images/india_vegetation.gif';
import himachalpradeshlogo from '../images/himachal_pradesh_vegetation.gif';

import gujaratlogo from '../images/gujarat_vegetation.gif';
import tamilnadulogo from '../images/tamil_nadu_vegetation.gif';

function IndiaVegetation({ area = 'india' }) {
  //   let logo = require('/images/india_vegetation.gif');

  const logo = `${area}logo`;

  return (
    <div style={{ height: '100%' }}>
      <img
        src={logo}
        alt='india vegetation'
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
}

export default IndiaVegetation;
