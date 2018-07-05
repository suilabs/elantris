import { withRouter } from 'react-router-dom';
import { isMobile } from 'react-device-detect';

const SetParameters = withRouter((props) => {
  const params = new URLSearchParams(props.location.search.substring(1));
  window.suilabs = {
    queryParams: params,
    isMobile: params.get('mobile') === 'true' || isMobile,
  };
  return null;
});

export default SetParameters;
