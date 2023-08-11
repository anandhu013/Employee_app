import React from 'react';
import './styles.css';

const Header: React.FC = () => {
  return (
    <div className='header-container'>
      <div className='logo-container'>
        <img src='/assets/img/kv-logo.png' className='img-style'/>
      </div>
      <div className='header-layout'></div>
    </div>
  );
};

export default Header;
