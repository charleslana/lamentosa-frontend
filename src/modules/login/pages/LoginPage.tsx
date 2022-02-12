import authenticateService from '../services/AuthenticateService';
import Footer from '../../../shared/components/Footer';
import Header from '../../../shared/components/Header';
import IAuthenticate from '../interfaces/IAuthenticate';
import loaderService from '../../../shared/services/LoaderService';
import modalService from '../../../shared/services/ModalService';
import NavBar from '../../../shared/components/NavBar';
import React, { useEffect, useState } from 'react';
import routes from '../../../routes/routes';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { showLoading, hideLoading } = loaderService();
  const { showModal } = modalService();
  const navigate = useNavigate();

  useEffect(() => {
    removeToken();
  }, []);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    requestAuthenticate({
      email: email,
      password: password,
    });
  };

  const removeToken = () => {
    const token = localStorage.getItem('token');
    if (token) {
      localStorage.removeItem('token');
    }
  };

  const requestAuthenticate = async (authenticate: IAuthenticate) => {
    showLoading();
    await authenticateService(authenticate)
      .then(response => {
        localStorage.setItem('token', response.data?.token as string);
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
      <NavBar />
      <main>
        <h1 className='text-center'>Entrar</h1>
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
