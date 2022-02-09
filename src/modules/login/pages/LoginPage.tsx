import Footer from '../../../shared/components/Footer';
import Header from '../../../shared/components/Header';
import NavBarOff from '../../../shared/components/NavBarOff';
import React from 'react';

function LoginPage() {
  return (
    <>
      <Header />
      <NavBarOff />
      <main>
        <form>
          <label>Email:</label>
          <div>
            <input type='email'></input>
          </div>
          <label>Senha:</label>
          <div>
            <input type='password'></input>
          </div>
          <button type='submit'>Entrar</button>
        </form>
      </main>
      <Footer />
    </>
  );
}

export default LoginPage;
