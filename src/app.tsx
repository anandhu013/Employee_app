import { type FC } from 'react';
import './styles/global.css';
import LoginPage from './pages/LoginPage/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeePage from './pages/EmployeePage/EmployeePage';
import EmployeeDetails from './pages/EmployeeDetails/EmployeeDetails';
import CreateEmployee from './pages/CreateEmployee/CreateEmployee';

const App: FC = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/employee' element={<EmployeePage />} />
          <Route path='/employee/:id' element={<EmployeeDetails />} />
          <Route path='/create-employee' element={<CreateEmployee />} />
          <Route path='/edit-employee/:id' element={<CreateEmployee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
