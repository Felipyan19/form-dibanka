import React from 'react';
import Cookies from 'js-cookie';
import imgUser from '../../img/user-interface.png';
import './Header.css';

/**
 * Renders the Navbar component.
 *
 * @param {function} setAceptedLogin - A function to set the accepted login state
 * @param {string} username - The username of the logged-in user
 * @return {JSX.Element} The rendered Navbar component
 */
const NavbarComponent = ({ setAceptedLogin }) => {
  /**
   * Handles the login process by removing the 'loggedIn' cookie
   * and setting the 'acceptedLogin' state to false.
   *
   * @return {void} This function does not return a value.
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
          <button id="salirbtn" onClick={handleLogin}>Salir</button>
        </div>
      </div>
    </div>
  );
};

export { NavbarComponent };
