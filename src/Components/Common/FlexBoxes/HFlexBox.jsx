import React from 'react';
import PropTypes from 'proptypes';

import './HFlexBox.css';

const HFlexBox = (props) => (
    <div className='sui-horizontal-flexbox'>
        {props.children}
    </div>
)

HFlexBox.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
}

export default HFlexBox;