/* eslint-disable @typescript-eslint/no-unused-vars */
import Header from '../../components/Header/Header';
import './styles.css';
import React, { useState } from 'react';
import Sidenav from '../../components/Sidenav/Sidenav';
import FormInput from '../../components/FormInput/FormInput';
import DropDown from '../../components/DropDown/DropDown';
import Button from '../../components/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addEmployee, editEmployee } from '../../actions/employeeAction';
const CreateEmployee = () => {
  const { id } = useParams();

  const dep_options = ['HR', 'Frontend', 'Backend'];
  const Roles = ['Admin', 'User'];
  const Status_list = ['Active', 'Inactive'];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const obj = useSelector((state: any) => {
    if (id) {
      const obj = state.employees.find((ele) => ele.EmployeeId == id);

      return obj;
    }
  });

  const [empName, setEmpName] = useState(obj ? obj.EmployeeName : '');
  const [jDate, setJDate] = useState(obj ? obj.JoiningDate : '');
  const [experience, setExperience] = useState(obj ? obj.Experience : '');
  const [department, setDepartment] = useState();
  const [role, setRole] = useState(obj ? obj.Role : '');
  const [status, setStatus] = useState(obj ? (obj.Status == true ? 'Active' : 'Inactive') : '');
  const [line1, setline1] = useState('');
  const [line2, setline2] = useState('');
  const [city, setcity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [pincode, setPincode] = useState('');

  const handleCreate = () => {
    console.log('Create clicked');
    dispatch(
      addEmployee({
        employee: {
          EmployeeName: empName,
          EmployeeId: '142',
          JoiningDate: jDate,
          Role: role,
          Status: status === 'Inactive' ? false : true,
          Experience: Number(experience),
          Action: 'Action'
        }
      })
    );
    navigate('/employee');
  };

  const handleEdit = () => {
    console.log('Edit Clicked');
    dispatch(
      editEmployee({
        employee: {
          EmployeeName: empName,
          EmployeeId: id,
          JoiningDate: jDate,
          Role: role,
          Status: status === 'Inactive' ? false : true,
          Experience: Number(experience),
          Action: 'Action'
        }
      })
    );
    navigate('/employee');
  };

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
          <div className='address-parent'>
            <div className='address-child'>
              <FormInput
                value={line1}
                onchangefunc={(e) => setline1(e.target.value)}
                type='text'
                label='Address line1'
                placeholder='Address line1'
              />
            </div>
            <div className='address-child'>
              <FormInput
                value={line2}
                onchangefunc={(e) => setline2(e.target.value)}
                type='text'
                label='Address line2'
                placeholder='Address line2'
              />
            </div>
            <div className='address-child'>
              <FormInput
                value={city}
                onchangefunc={(e) => setcity(e.target.value)}
                type='text'
                label='City'
                placeholder='City'
              />
            </div>
            <div className='address-child'>
              <FormInput
                value={state}
                onchangefunc={(e) => setState(e.target.value)}
                type='text'
                label='State'
                placeholder='State'
              />
            </div>
            <div className='address-child'>
              <FormInput
                value={country}
                onchangefunc={(e) => setCountry(e.target.value)}
                type='text'
                label='Country'
                placeholder='Country'
              />
            </div>
            <div className='address-child'>
              <FormInput
                value={pincode}
                onchangefunc={(e) => setPincode(e.target.value)}
                type='text'
                label='Pincode'
                placeholder='Pincode'
              />
            </div>
          </div>
          <div className='buttons-parent'>
            <Button
              value={obj ? 'Edit' : 'Create'}
              onclickfunc={obj ? handleEdit : handleCreate}
              type='submit'
            />
            <button className='cancel-button-style'>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEmployee;
