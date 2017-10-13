import React from 'react';
import PropTypes from 'proptypes';

const Flange = props => (
  <svg className={props.className} xmlns="http://www.w3.org/2000/svg" width="39.06403" height="12.066122" viewBox="0 0 10.335691 3.1924948">
    <path
      d="M2.5869834 1.71936L.0061623.24623l-.00477-.1274c-.00379-.10118-.0003572-.12535.016704-.11745.011814.005 1.1733352.66734 2.5811585 1.47084 1.5314261.87403 2.5691036 1.45814 2.5831406 1.45404.017031-.005 4.9858992-2.83404 5.1351412-2.92373.01728-.0103.02056.0122.01671.1154l-.0048.1283-2.5808214 1.47313-2.5808215 1.47313z"
      fill="#fff6d5"
    />
  </svg>
);

Flange.propTypes = {
  className: PropTypes.string,
};

export default Flange;
