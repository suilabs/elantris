import React from 'react';

import instance from '../../Services/EyeService';

const withEye = Component => props => <Component {...props} eye={instance} />;

export default withEye;
