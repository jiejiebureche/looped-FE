import { useState } from 'react';
import LogoTransition from './components/LogoTransition';
import MainApp from './MainApp'; // your main app component

function App() {
  const [isLogoFinished, setIsLogoFinished] = useState(false);

  return isLogoFinished ? (
    <MainApp />
  ) : (
    <LogoTransition onFinish={() => setIsLogoFinished(true)} />
  );
}

export default App;
