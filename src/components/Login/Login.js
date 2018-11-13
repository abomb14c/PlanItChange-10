import React from 'react';
import './login.css';

import UserLogin from '../../containers/UserLogin/UserLogin'; 
import CreateUser from '../../containers/CreateUser/CreateUser';

const Login = () => {
  return (
    <div className="login-container">
      <div className="create-user-container">
        <CreateUser />
      </div>
      <div className="login-user-container">
        <UserLogin />
      </div>
    </div>
  );
};

export default Login; 