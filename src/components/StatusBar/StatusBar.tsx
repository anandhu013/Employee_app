import React from 'react';
import './styles.css';

type StatusBar_prop_types = {
  isActive: boolean;
};
const StatusBar: React.FC<StatusBar_prop_types> = (props) => {
  const text = props.isActive ? 'Active' : 'Inactive';
  const classname = `status-container ${text}`;

  return (
    <div className={classname}>
      <p>{text}</p>
    </div>
  );
};

export default StatusBar;
