import Sidenav from '../../components/Sidenav/Sidenav';
import Header from '../../components/Header/Header';
import React, { useState } from 'react';
import './styles.css';
import Subheader from '../../components/Subheader/Subheader';
import StatusBar from '../../components/StatusBar/StatusBar';
import { useNavigate } from 'react-router-dom';
import ActionBar from '../../components/ActionBar/ActionBar';
import { useDispatch, useSelector } from 'react-redux';
import DeletePopup from '../../components/DeletePopup/DeletePopup';
import { deleteEmployee } from '../../actions/employeeAction';
import { useGetEmployeeListQuery } from './api';

const EmployeePage: React.FC = () => {
  const [showDelete, setShowDelete] = useState(false);
  const [deleteId, setDeleteId] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data: EmployeeList } = useGetEmployeeListQuery();

  console.log(EmployeeList['data']);

  const handleClick = () => {
    navigate('/create-employee');
  };

  const handleDelete = (id) => {
    //setShowDelete(true);
    console.log(`Clicked to delete ${id}`);
    dispatch(
      deleteEmployee({
        employee: {
          id: id
        }
      })
    );
    setShowDelete(false);
  };

  const handleTrash = (id) => {
    setDeleteId(id);
    setShowDelete(true);
  };

  const handleCancel = () => {
    setDeleteId(null);
    setShowDelete(false);
  };

  const handleEdit = (id) => {
    console.log(`Clicked to Edit ${id}`);
    navigate(`/edit-employee/${id}`);
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

  //const arr1 = ['name', 'id', 'joiningDate', 'role', 'isActive', 'experience'];

  const data = useSelector((state: any) => {
    return state.employees;
  });

  //console.log(data);

  const getEachCell = (col, obj) => {
    if (col === 'Status')
      return (
        <td className='td-container'>
          <StatusBar isActive={obj[col]} />
        </td>
      );
    else if (col === 'Action')
      return (
        <div className='td-container'>
          <ActionBar
            onclickDelete={(e) => {
              e.stopPropagation();
              handleTrash(obj['EmployeeId']);
            }}
            onclickEdit={(e) => {
              e.stopPropagation();
              handleEdit(obj['EmployeeId']);
            }}
          />
        </div>
      );
    else return <td className='td-container'>{obj[col]}</td>;
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
      {showDelete && (
        <DeletePopup value={deleteId} onclickDelete={handleDelete} onClickCancel={handleCancel} />
      )}
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
