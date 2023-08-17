import Sidenav from '../../components/Sidenav/Sidenav';
import Header from '../../components/Header/Header';
import React, { useEffect, useState } from 'react';
import './styles.css';
import Subheader from '../../components/Subheader/Subheader';
import StatusBar from '../../components/StatusBar/StatusBar';
import { useNavigate } from 'react-router-dom';
import ActionBar from '../../components/ActionBar/ActionBar';
import { useDispatch } from 'react-redux';
import DeletePopup from '../../components/DeletePopup/DeletePopup';
import { deleteEmployee } from '../../actions/employeeAction';
import { useDeleteEmployeeMutation, useGetEmployeeListQuery } from './api';
import Button from '../../components/Button/Button';

const EmployeePage: React.FC = () => {
  const [showDelete, setShowDelete] = useState(false);
  const [deleteId, setDeleteId] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { data: EmployeeList } = useGetEmployeeListQuery();
  const [deleteEmployeeTrigger, { data: deleteData, isSuccess: deleteSuccess }] =
    useDeleteEmployeeMutation();

  //console.log(EmployeeList['data']);

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
    deleteEmployeeTrigger(id);
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

  const handleLogout = () => {
    console.log('Clicked to logout');
    localStorage.removeItem('Auth');
    navigate('/login');
  };

  const arr = ['Employee Name', 'Employee Id', 'Joining Date', 'Role', 'Status', 'Experience'];

  const arr1 = ['name', 'id', 'joiningDate', 'role', 'isActive', 'experience', 'Action'];

  const data = EmployeeList?.data;

  const getEachCell = (col, obj) => {
    if (col === 'isActive') {
      return (
        <td className='td-container'>
          <StatusBar isActive={obj[col]} />
        </td>
      );
    } else if (col === 'Action') {
      if (localStorage.getItem('Role') === 'admin')
        return (
          <div className='td-container'>
            <ActionBar
              onclickDelete={(e) => {
                e.stopPropagation();
                handleTrash(obj.id);
              }}
              onclickEdit={(e) => {
                e.stopPropagation();
                handleEdit(obj.id);
              }}
            />
          </div>
        );
    } else {
      return <td className='td-container'>{obj[col]}</td>;
    }
  };

  const getColumns = (obj: any) => {
    return (
      <tr
        className='trbody-container'
        key={obj.id}
        onClick={() => {
          navigate(`/employee/${obj['id']}`);
        }}
      >
        {arr1.map((col) => getEachCell(col, obj))}
      </tr>
    );
  };

  useEffect(() => {
    setShowDelete(false);
  }, [deleteData, deleteSuccess]);

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
              {localStorage.getItem('Role') === 'admin' && (
                <td key='action' className='td-container'>
                  Action
                </td>
              )}
            </tr>
          </thead>
          <tbody>{data?.map((ele) => getColumns(ele))}</tbody>
        </table>
      </div>
      <div className='logout-btn-container'>
        <Button type='button' value='Logout' onclickfunc={handleLogout} />
      </div>
    </div>
  );
};

export default EmployeePage;
