import React from 'react';
import { Spinner } from 'reactstrap';

import './LoadingSpinner.css';
const LoadingSpinner = (props) => {
  return (
    <>
      {props.isLoading && (
        <div className='main-cont'>
          <Spinner
            type='grow'
            color='danger'
            style={{ width: '3rem', height: '3rem' }}
          />
        </div>
      )}

      {props.children}
    </>
  );
};

export default LoadingSpinner;
