import React from 'react';
import Cookies from 'js-cookie';
import imgUser from '../../img/user-interface.png';
import './Header.css';

const NavbarComponent = ({ setAceptedLogin, username }) => {
  const handleLogin = () => {
    Cookies.remove('loggedIn');
    setAceptedLogin(false);
  };

  return (
    <div className='header' variant="dark" expand="lg">
      <div className='header-container'>
        <div className='header-brand'>
          DiBanka
        </div>
        <div className="container-user">
          <img src={imgUser} alt="perfil" className="profile-img" />
          <p className="profile-name">
          {
          Cookies.get('userName')
          }
          </p>
        </div>
        <div className="salir">
          <button id="salirbtn" onClick={handleLogin}>Salir</button>
        </div>
      </div>
    </div>
  );
};

export { NavbarComponent };
