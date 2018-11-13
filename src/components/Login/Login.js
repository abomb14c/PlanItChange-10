import React from 'react';

import UserLogin from '../../containers/UserLogin/UserLogin'; 

const Login = () => {
  return (
    <div className="login-container">
      <div className="create-user-container">
        {/* <CreateUser /> */}
      </div>
      <div className="login-user-container">
        <UserLogin />
      </div>
    </div>
  );
};

export default Login; 