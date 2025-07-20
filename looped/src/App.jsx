import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import LogoTransition from "./components/LogoTransition";
import Login from "./components/LoginForm";
import Signup from "./components/SignupForm";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
// import Squares from "./components/Squares";

function AppRoutes({ isAuthenticated, setIsAuthenticated }) {
  const navigate = useNavigate();
  const location = useLocation();

  const showNavbar = location.pathname === "/home";

  const handleSignupClick = () => navigate("/signup");
  const handleLoginClick = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
    navigate("/home");
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
              <Login
                onSignupClick={handleSignupClick}
                onLoginSuccess={handleLoginSuccess}
              />
            )
          }
        />
        <Route
          path="/signup"
          element={
            <Signup
              onBackToLogin={handleLoginClick}
              onSignupSuccess={handleLoginClick}
            />
          }
        />
        <Route
          path="/home"
          element={isAuthenticated ? <Homepage /> : <Navigate to="/" replace />}
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
    <>
      {/* Background Squares
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0">
          <div style={{ width: "100%", height: "100%", position: "relative" }}>
            <Squares
              speed={0.5}
              squareSize={40}
              direction="diagonal" // up, down, left, right, diagonal
              borderColor="#530B73"
              hoverFillColor="#530B73"
            />
          </div>
        </div>
      </div> */}

      {/* App Content */}
      <Router>
        <AppRoutes
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
        />
      </Router>
    </>
  );
}

export default App;
