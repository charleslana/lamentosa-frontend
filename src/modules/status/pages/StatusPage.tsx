import CustomModal from '../../../shared/components/CustomModal';
import Footer from '../../../shared/components/Footer';
import Header from '../../../shared/components/Header';
import loaderService from '../../../shared/services/LoaderService';
import Marry from '../components/Marry';
import MenuDropdown from '../../../shared/components/MenuDropdown';
import modalService from '../../../shared/services/ModalService';
import React, { useEffect } from 'react';
import routes from '../../../routes/routes';
import Train from '../components/Train';
import userDetailsService from '../services/UserDetailsService';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function StatusPage() {
  const { showLoading, hideLoading } = loaderService();
  const { showModal } = modalService();
  const navigate = useNavigate();
  const [modalMarry, setModalMarry] = useState(false);
  const [modalTrain, setModalTrain] = useState(false);

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

  const showMarry = () => {
    setModalMarry(!modalMarry);
  };

  const showTrain = () => {
    setModalTrain(!modalTrain);
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
        <div className='text-center'>
          <span className='uppercase'>
            Transformou-se em vampiro em 25 de Dezembro de 2021 às 14:25
          </span>
          <br />
          <span className='cursor-pointer' onClick={showMarry}>
            Solteiro(a) <span className='icon-marry-search'></span>
          </span>
        </div>
        <div className='status'>
          <div className='character'>
            <ul className='inventory'>
              <li className='inventory-slot'>
                <div className='item item-1'>
                  <p>1</p>
                </div>
              </li>
              <li className='inventory-slot'></li>
              <li className='inventory-slot'></li>
              <li className='inventory-slot'></li>
              <li className='inventory-slot'></li>
              <li className='inventory-slot'></li>
            </ul>
            <div className='d-block'>
              <div className='profile-bg'>
                <div className='avatar avatar-vampire-male-1'></div>
                <div className='breed-vampire'></div>
                <div className='level'>1</div>
                <div className='name name-color-0'>Charles</div>
                <div className='position'>Assistente de Coveiro</div>
                <div className='age'>26 anos | Masculino</div>
              </div>
              <div className='info'>
                <div className='wrapper'>
                  <span className='icon-gold'></span>{' '}
                  <span className='gold'>5000</span>
                </div>
                <div className='wrapper'>
                  <span className='power'></span> 10
                </div>
                <div className='wrapper'>
                  <span className='combat'></span> 0
                </div>
                <div className='wrapper'>
                  <span className='grimoire'></span> 0
                </div>
              </div>
            </div>
            <ul className='equipped-item'>
              <li className='inventory-slot empty-head'></li>
              <li className='inventory-slot empty-neck'></li>
              <li className='inventory-slot empty-torso'></li>
              <li className='inventory-slot empty-hand'></li>
            </ul>
          </div>
          <div className='d-block'>
            <div className='attributes'>
              <h4>Experiência</h4>
              <div className='bar'>
                <div className='progress bar-blue' style={{ width: 0 }}></div>
                <p>0 / 5</p>
              </div>
              <h4>Vida</h4>
              <div className='bar'>
                <div className='progress bar-red' style={{ width: 286 }}></div>
                <p>100 / 100</p>
              </div>
              <h4>Força</h4>
              <div className='bar'>
                <div
                  className='progress bar-orange'
                  style={{ width: 150 }}
                ></div>
                <p>5</p>
              </div>
              <h4>Defesa</h4>
              <div className='bar'>
                <div
                  className='progress bar-orange'
                  style={{ width: 150 }}
                ></div>
                <p>5</p>
              </div>
              <h4>Agilidade</h4>
              <div className='bar'>
                <div
                  className='progress bar-orange'
                  style={{ width: 150 }}
                ></div>
                <p>5</p>
              </div>
              <h4>Inteligência</h4>
              <div className='bar'>
                <div
                  className='progress bar-orange'
                  style={{ width: 10 }}
                ></div>
                <p>5</p>
              </div>
              <h4>Resistência</h4>
              <div className='bar'>
                <div
                  className='progress bar-orange'
                  style={{ width: 10 }}
                ></div>
                <p>5</p>
              </div>
            </div>
            <h1 className='title train' onClick={showTrain}>
              Treino
            </h1>
          </div>
        </div>
      </main>
      {modalMarry ? (
        <CustomModal children={<Marry />} showModal={showMarry} />
      ) : (
        ''
      )}
      {modalTrain ? (
        <CustomModal children={<Train />} showModal={showTrain} />
      ) : (
        ''
      )}
      <Footer />
    </>
  );
}

export default StatusPage;
