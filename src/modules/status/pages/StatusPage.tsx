import Footer from '../../../shared/components/Footer';
import Header from '../../../shared/components/Header';
import loaderService from '../../../shared/services/LoaderService';
import MenuDropdown from '../../../shared/components/MenuDropdown';
import modalService from '../../../shared/services/ModalService';
import React, { useEffect } from 'react';
import routes from '../../../routes/routes';
import userDetailsService from '../services/UserDetailsService';
import { useNavigate } from 'react-router-dom';

function StatusPage() {
  const { showLoading, hideLoading } = loaderService();
  const { showModal } = modalService();
  const navigate = useNavigate();

  useEffect(() => {
    requestUserDetails();
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
      <main>
        <h1>Estatísticas</h1>
      </main>
      <Footer />
    </>
  );
}

export default StatusPage;
