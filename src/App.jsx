import React, { useState, useEffect } from 'react';
import LoadingComponent from './pages/layouts/LoadingComponent';
import MainPage from './pages/MainPage';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading process
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the time as needed
  }, []);

  return (
    <div>
      {isLoading ? <LoadingComponent /> : <MainPage />}
    </div>
  );
};

export default App;
