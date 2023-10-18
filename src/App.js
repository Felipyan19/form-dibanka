import React, { useState } from 'react';
import Login from './Login';
import { Header } from './Header';
import { FormContainer } from './Form';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn((prevIsLoggedIn) => !prevIsLoggedIn);
  };

  return (
    <>
      <Header onLoginSuccess={handleLoginSuccess} />
      {isLoggedIn ? (
        <FormContainer />
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </>
  );
}

export default App;

