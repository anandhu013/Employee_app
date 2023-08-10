import React, { useState } from 'react';
import './styles.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';
const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const [showError, setShowError] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const navigate = useNavigate();

  const handleclick = (e) => {
    console.log(e.target.value);
    if (username.length > 0 && password.length > 0) navigate('/employee');
    else setShowError(true);
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <section className='login_container'>
      <div className='login_left'>
        <img src='assets/img/banner.png' className='login_img' />
      </div>
      <div className='login_right'>
        <div className='login_right_form'>
          <img src='assets/img/kv-logo.png' className='login_right_img' />
          <div>
            <Input type='text' onchangefunc={handleUsername} label='username' value={username} />
            <Input
              type='password'
              onchangefunc={handlePassword}
              label='Password'
              value={password}
            />
            <Button type='submit' value='Login' onclickfunc={handleclick} />
          </div>
          {showError && <div> Username and password cannot be empty</div>}
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
