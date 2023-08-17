/* eslint-disable @typescript-eslint/no-unused-vars */
import Header from '../../components/Header/Header';
import './styles.css';
import React, { useEffect, useState } from 'react';
import Sidenav from '../../components/Sidenav/Sidenav';
import FormInput from '../../components/FormInput/FormInput';
import DropDown from '../../components/DropDown/DropDown';
import Button from '../../components/Button/Button';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addEmployee, editEmployee } from '../../actions/employeeAction';
import { useLazyGetEmployeeByIdQuery } from '../EmployeeDetails/api';
import {
  useCreateEmployeeMutation,
  useEditEmployeeMutation,
  useGetDepartmentListQuery,
  useGetRolesListQuery,
  useLazyGetDepartmentByIdQuery
} from './api';
const CreateEmployee = () => {
  const { id } = useParams();

  const { data: dep_response } = useGetDepartmentListQuery();
  const { data: role_response } = useGetRolesListQuery();

  const dep_options = dep_response?.data.map((dep) => dep.name);
  const Roles = role_response?.data;
  const Status_list = ['Active', 'Inactive'];

  const dispatch = useDispatch();
  const navigate = useNavigate();

  /*const obj = useSelector((state: any) => {
    if (id) {
      const obj = state.employees.find((ele) => ele.EmployeeId == id);

      return obj;
    }
  });*/
  const [getEmployeeById, { data, isSuccess }] = useLazyGetEmployeeByIdQuery();
  const [getDepartmentById, { data: depData, isSuccess: isSucDep }] =
    useLazyGetDepartmentByIdQuery();

  const [CreateEmployee, { data: createData, isSuccess: isSuccessCreate }] =
    useCreateEmployeeMutation();

  const [EditEmployee, { data: EditData, isSuccess: isSuccessEdit }] = useEditEmployeeMutation();

  const [empName, setEmpName] = useState('');
  const [jDate, setJDate] = useState('');
  const [experience, setExperience] = useState(null);
  const [department, setDepartment] = useState('');
  const [role, setRole] = useState('');
  const [status, setStatus] = useState('');
  const [line1, setline1] = useState('');
  const [line2, setline2] = useState('');
  const [city, setcity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [pincode, setPincode] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
    CreateEmployee({
      name: empName,
      username: username,
      password: password,
      experience: Number(experience),
      departmentId: dep_response?.data.find((obj) => obj.name === department)?.id,
      joiningDate: jDate,
      address: {
        addressLine1: line1,
        addressLine2: line2,
        city: city,
        state: state,
        country: country,
        pincode: pincode
      },
      role: role
    });
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
    EditEmployee({
      id: id,
      body: {
        name: empName,
        username: username,
        experience: Number(experience),
        departmentId: dep_response?.data.find((obj) => obj.name === department)?.id,
        joiningDate: jDate,
        address: {
          addressLine1: line1,
          addressLine2: line2,
          city: city,
          state: state,
          country: country,
          pincode: pincode
        },
        role: role,
        isActive: status === 'Inactive' ? false : true
      }
    });
  };

  useEffect(() => {
    if (id) getEmployeeById(id);
  }, []);

  useEffect(() => {
    if (data && isSuccess) {
      setEmpName(data.data.name);
      setJDate(data.data.joiningDate);
      setExperience(data.data.experience);
      setUsername(data.data.username);
      setRole(data.data.role);
      setStatus(data.data.isActive ? 'Active' : 'Inactive');
      setCountry(data.data.address.country);
      setState(data.data.address.state);
      setPincode(data.data.address.pincode);
      setline1(data.data.address.addressLine1);
      setline2(data.data.address.addressLine2);
      setcity(data.data.address.city);
      getDepartmentById(data.data.departmentId);
    }
  }, [data, isSuccess]);

  useEffect(() => {
    if (depData && isSucDep) setDepartment(depData.data.name);
  }, [depData, isSucDep]);

  useEffect(() => {
    if (createData && isSuccessCreate) navigate('/employee');
  }, [createData, isSuccessCreate]);

  useEffect(() => {
    if (EditData && isSuccessEdit) navigate('/employee');
  }, [EditData, isSuccessEdit]);

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
                value={username}
                onchangefunc={(e) => setUsername(e.target.value)}
                type='text'
                label='Username'
                placeholder='username'
              />
            </div>
            {!id && (
              <div className='form-child'>
                <FormInput
                  value={password}
                  onchangefunc={(e) => setPassword(e.target.value)}
                  type='password'
                  label='Password'
                  placeholder='password'
                />
              </div>
            )}
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
                options={dep_options ? dep_options : []}
                label='Department'
                onchangefunc={(e) => setDepartment(e.target.value)}
              />
            </div>
            <div className='form-child'>
              <DropDown
                value={role}
                options={Roles ? Roles : []}
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
              value={id ? 'Edit' : 'Create'}
              onclickfunc={id ? handleEdit : handleCreate}
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
