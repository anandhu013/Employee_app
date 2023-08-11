import Sidenav from '../../components/Sidenav/Sidenav';
import Header from '../../components/Header/Header';
import React from 'react';
import './styles.css';
import Subheader from '../../components/Subheader/Subheader';
import StatusBar from '../../components/StatusBar/StatusBar';
import { useNavigate } from 'react-router-dom';

const EmployeePage: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/create-employee');
  };

  const arr = [
    'Employee Name',
    'Employee Id',
    'Joining Date',
    'Role',
    'Status',
    'Experience',
    'Action'
  ];

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

  const getEachCell = (col, obj) => {
    if (col !== 'Status') return <td className='td-container'>{obj[col]}</td>;
    else
      return (
        <td className='td-container'>
          <StatusBar isActive={obj[col]} />
        </td>
      );
  };

  const getColumns = (obj: any) => {
    return (
      <tr
        className='trbody-container'
        key={obj.EmployeeId}
        onClick={() => {
          navigate(`/employee/${obj['EmployeeId']}`);
        }}
      >
        {Object.keys(obj).map((col) => getEachCell(col, obj))}
      </tr>
    );
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
      <div className='table-container'>
        <table className='thead-container'>
          <thead className='thead-container'>
            <tr className='trhead-container'>
              {arr.map((ele) => (
                <td key={ele} className='td-container'>
                  {ele}
                </td>
              ))}
            </tr>
          </thead>
          <tbody>{data.map((ele) => getColumns(ele))}</tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeePage;
