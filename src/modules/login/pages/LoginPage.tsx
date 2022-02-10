import Footer from '../../../shared/components/Footer';
import Header from '../../../shared/components/Header';
import NavBarOff from '../../../shared/components/NavBarOff';
import React, { useState } from 'react';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert(email);
  };

  return (
    <>
      <Header />
      <NavBarOff />
      <main>
        <form onSubmit={handleSubmit}>
          <label>Email:</label>
          <div>
            <input
              type='email'
              value={email}
              onChange={e => setEmail(e.target.value.trim())}
            ></input>
          </div>
          <label>Senha:</label>
          <div>
            <input
              type='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
            ></input>
          </div>
          <button type='submit' disabled={!email || !password}>
            Entrar
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}

export default LoginPage;
