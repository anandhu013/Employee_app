import { createAction } from '@reduxjs/toolkit';
type addEmployeeType = {
  EmployeeName: string;
  EmployeeId: string;
  JoiningDate: string;
  Role: string;
  Status: boolean;
  Experience: number;
  Action: string;
};

type deleteEmployeeType = {
  id: string;
};

export const addEmployee = createAction<{ employee: addEmployeeType }>('EMPLOYEE:CREATE');
export const editEmployee = createAction<{ employee: addEmployeeType }>('EMPLOYEE:EDIT');
export const deleteEmployee = createAction<{ employee: deleteEmployeeType }>('EMPLOYEE:DELETE');
