/* eslint-disable @typescript-eslint/no-unused-vars */
import Header from '../../components/Header/Header';
import './styles.css';
import React from 'react';
import Sidenav from '../../components/Sidenav/Sidenav';
import Subheader from '../../components/Subheader/Subheader';
import { useParams } from 'react-router-dom';
import DetailField from '../../components/DetailField/DetailField';

const data: any[] = [
  {
    EmployeeName: 'Anandhu',
    EmployeeId: 123,
    JoiningDate: '12/12/2020',
    Role: 'User',
    Status: true,
    Experience: 4,
    Action: 'Action'
  },
  {
    EmployeeName: 'Alen',
    EmployeeId: 124,
    JoiningDate: '11/12/2020',
    Role: 'Admin',
    Status: false,
    Experience: 2,
    Action: 'Action'
  },
  {
    EmployeeName: 'Anil',
    EmployeeId: 113,
    JoiningDate: '01/11/2021',
    Role: 'User',
    Status: true,
    Experience: 5,
    Action: 'Action'
  }
];

const EmployeeDetails = () => {
  const { id } = useParams();

  const details = data.find((emp) => emp.EmployeeId == id);

  const handleClick = (e) => {
    console.log('Clicked', e.target.value);
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
