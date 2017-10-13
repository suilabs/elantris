import React from 'react';

import './spinner.css';

const Spinner = () => <div className="sui-spinner">
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 12.7 12.7">
    <g transform="translate(-20.828 -23.183) scale(.04658)">
      <circle id="bottomCircle" cy="724.5116" cx="613.52856" r="35.336372" />
      <circle id="topCircle" r="35.335957" cy="549.6839" cx="549.22864" fill="#ab063b" />
    </g>
  </svg>
</div>;

export default Spinner;
