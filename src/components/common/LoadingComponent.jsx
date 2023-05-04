import React from 'react';

const loadingImg =
  'https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg';

const LoadingComponent = () => (
  <div className="loading-img">
    <img src={loadingImg} alt="Loading..." />
  </div>
);

export default LoadingComponent;
