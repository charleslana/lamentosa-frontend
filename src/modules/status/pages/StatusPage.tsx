import Footer from '../../../shared/components/Footer';
import Header from '../../../shared/components/Header';
import loaderService from '../../../shared/services/LoaderService';
import MenuDropdown from '../../../shared/components/MenuDropdown';
import modalService from '../../../shared/services/ModalService';
import React, { useEffect } from 'react';
import routes from '../../../routes/routes';
import userDetailsService from '../services/UserDetailsService';
import { Link, useNavigate } from 'react-router-dom';

function StatusPage() {
  const { showLoading, hideLoading } = loaderService();
  const { showModal } = modalService();
  const navigate = useNavigate();

  useEffect(() => {
    //requestUserDetails();
  }, []);

  const requestUserDetails = async () => {
    showLoading();
    await userDetailsService()
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        navigate(routes.login);
        showModal(error.message);
      })
      .finally(() => hideLoading());
  };

  return (
    <>
      <Header />
      <MenuDropdown />
      <main className='content'>
        <div className='alert'>
          <p>Os lobisomens venceram a Tormentus War - O Saque Infernal.</p>
          <p>
            Ambas as raças estão recebendo o dobro de ouro em combates contra a
            lista negra e 5% a mais de ouro por terem participado da guerra.
          </p>
          <p>
            O bônus vale para os Lobisomens até 11 de Fevereiro de 2022 às
            02:35.
          </p>
          <p>
            O bônus vale para os Vampiros até 10 de Fevereiro de 2022 às 23:35.
          </p>
        </div>
        <div className='alert'>
          <p>Os seguintes bosses estão desafiando este mundo:</p>
          <br />
          <p>
            <Link to={routes.status}>Draugr - soldier</Link>
          </p>
          <p>
            <Link to={routes.status}>First Mother - elder</Link>
          </p>
        </div>
        <h1 className='title text-center'>Estatísticas</h1>
        <p className='sub-title text-center'>Amaldiçoado Comum</p>
        <span className='text-center uppercase'>
          Transformou-se em vampiro em 25 de Dezembro de 2021 às 14:25
        </span>
        <span className='text-center'>
          Solteiro(a) <span className='icon-marry-search'></span>
        </span>
      </main>
      <Footer />
    </>
  );
}

export default StatusPage;
