import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../App';

function LoginPage() {
  const { handleLogin } = useContext(AuthContext);

  const handleLoginClick = () => {
    handleLogin(); // Call the handleLogin function from the context
  };

  return (
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLoginClick}>Login</button>
      <Link to={'/dashboard'}>Go to Dashboard</Link>
    </div>
  );
}

export default LoginPage;
