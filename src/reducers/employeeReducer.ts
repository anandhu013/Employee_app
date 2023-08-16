import { addEmployee, deleteEmployee, editEmployee } from '../actions/employeeAction';
import { createReducer } from '@reduxjs/toolkit';

type EmployeeType = {
  EmployeeName: string;
  EmployeeId: string;
  JoiningDate: string;
  Role: string;
  Status: boolean;
  Experience: number;
  Action: string;
};

const initialState: Array<EmployeeType> = [
  {
    EmployeeName: 'Anandhu',
    EmployeeId: '123',
    JoiningDate: '12/12/2020',
    Role: 'User',
    Status: true,
    Experience: 4,
    Action: 'Action'
  },
  {
    EmployeeName: 'Alen',
    EmployeeId: '124',
    JoiningDate: '11/12/2020',
    Role: 'Admin',
    Status: false,
    Experience: 2,
    Action: 'Action'
  },
  {
    EmployeeName: 'Anil',
    EmployeeId: '113',
    JoiningDate: '01/11/2021',
    Role: 'User',
    Status: true,
    Experience: 5,
    Action: 'Action'
  }
];

const employeeReducer = createReducer(initialState, (builder) => {
  builder.addCase(addEmployee, (state, action) => {
    state = [...state, action.payload.employee];

    return state;
  });
  builder.addCase(editEmployee, (state, action) => {
    const newState = state.filter((obj) => obj.EmployeeId !== action.payload.employee.EmployeeId);
    const newState1 = [...newState, action.payload.employee];

    return newState1;
  });
  builder.addCase(deleteEmployee, (state, action) => {
    const newState = state.filter((obj) => obj.EmployeeId !== action.payload.employee.id);

    return newState;
  });
});

export default employeeReducer;
