import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './priRouting/PrivateRoute';
import LoginPage from './priRouting/LoginPage';
import DashboardPage from './priRouting/Dashboard';

export const AuthContext = createContext(); // Create the AuthContext

function App() {
  const [isAuth, setIsAuth] = useState(false);

  const handleLogin = () => {
    // Perform login logic
    // Set to true after successful login
    setIsAuth(true);
  };

  return (
    <AuthContext.Provider value={{ isAuth, handleLogin }}> {/* Provide the initial value */}
      <Router>
        <div>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route element={<PrivateRoute />}>
              <Route path="/dashboard" element={<DashboardPage />} />
            </Route>
          </Routes>
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
