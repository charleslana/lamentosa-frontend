import React from 'react';
import { Link } from 'react-router-dom';

function NavBarOff() {
  return (
    <nav>
      <Link to='/'>Início</Link>
      <Link to='/login'>Entrar</Link>
    </nav>
  );
}

export default NavBarOff;
