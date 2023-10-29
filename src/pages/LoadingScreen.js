import React from 'react';
import './LoadingScreen.scss';

// eslint-disable-next-line react/prop-types
const LoadingScreen = ({ loadingComplete }) => {
  return (
    <div className={`LoadingScreen ${loadingComplete ? 'loaded' : ''}`}>
      <div className="door left"></div>
      <div className="door right"></div>
    </div>
  );
};

export default LoadingScreen;