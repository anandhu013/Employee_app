import { type FC } from 'react';
import './styles/global.css';
import LoginPage from './pages/LoginPage/LoginPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import EmployeePage from './pages/EmployeePage/EmployeePage';

const App: FC = () => {
  return (
    <div className='app'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/employee' element={<EmployeePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
