const initialState = [
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

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'EMPLOYEE:CREATE': {
      const newState = [...state, action.payload.employee];

      return newState;
    }
    case 'EMPLOYEE:DELETE': {
      const newState = state.filter((obj) => obj.EmployeeId !== action.payload.employee.Eid);

      return newState;
    }
    case 'EMPLOYEE:EDIT': {
      const newState = state.filter((obj) => obj.EmployeeId !== action.payload.employee.EmployeeId);
      const newState1 = [...newState, action.payload.employee];

      return newState1;
    }
    default:
      return state;
  }
};

export default employeeReducer;
