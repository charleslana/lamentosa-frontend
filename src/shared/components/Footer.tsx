import React from 'react';
import routes from '../../routes/routes';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className='logo'></div>
      <div>
        Todos os direitos reservados 2022 |&nbsp;
        <Link to={routes.termsOfService} target='_blank'>
          Termos de Serviço e Regras
        </Link>
      </div>
      <div>
        <a href='https://github.com/charleslana' target='_blank'>
          <div className='icon-github'></div>
        </a>
        <a href='#' target='_blank'>
          <div className='icon-discord'></div>
        </a>
      </div>
    </footer>
  );
}

export default Footer;
