import React from 'react';
import './assets/Status.scss';

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
