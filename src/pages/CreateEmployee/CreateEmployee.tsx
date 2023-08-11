/* eslint-disable @typescript-eslint/no-unused-vars */
import Header from '../../components/Header/Header';
import './styles.css';
import React from 'react';
import Sidenav from '../../components/Sidenav/Sidenav';
const CreateEmployee = () => {
  return (
    <div className='container'>
      <Header />
      <Sidenav />
      <div className='create-employee-container'>
        <div className='create-employee-header'>
            <p className='create-employee-title'>Create Employee</p>
        </div>
      </div>
    </div>
  );
};

export default CreateEmployee;
