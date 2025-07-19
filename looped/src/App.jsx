// to test nav bar

import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-8 text-[#530B73]">
        <h1 className="text-3xl font-bold">Navbar Preview</h1>
        <p className="mt-4 text-gray-700">
          This is a placeholder page to help you test the navbar. Resize the window to check mobile responsiveness.
        </p>
      </div>
    </div>
  );
}

export default App;

//uncomment this part to use the main app with login and signup forms:

// import { useState } from 'react';
// import LogoTransition from './components/LogoTransition';
// import MainApp from './MainApp'; // your main app component
// import Login from './components/LoginForm';
// import Signup from './components/SignupForm';
// import Navbar from './components/Navbar';

// function App() {
//   const [isLogoFinished, setIsLogoFinished] = useState(false);
//   const [showSignup, setShowSignup] = useState(false);

//   if (!isLogoFinished) {
//     return <LogoTransition onFinish={() => setIsLogoFinished(true)} />;
//   }

//   return showSignup ? (
//     <Signup onBackToLogin={() => setShowSignup(false)} />
//   ) : (
//     <Login onSignupClick={() => setShowSignup(true)} />
//   );
// }

// export default App;