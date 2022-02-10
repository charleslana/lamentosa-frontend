import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <nav>
      <Link to='/'>Início</Link>
      <Link to='/login'>Entrar</Link>
      <Link to='/register'>Cadastre-se</Link>
    </nav>
  );
}

export default NavBar;
