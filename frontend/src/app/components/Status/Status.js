import React from 'react';
import './assets/Status.scss';

/**
 * Status component. It shows colored vehicles status text.
 *
 * @param status object
 */
const Status = ({ status }) => {
  return (
    <span className="status-component">
      <div className="text" style={{ color: status.color }}>
        {status.label}
      </div>
    </span>
  );
};

export default Status;
