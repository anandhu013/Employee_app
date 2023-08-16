import { configureStore } from '@reduxjs/toolkit';

import employeeReducer from './reducers/employeeReducer';
import employeeApi from './pages/EmployeePage/api';

const store = configureStore({
  reducer: {
    employees: employeeReducer,
    [employeeApi.reducerPath]: employeeApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(employeeApi.middleware)
});

export default store;
