import Sidenav from '../../components/Sidenav/Sidenav';
import Header from '../../components/Header/Header';
import React from 'react';
import './styles.css';
import Subheader from '../../components/Subheader/Subheader';

const EmployeePage: React.FC = () => {
  const handleClick = (e) => {
    console.log('Clicked', e.target.value);
  };

  return (
    <div className='container'>
      <Header />
      <Sidenav />
      <Subheader
        title='Employee List'
        name='Create Employee'
        onclickfunc={handleClick}
        img_path='assets/icons/plus.png'
      />
    </div>
  );
};

export default EmployeePage;
