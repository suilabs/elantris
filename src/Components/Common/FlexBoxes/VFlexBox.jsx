import React from 'react';
import PropTypes from 'proptypes';

import './VFlexBox.css';

const VFlexBox = (props) => (
    <div className='sui-vertical-flexbox'>
        {props.children}
    </div>
)

VFlexBox.propTypes = {
    children: PropTypes.arrayOf(PropTypes.node).isRequired,
}

export default VFlexBox;