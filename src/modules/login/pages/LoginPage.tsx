import authenticateService from '../services/AuthenticateService';
import Footer from '../../../shared/components/Footer';
import Header from '../../../shared/components/Header';
import IAuthenticate from '../interfaces/IAuthenticate';
import loaderService from '../../../shared/services/LoaderService';
import modalService from '../../../shared/services/ModalService';
import NavBarOff from '../../../shared/components/NavBarOff';
import React, { useState } from 'react';
import routes from '../../../routes/routes';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { showLoading, hideLoading } = loaderService();
  const { showModal } = modalService();
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    requestAuthenticate({
      email: email,
      password: password,
    });
  };

  const requestAuthenticate = async (authenticate: IAuthenticate) => {
    showLoading();
    await authenticateService(authenticate)
      .then(() => {
        navigate(routes.status);
      })
      .catch(error => {
        if (error.validation) {
          showModal(error.validation.body.message);
          return;
        }
        showModal(error.message);
      })
      .finally(() => hideLoading());
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
