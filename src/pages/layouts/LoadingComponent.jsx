import React from 'react';
import { Oval } from 'react-loader-spinner';
import "../../assets/styles/pages/layouts/LoadingComponent.css"; // Adjust the import path if needed

const LoadingComponent = () => {
  return (
    <div className="loading-container">
      <Oval
        visible={true}
        height={80}
        width={80}
        color="#9405FF"
        ariaLabel="oval-loading"
        secondaryColor='#B542FF'
      />
    </div>
  );
};

export default LoadingComponent;
