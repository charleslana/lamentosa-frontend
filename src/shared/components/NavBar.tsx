import React from 'react';
import routes from '../../routes/routes';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className='nav-sticky'>
      <Link to={routes.home}>Início</Link>
      <Link to={routes.login}>Entrar</Link>
      <Link to={routes.register}>Cadastre-se</Link>
    </nav>
  );
}

export default NavBar;
