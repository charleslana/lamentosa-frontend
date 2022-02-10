import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className='logo'></div>
      <div>
        Todos os direitos reservados 2022 |{' '}
        <Link to='/terms-of-service'>Termos de Serviço e Regras</Link>
      </div>
      <div>
        <a href='https://github.com/charleslana' target='_blank'>
          <div className='icon-github'></div>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
