import React from 'react';
import routes from '../../routes/routes';
import translate from '../../translate/translate';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className='nav-sticky'>
      <Link to={routes.home}>{translate.navBar.home}</Link>
      <Link to={routes.login}>{translate.navBar.login}</Link>
      <Link to={routes.register}>{translate.navBar.register}</Link>
    </nav>
  );
}

export default NavBar;
