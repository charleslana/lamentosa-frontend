import React, { useEffect } from 'react';

function Header() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <header>
      <div className='logo'></div>
    </header>
  );
}

export default Header;
