/* eslint-disable @typescript-eslint/no-unused-vars */
import Header from '../../components/Header/Header';
import './styles.css';
import React, { useState } from 'react';
import Sidenav from '../../components/Sidenav/Sidenav';
import FormInput from '../../components/FormInput/FormInput';
import DropDown from '../../components/DropDown/DropDown';
const CreateEmployee = () => {
  const [empName, setEmpName] = useState();
  const [jDate, setJDate] = useState();
  const [experience, setExperience] = useState();
  const [department, setDepartment] = useState();
  const [role, setRole] = useState();
  const [status, setStatus] = useState();

  const dep_options = ['HR', 'Frontend', 'Backend'];
  const Roles = ['Admin', 'User'];
  const Status_list = ['Active', 'Inactive'];

  return (
    <div className='container'>
      <Header />
      <Sidenav />
      <div className='create-employee-container'>
        <div className='create-employee-header'>
          <p className='create-employee-title'>Create Employee</p>
        </div>

        <div className='form-container'>
          <div className='form-parent'>
            <div className='form-child'>
              <FormInput
                value={empName}
                onchangefunc={(e) => setEmpName(e.target.value)}
                type='text'
                label='Employee Name'
                placeholder='Employee Name'
              />
            </div>
            <div className='form-child'>
              <FormInput
                value={jDate}
                onchangefunc={(e) => setJDate(e.target.value)}
                type='text'
                label='Joining Date'
                placeholder='Joining Date'
              />
            </div>
            <div className='form-child'>
              <FormInput
                value={experience}
                onchangefunc={(e) => setExperience(e.target.value)}
                type='text'
                label='Experience'
                placeholder='Experience'
              />
            </div>
            <div className='form-child'>
              <DropDown
                value={department}
                options={dep_options}
                label='Department'
                onchangefunc={(e) => setDepartment(e.target.value)}
              />
            </div>
            <div className='form-child'>
              <DropDown
                value={role}
                options={Roles}
                label='Role'
                onchangefunc={(e) => setRole(e.target.value)}
              />
            </div>
            <div className='form-child'>
              <DropDown
                value={status}
                options={Status_list}
                label='Status'
                onchangefunc={(e) => setStatus(e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEmployee;
