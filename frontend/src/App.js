import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Patients from "./pages/Patients";
import Doctors from "./pages/Doctors";
import Appointments from "./pages/Appointments";
import { addAuth } from "./services/api";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = (userData) => {
    addAuth(userData.access_token);
    setUser(userData);
    setIsAuthenticated(true);
  };

  return (
    <Router>
      {isAuthenticated ? (
        <div className="app">
          <Sidebar user={user} />
          <Routes>
            <Route path="/home" element={<LandingPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Routes>
        </div>
      ) : (
        <Routes>
          <Route path="/login" element={<Login onLogin={login} />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
