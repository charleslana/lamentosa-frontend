import React from 'react';
import ScrollButton from './ScrollButton';

function Footer() {
  return (
    <>
      <footer>
        <div className='logo'></div>
        <div>Todos os direitos reservados 2022</div>
        <div>
          <a href='https://github.com/charleslana' target='_blank'>
            <div className='icon-github'></div>
          </a>
        </div>
      </footer>
      <ScrollButton />
    </>
  );
}

export default Footer;
