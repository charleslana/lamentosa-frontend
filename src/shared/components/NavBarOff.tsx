import React from 'react';
import { Link } from 'react-router-dom';

function NavBarOff() {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/error'>NotFound</Link>
    </nav>
  );
}

export default NavBarOff;
