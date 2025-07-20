// App.jsx
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from 'react-router-dom';
import LogoTransition from './components/LogoTransition';
import Login from './components/LoginForm';
import Signup from './components/SignupForm';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';

function AppRoutes({ isAuthenticated, setIsAuthenticated }) {
  const navigate = useNavigate();
  const location = useLocation();

  const showNavbar = location.pathname === '/home';

  const handleSignupClick = () => navigate('/signup');
  const handleLoginClick = (e) => {
    e.preventDefault();
    navigate('/');
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    navigate('/home');
  };

  const handleSignupSuccess = () => {
    setIsAuthenticated(true);
    navigate('/');
  };

  return (
    <>
      {showNavbar && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/home" replace />
            ) : (
              <Login onSignupClick={handleSignupClick} onLoginSuccess={handleLoginSuccess} />
            )
          }
        />
        <Route
          path="/signup"
          element={<Signup onBackToLogin={handleLoginClick} onSignupSuccess={handleLoginClick} />}
        />
        <Route
          path="/home"
          element={
            isAuthenticated ? <Homepage /> : <Navigate to="/" replace />
          }
        />
      </Routes>
    </>
  );
}

function App() {
  const [isLogoFinished, setIsLogoFinished] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isLogoFinished) {
    return <LogoTransition onFinish={() => setIsLogoFinished(true)} />;
  }

  return (
    <Router>
      <AppRoutes
        isAuthenticated={isAuthenticated}
        setIsAuthenticated={setIsAuthenticated}
      />
    </Router>
  );
}

export default App;