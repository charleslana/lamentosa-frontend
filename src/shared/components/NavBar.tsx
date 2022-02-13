import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <Link to='/'>Início</Link>
      <Link to='/login'>Entrar</Link>
      <Link to='/register'>Cadastre-se</Link>
    </nav>
  );
}

export default NavBar;
