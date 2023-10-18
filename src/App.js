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
      {isLoggedIn ? (
        <>
          <Header onLoginSuccess={handleLoginSuccess} />
          <FormContainer />
        </>
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </>
  );
}

export default App;


