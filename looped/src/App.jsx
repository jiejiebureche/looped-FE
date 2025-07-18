import { useState } from 'react';
import LogoTransition from './components/LogoTransition';
import MainApp from './MainApp'; // your main app component
import Login from './components/LoginForm';
import Signup from './components/SignupForm';

function App() {
  const [isLogoFinished, setIsLogoFinished] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  if (!isLogoFinished) {
    return <LogoTransition onFinish={() => setIsLogoFinished(true)} />;
  }

  return showSignup ? (
    <Signup onBackToLogin={() => setShowSignup(false)} />
  ) : (
    <Login onSignupClick={() => setShowSignup(true)} />
  );
}

export default App;