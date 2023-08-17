/* eslint-disable @typescript-eslint/no-unused-vars */
import Header from '../../components/Header/Header';
import './styles.css';
import React from 'react';
import Sidenav from '../../components/Sidenav/Sidenav';
import Subheader from '../../components/Subheader/Subheader';
import { useNavigate, useParams } from 'react-router-dom';
import DetailField from '../../components/DetailField/DetailField';
import { useGetEmployeeByIdQuery } from './api';

const EmployeeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: emp } = useGetEmployeeByIdQuery(id);

  const details = emp?.data;
  const arr1 = [
    ['name', 'Name'],
    ['id', 'ID'],
    ['joiningDate', 'Joining Date'],
    ['role', 'Role'],
    ['isActive', 'Status'],
    ['experience', 'Experience']
  ];

  const handleClick = (e) => {
    console.log('Clicked', e.target.value);
    navigate(`/edit-employee/${id}`);
  };

  return (
    <div className='container'>
      <Header />
      <Sidenav />
      <Subheader
        title='Employee Details'
        name='Edit'
        onclickfunc={handleClick}
        img_path='/assets/icons/edit.svg'
      />

      <div className='details-container'>
        {details &&
          arr1.map((col) => (
            <DetailField type={col[0]} keyField={col[1]} value={details[col[0]]} key={details.id} />
          ))}
      </div>
    </div>
  );
};

export default EmployeeDetails;
