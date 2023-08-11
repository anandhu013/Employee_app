import React from 'react';
import './styles.css';

const Sidenav: React.FC = () => {
  return (
    <div className='sidenav'>
      <div className='sidenav_comp'>
        <div className='sidenav_icon'>
          <img src='/assets/icons/employees.svg' />
        </div>
        <p>Employee list</p>
      </div>
    </div>
  );
};

export default Sidenav;
