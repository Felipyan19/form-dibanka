import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom'
import Cookies from 'js-cookie';
import imgUser from '../../img/user-interface.png';
import './Header.css';

/**
 * Renderiza el componente Navbar.
 *
 * @param {function} setAcceptedLogin - Una función para establecer el estado de inicio de sesión aceptado.
 * @return {JSX.Element} El componente Navbar renderizado.
 */

const NavbarComponent = ({ setAceptedLogin }) => {
  

  /**
   * Maneja el proceso de inicio de sesión eliminando la cookie 'loggedIn'
   * y estableciendo el estado 'acceptedLogin' en false.
   *
   * @return {void} Esta función no devuelve ningún valor.
   */
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
          <NavLink to='/'>
            <button id="salirbtn" onClick={handleLogin}>Salir</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export { NavbarComponent };