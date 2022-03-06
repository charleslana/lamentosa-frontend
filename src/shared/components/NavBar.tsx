import React from 'react';
import routes from '../../routes/routes';
import translate from '../../translate/translate';
import { Link, useLocation } from 'react-router-dom';

function NavBar() {
  const { pathname } = useLocation();

  return (
    <nav className='nav-sticky'>
      <Link
        to={routes.home}
        className={pathname === routes.home ? 'active' : ''}
      >
        {translate.navBar.home}
      </Link>
      <Link
        to={routes.login}
        className={pathname.includes(routes.login) ? 'active' : ''}
      >
        {translate.navBar.login}
      </Link>
      <Link
        to={routes.register}
        className={pathname.includes(routes.register) ? 'active' : ''}
      >
        {translate.navBar.register}
      </Link>
    </nav>
  );
}

export default NavBar;
