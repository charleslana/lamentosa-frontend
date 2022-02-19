import CustomModal from '../../../shared/components/CustomModal';
import Description from '../components/Description';
import Footer from '../../../shared/components/Footer';
import Header from '../../../shared/components/Header';
import IItem from '../interfaces/IItem';
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
  const [userDateCreate, setUserDateCreate] = useState<Date>(
    new Date('2022-02-17 10:00:00')
  );
  const [formattedDate, setFormattedDate] = useState('');
  const [modalMarry, setModalMarry] = useState(false);
  const [avatar, setAvatar] = useState(1);
  const [breed, setBreed] = useState('');
  const [level, setLevel] = useState(1);
  const [color, setColor] = useState(0);
  const [name, setName] = useState('');
  const [title, setTile] = useState('');
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState('');
  const [formattedGender, setFormattedGender] = useState('');
  const [gold, setGold] = useState(0);
  const [power, setPower] = useState(0);
  const [combat, setCombat] = useState(0);
  const [grimoire, setGrimoire] = useState(0);
  const [items, setItems] = useState<IItem[]>();
  const [id, setId] = useState(0);
  const [isEquip, setIsEquip] = useState(true);
  const [itemName, setItemName] = useState('Simple Blade');
  const [upgrade, setUpgrade] = useState(1);
  const [image, setImage] = useState(1);
  const [itemLevel, setItemLevel] = useState(1);
  const [life, setLife] = useState(0);
  const [itemForce, setItemForce] = useState(5);
  const [itemDefense, setItemDefense] = useState(0);
  const [itemAgility, setItemAgility] = useState(1);
  const [itemIntelligence, setItemIntelligence] = useState(0);
  const [itemResistance, setItemResistance] = useState(0);
  const [slot, setSlot] = useState<ItemSlotEnum>(ItemSlotEnum.Hand);
  const [modalInfoItem, setModalInfoItem] = useState(false);
  const widthBar = 286;
  const [minExp, setMinExp] = useState(0);
  const [maxExp, setMaxExp] = useState(0);
  const [minLife, setMinLife] = useState(0);
  const [maxLife, setMaxLife] = useState(0);
  const [force, setForce] = useState(1);
  const [defense, setDefense] = useState(1);
  const [agility, setAgility] = useState(1);
  const [intelligence, setIntelligence] = useState(1);
  const [resistance, setResistance] = useState(1);
  const [totalAttributes, setTotalAttributes] = useState(1);
  const [modalTrain, setModalTrain] = useState(false);
  const [modalDescription, setModalDescription] = useState(false);

  useEffect(() => {
    requestUserDetails();
  }, [formattedDate, totalAttributes]);

  const formatData = () => {
    const year = new Intl.DateTimeFormat('pt-BR', { year: 'numeric' }).format(
      userDateCreate
    );
    const month = new Intl.DateTimeFormat('pt-BR', { month: 'long' }).format(
      userDateCreate
    );
    const day = new Intl.DateTimeFormat('pt-BR', { day: '2-digit' }).format(
      userDateCreate
    );
    const hour = new Intl.DateTimeFormat('pt-BR', { hour: '2-digit' }).format(
      userDateCreate
    );
    const minute = new Intl.DateTimeFormat('pt-BR', {
      minute: '2-digit',
    }).format(userDateCreate);
    setFormattedDate(`${day} de ${month} de ${year} às ${hour}:${minute}`);
  };

  const formatGender = () => {
    if (gender.toLowerCase() === 'male') {
      setFormattedGender('Masculino');
      return;
    }
    setFormattedGender('Feminino');
  };

  const dataItems: IItem[] = [
    {
      id: 1,
      isEquip: false,
      name: 'Simple Blade',
      upgrade: 1,
      image: 1,
      level: 1,
      attributes: {
        life: 0,
        force: 5,
        defense: 0,
        agility: 1,
        intelligence: 0,
        resistance: 0,
      },
      slot: ItemSlotEnum.Hand,
    },
    {
      id: 2,
      isEquip: true,
      name: 'Chain Helmet',
      upgrade: 1,
      image: 4,
      level: 1,
      attributes: {
        life: 0,
        force: 0,
        defense: 0,
        agility: 0,
        intelligence: 6,
        resistance: 0,
      },
      slot: ItemSlotEnum.Head,
    },
  ];

  const loadData = () => {
    setUserDateCreate(new Date('2022-02-18 10:00:00'));
    formatData();
    setAvatar(1);
    setBreed('Vampire');
    setLevel(1);
    setColor(0);
    setName('Charles');
    setTile('Assistente de Coveiro');
    setAge(26);
    setGender('Male');
    formatGender();
    setGold(200);
    setPower(1);
    setCombat(0);
    setGrimoire(0);
    setItems(dataItems);
    setMinExp(0);
    setMaxExp(5);
    setMinLife(100);
    setMaxLife(100);
    setForce(1);
    setDefense(1);
    setAgility(1);
    setIntelligence(1);
    setResistance(1);
    setTotalAttributes(force + defense + agility + intelligence + resistance);
  };

  const requestUserDetails = async () => {
    loadData();
    // showLoading();
    // await userDetailsService()
    //   .then(response => {
    //     console.log(response);
    //     loadData();
    //   })
    //   .catch(error => {
    //     navigate(routes.login);
    //     showModal(error.message);
    //   })
    //   .finally(() => hideLoading());
  };

  const setItem = (item: IItem) => {
    setId(Number(item.id));
    setIsEquip(!item.isEquip);
    setItemName(item.name);
    setUpgrade(item.upgrade);
    setImage(item.image);
    setItemLevel(item.level);
    setLife(item.attributes.life);
    setItemForce(item.attributes.force);
    setItemDefense(item.attributes.defense);
    setItemAgility(item.attributes.agility);
    setItemIntelligence(item.attributes.intelligence);
    setItemResistance(item.attributes.resistance);
    setSlot(item.slot);
    showInfoItem();
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
    if (modalTrain) {
      console.log('callback');
    }
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
            Transformou-se em vampiro em {formattedDate}
          </span>
          <br />
          <span className='cursor-pointer' onClick={showMarry}>
            Solteiro(a) <span className='icon-marry-search'></span>
          </span>
        </div>
        <div className='status'>
          <div className='character'>
            <ul className='inventory'>
              {items?.map(item => {
                if (item.isEquip == false)
                  return (
                    <li key={item.id} className='inventory-slot'>
                      <div
                        className={`item cursor-pointer item-${item.image}`}
                        onClick={() => setItem(item)}
                      >
                        <p>{item.upgrade}</p>
                      </div>
                    </li>
                  );
              })}
              <li className='inventory-slot'></li>
              <li className='inventory-slot'></li>
              <li className='inventory-slot'></li>
              <li className='inventory-slot'></li>
              <li className='inventory-slot'></li>
            </ul>
            <div className='d-block'>
              <div className='profile-bg'>
                <div
                  className={`avatar avatar-${breed.toLowerCase()}-${gender.toLowerCase()}-${avatar}`}
                ></div>
                <div className={`breed-${breed.toLowerCase()}`}></div>
                <div className='level'>{level}</div>
                <div className={`name name-color-${color}`}>{name}</div>
                <div className='position'>{title}</div>
                <div className='age'>
                  {age} anos | {formattedGender}
                </div>
              </div>
              <div className='info'>
                <div className='wrapper tooltip'>
                  <span className='icon-gold'></span>{' '}
                  <span className='gold'>{gold}</span>
                  <span className='tooltip-text'>Seu ouro</span>
                </div>
                <div className='wrapper tooltip'>
                  <span className='power'></span> {power}
                  <span className='tooltip-text'>
                    Poder de Luta: Baseado em suas habilidades desconsiderando
                    equipamentos.
                  </span>
                </div>
                <div className='wrapper tooltip'>
                  <span className='combat'></span> {combat}
                  <span className='tooltip-text'>
                    Combatividade: Número de vitórias contra a raça inimiga nas
                    últimas 24 horas. Ajuda seu clã a reduzir o custo no treino
                    de atributos. Limit: 30
                  </span>
                </div>
                <div className='wrapper tooltip'>
                  <span className='grimoire'></span> {grimoire}
                  <span className='tooltip-text'>
                    Vitórias do Grimório: Usado para aprender magias após o
                    nível 10.
                  </span>
                </div>
              </div>
            </div>
            <ul className='equipped-item'>
              <li className='inventory-slot empty-head'>
                {items?.map(item => {
                  if (item.isEquip == true && item.slot === ItemSlotEnum.Head)
                    return (
                      <div
                        key={item.id}
                        className={`item cursor-pointer item-${item.image}`}
                        onClick={() => setItem(item)}
                      >
                        <p>1</p>
                      </div>
                    );
                })}
              </li>
              <li className='inventory-slot empty-neck'>
                {items?.map(item => {
                  if (item.isEquip == true && item.slot === ItemSlotEnum.Neck)
                    return (
                      <div
                        key={item.id}
                        className={`item cursor-pointer item-${item.image}`}
                        onClick={() => setItem(item)}
                      >
                        <p>1</p>
                      </div>
                    );
                })}
              </li>
              <li className='inventory-slot empty-torso'>
                {items?.map(item => {
                  if (item.isEquip == true && item.slot === ItemSlotEnum.Torso)
                    return (
                      <div
                        key={item.id}
                        className={`item cursor-pointer item-${item.image}`}
                        onClick={() => setItem(item)}
                      >
                        <p>1</p>
                      </div>
                    );
                })}
              </li>
              <li className='inventory-slot empty-hand'>
                {items?.map(item => {
                  if (item.isEquip == true && item.slot === ItemSlotEnum.Hand)
                    return (
                      <div
                        key={item.id}
                        className={`item cursor-pointer item-${item.image}`}
                        onClick={() => setItem(item)}
                      >
                        <p>1</p>
                      </div>
                    );
                })}
              </li>
            </ul>
          </div>
          <div className='d-block'>
            <div className='attributes'>
              <h4>Experiência</h4>
              <div className='bar'>
                <div
                  className='progress bar-blue'
                  style={{ width: (minExp * widthBar) / maxExp || 0 }}
                ></div>
                <p>
                  {minExp} / {maxExp}
                </p>
              </div>
              <h4>Vida</h4>
              <div className='bar'>
                <div
                  className='progress bar-red'
                  style={{ width: (minLife * widthBar) / maxLife || 0 }}
                ></div>
                <p>
                  {minLife} / {maxLife}
                </p>
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
                  style={{ width: (force * widthBar) / totalAttributes }}
                ></div>
                <p>{force}</p>
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
                  style={{ width: (defense * widthBar) / totalAttributes }}
                ></div>
                <p>{defense}</p>
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
                  style={{ width: (agility * widthBar) / totalAttributes }}
                ></div>
                <p>{agility}</p>
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
                  style={{ width: (intelligence * widthBar) / totalAttributes }}
                ></div>
                <p>{intelligence}</p>
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
                  style={{ width: (resistance * widthBar) / totalAttributes }}
                ></div>
                <p>{resistance}</p>
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
              name={itemName}
              upgrade={upgrade}
              image={image}
              level={itemLevel}
              attributes={{
                life: life,
                force: itemForce,
                defense: itemDefense,
                agility: itemAgility,
                intelligence: itemIntelligence,
                resistance: itemResistance,
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
