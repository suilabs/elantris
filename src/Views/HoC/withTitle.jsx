import React from 'react';

const withTitle = (title, Component) => (props) => {
  document.title = title;
  return <Component {...props} />;
};

export default withTitle;
