import React from 'react';
import routes from '../../routes/routes';
import translate from '../../translate/translate';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer>
      <div className='logo'></div>
      <div>
        {translate.formatString(translate.footer.detail1, {
          year: new Date().getFullYear(),
        })}{' '}
        |&nbsp;
        <Link to={routes.termsOfService} target='_blank'>
          {translate.footer.detail2}
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
