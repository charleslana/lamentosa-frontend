import CustomModal from '../../../shared/components/CustomModal';
import Description from '../components/Description';
import Footer from '../../../shared/components/Footer';
import Header from '../../../shared/components/Header';
import InfoItem from '../components/InfoItem';
import ItemSlotEnum from '../../../shared/enum/ItemSlotEnum';
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
  const [modalDescription, setModalDescription] = useState(false);
  const [modalInfoItem, setModalInfoItem] = useState(false);
  const [isEquip, setIsEquip] = useState(true);
  const [name, setName] = useState('Lâmina Simples');
  const [upgrade, setUpgrade] = useState(1);
  const [image, setImage] = useState(1);
  const [level, setLevel] = useState(1);
  const [life, setLife] = useState(0);
  const [force, setForce] = useState(5);
  const [defense, setDefense] = useState(0);
  const [agility, setAgility] = useState(1);
  const [intelligence, setIntelligence] = useState(0);
  const [resistance, setResistance] = useState(0);
  const [slot, setSlot] = useState<ItemSlotEnum>(ItemSlotEnum.Hand);

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

  const showDescription = () => {
    setModalDescription(!modalDescription);
  };

  const showInfoItem = () => {
    setModalInfoItem(!modalInfoItem);
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
        <h1 className='title text-center text-bold'>Detalhes</h1>
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
                <div
                  className='item cursor-pointer item-1'
                  onClick={showInfoItem}
                >
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
                <div className='wrapper tooltip'>
                  <span className='icon-gold'></span>{' '}
                  <span className='gold'>5000</span>
                  <span className='tooltip-text'>Seu ouro</span>
                </div>
                <div className='wrapper tooltip'>
                  <span className='power'></span> 10
                  <span className='tooltip-text'>
                    Poder de Luta: Baseado em suas habilidades desconsiderando
                    equipamentos.
                  </span>
                </div>
                <div className='wrapper tooltip'>
                  <span className='combat'></span> 0
                  <span className='tooltip-text'>
                    Combatividade: Número de vitórias contra a raça inimiga nas
                    últimas 24 horas. Ajuda seu clã a reduzir o custo no treino
                    de atributos. Limit: 30
                  </span>
                </div>
                <div className='wrapper tooltip'>
                  <span className='grimoire'></span> 0
                  <span className='tooltip-text'>
                    Vitórias do Grimório: Usado para aprender magias após o
                    nível 10.
                  </span>
                </div>
              </div>
            </div>
            <ul className='equipped-item'>
              <li className='inventory-slot empty-head'>
                <div
                  className='item cursor-pointer item-5'
                  onClick={showInfoItem}
                >
                  <p>1</p>
                </div>
              </li>
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
              <h4 className='tooltip'>
                Força
                <span className='tooltip-text text-bold'>
                  Melhora o dano de seu ataque
                </span>
              </h4>
              <div className='bar'>
                <div
                  className='progress bar-orange'
                  style={{ width: 150 }}
                ></div>
                <p>5</p>
              </div>
              <h4 className='tooltip'>
                Defesa
                <span className='tooltip-text text-bold'>
                  Diminuí o dano de seu inimigo
                </span>
              </h4>
              <div className='bar'>
                <div
                  className='progress bar-orange'
                  style={{ width: 150 }}
                ></div>
                <p>5</p>
              </div>
              <h4 className='tooltip'>
                Agilidade
                <span className='tooltip-text text-bold'>
                  Melhora a chance de acertar seu inimigo
                </span>
              </h4>
              <div className='bar'>
                <div
                  className='progress bar-orange'
                  style={{ width: 150 }}
                ></div>
                <p>5</p>
              </div>
              <h4 className='tooltip'>
                Inteligência
                <span className='tooltip-text text-bold'>
                  Melhora a chance de esquivar-se de um ataque inimigo
                </span>
              </h4>
              <div className='bar'>
                <div
                  className='progress bar-orange'
                  style={{ width: 10 }}
                ></div>
                <p>5</p>
              </div>
              <h4 className='tooltip'>
                Resistência
                <span className='tooltip-text text-bold'>
                  Permite que você ataque por mais rodadas
                </span>
              </h4>
              <div className='bar'>
                <div
                  className='progress bar-orange'
                  style={{ width: 10 }}
                ></div>
                <p>5</p>
              </div>
            </div>
            <h1 className='title train text-bold' onClick={showTrain}>
              Treino
            </h1>
          </div>
        </div>
        <h1 className='title text-bold'>Descrição</h1>
        <p>
          Esse personagem não possuí uma história. Escreva algo aqui, conte-nos
          quem és, de onde veio, quais são seus objetivos... Ou talvez você
          queira falar sobre seus medos *sic
        </p>
        <button onClick={showDescription}>Editar</button>
        <h1 className='title text-bold'>Estatísticas</h1>
        <ul className='dynamic-table'>
          <li>
            <span>Vitórias de honra</span>
            <span>0</span>
            <span>
              10000º
              <br />
              Ranking
            </span>
          </li>
          <li>
            <span>Total de Batalhas</span>
            <span>0</span>
            <span>
              10000º
              <br />
              Ranking
            </span>
          </li>
          <li>
            <span>Batalhas Vencidas</span>
            <span>0</span>
            <span>
              10000º
              <br />
              Ranking
            </span>
          </li>
          <li>
            <span>Batalhas Perdidas</span>
            <span>0</span>
            <span>
              10000º
              <br />
              Ranking
            </span>
          </li>
          <li>
            <span>Empates</span>
            <span>0</span>
            <span>
              10000º
              <br />
              Ranking
            </span>
          </li>
          <li>
            <span>Danos Causados</span>
            <span>0</span>
            <span>
              10000º
              <br />
              Ranking
            </span>
          </li>
          <li>
            <span>Danos Sofridos</span>
            <span>0</span>
            <span>
              10000º
              <br />
              Ranking
            </span>
          </li>
          <li>
            <span>Ouro Ganho</span>
            <span>0</span>
            <span>
              10000º
              <br />
              Ranking
            </span>
          </li>
          <li>
            <span>Ouro Perdido</span>
            <span>0</span>
            <span>
              10000º
              <br />
              Ranking
            </span>
          </li>
          <li>
            <span>Pontos Tormentus</span>
            <span>0</span>
            <span>
              10000º
              <br />
              Ranking
            </span>
          </li>
        </ul>
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
      {modalDescription ? (
        <CustomModal children={<Description />} showModal={showDescription} />
      ) : (
        ''
      )}
      {modalInfoItem ? (
        <CustomModal
          children={
            <InfoItem
              isEquip={isEquip}
              name={name}
              upgrade={upgrade}
              image={image}
              level={level}
              attributes={{
                life: life,
                force: force,
                defense: defense,
                agility: agility,
                intelligence: intelligence,
                resistance: resistance,
              }}
              slot={slot}
            />
          }
          showModal={showInfoItem}
        />
      ) : (
        ''
      )}
      <Footer />
    </>
  );
}

export default StatusPage;
