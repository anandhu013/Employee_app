/* eslint-disable @typescript-eslint/no-unused-vars */
import Header from '../../components/Header/Header';
import './styles.css';
import React from 'react';
import Sidenav from '../../components/Sidenav/Sidenav';
import Subheader from '../../components/Subheader/Subheader';
import { useNavigate, useParams } from 'react-router-dom';
import DetailField from '../../components/DetailField/DetailField';
import { useSelector } from 'react-redux';

const EmployeeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const data = useSelector((state: any) => {
    return state.employees;
  });

  const details = data.find((emp) => emp.EmployeeId == id);

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
        {Object.keys(details).map((col) => (
          <DetailField type={col} keyField={col} value={details[col]} key={details.EmployeeId} />
        ))}
      </div>
    </div>
  );
};

export default EmployeeDetails;
