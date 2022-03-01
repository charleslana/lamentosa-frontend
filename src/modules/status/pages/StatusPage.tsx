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
import translate from '../../../translate/translate';
import userDetailsService from '../services/UserDetailsService';
import { formatDate, formatNumber } from '../../../shared/utils/Utils';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function StatusPage() {
  const navigate = useNavigate();
  const { showLoading, hideLoading } = loaderService();
  const { showModal } = modalService();
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
  const [description, setDescription] = useState('');
  const [modalDescription, setModalDescription] = useState(false);
  const [honorVictories, setHonorVictories] = useState(0);
  const [honorVictoriesRanking, setHonorVictoriesRanking] = useState(0);
  const [totalBattles, setTotalBattles] = useState(0);
  const [totalBattlesRanking, setTotalBattlesRanking] = useState(0);
  const [battlesWon, setBattlesWon] = useState(0);
  const [battlesWonRanking, setBattlesWonRanking] = useState(0);
  const [lostBattles, setLostBattles] = useState(0);
  const [lostBattlesRanking, setLostBattlesRanking] = useState(0);
  const [draws, setDraws] = useState(0);
  const [drawsRanking, setDrawsRanking] = useState(0);
  const [damageCaused, setDamageCaused] = useState(0);
  const [damageCausedRanking, setDamageCausedRanking] = useState(0);
  const [damageSuffered, setDamageSuffered] = useState(0);
  const [damageSufferedRanking, setDamageSufferedRanking] = useState(0);
  const [goldEarned, setGoldEarned] = useState(0);
  const [goldEarnedRanking, setGoldEarnedRanking] = useState(0);
  const [lostGold, setLostGold] = useState(0);
  const [lostGoldRanking, setLostGoldRanking] = useState(0);
  const [tormentusPoints, setTormentusPoints] = useState(0);
  const [tormentusPointsRanking, setTormentusPointsRanking] = useState(0);
  const [limitCombat, setLimitCombat] = useState(0);

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

  useEffect(() => {
    requestUserDetails();
  }, []);

  const formatGender = () => {
    if (gender.toLowerCase() === 'male') {
      setFormattedGender('Masculino');
      return;
    }
    setFormattedGender('Feminino');
  };

  const loadData = () => {
    setFormattedDate(formatDate(new Date('2022-02-18 10:00:00')));
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
    setDescription('');
    setHonorVictories(0);
    setHonorVictoriesRanking(0);
    setTotalBattles(0);
    setTotalBattlesRanking(0);
    setBattlesWon(0);
    setBattlesWonRanking(0);
    setLostBattles(0);
    setLostBattlesRanking(0);
    setDraws(0);
    setDrawsRanking(0);
    setDamageCaused(0);
    setDamageCausedRanking(0);
    setDamageSuffered(0);
    setDamageSufferedRanking(0);
    setGoldEarned(0);
    setGoldEarnedRanking(0);
    setLostGold(0);
    setLostGoldRanking(0);
    setTormentusPoints(0);
    setTormentusPointsRanking(0);
    setLimitCombat(0);
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
        <h1 className='title text-center text-bold'>
          {translate.status.details}
        </h1>
        <p className='sub-title text-center'>Amaldiçoado Comum</p>
        <div className='text-center'>
          <span className='uppercase'>
            {translate.formatString(translate.status.transformDate, {
              breed: breed,
              date: formattedDate,
            })}
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
                  {formatNumber(age)} anos | {formattedGender}
                </div>
              </div>
              <div className='info'>
                <div className='wrapper tooltip'>
                  <span className='icon-gold'></span>{' '}
                  <span className='gold'>{formatNumber(gold)}</span>
                  <span className='tooltip-text'>
                    {translate.status.tooltipGold}
                  </span>
                </div>
                <div className='wrapper tooltip'>
                  <span className='power'></span> {formatNumber(power)}
                  <span className='tooltip-text'>
                    {translate.status.tooltipPower}
                  </span>
                </div>
                <div className='wrapper tooltip'>
                  <span className='combat'></span> {combat}
                  <span className='tooltip-text'>
                    {translate.status.tooltipCombat}
                  </span>
                </div>
                <div className='wrapper tooltip'>
                  <span className='grimoire'></span> {formatNumber(grimoire)}
                  <span className='tooltip-text'>
                    {translate.status.tooltipGrimoire}
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
              <h4>{translate.status.experience}</h4>
              <div className='bar'>
                <div
                  className='progress bar-blue'
                  style={{ width: (minExp * widthBar) / maxExp || 0 }}
                ></div>
                <p>
                  {formatNumber(minExp)} / {formatNumber(maxExp)}
                </p>
              </div>
              <h4>{translate.status.life}</h4>
              <div className='bar'>
                <div
                  className='progress bar-red'
                  style={{ width: (minLife * widthBar) / maxLife || 0 }}
                ></div>
                <p>
                  {formatNumber(minLife)} / {formatNumber(maxLife)}
                </p>
              </div>
              <h4 className='tooltip'>
                {translate.status.force}
                <span className='tooltip-text text-bold'>
                  {translate.status.tooltipForce}
                </span>
              </h4>
              <div className='bar'>
                <div
                  className='progress bar-orange'
                  style={{ width: (force * widthBar) / totalAttributes }}
                ></div>
                <p>{formatNumber(force)}</p>
              </div>
              <h4 className='tooltip'>
                {translate.status.defense}
                <span className='tooltip-text text-bold'>
                  {translate.status.tooltipDefense}
                </span>
              </h4>
              <div className='bar'>
                <div
                  className='progress bar-orange'
                  style={{ width: (defense * widthBar) / totalAttributes }}
                ></div>
                <p>{formatNumber(defense)}</p>
              </div>
              <h4 className='tooltip'>
                {translate.status.agility}
                <span className='tooltip-text text-bold'>
                  {translate.status.tooltipAgility}
                </span>
              </h4>
              <div className='bar'>
                <div
                  className='progress bar-orange'
                  style={{ width: (agility * widthBar) / totalAttributes }}
                ></div>
                <p>{formatNumber(agility)}</p>
              </div>
              <h4 className='tooltip'>
                {translate.status.intelligence}
                <span className='tooltip-text text-bold'>
                  {translate.status.tooltipIntelligence}
                </span>
              </h4>
              <div className='bar'>
                <div
                  className='progress bar-orange'
                  style={{ width: (intelligence * widthBar) / totalAttributes }}
                ></div>
                <p>{formatNumber(intelligence)}</p>
              </div>
              <h4 className='tooltip'>
                {translate.status.resistance}
                <span className='tooltip-text text-bold'>
                  {translate.status.tooltipResistance}
                </span>
              </h4>
              <div className='bar'>
                <div
                  className='progress bar-orange'
                  style={{ width: (resistance * widthBar) / totalAttributes }}
                ></div>
                <p>{formatNumber(resistance)}</p>
              </div>
            </div>
            <h1 className='title train text-bold' onClick={showTrain}>
              {translate.status.train}
            </h1>
          </div>
        </div>
        <h1 className='title text-bold'>{translate.status.description}</h1>
        <p>{description ? description : translate.status.noDescription}</p>
        <button onClick={showDescription}>{translate.status.buttonEdit}</button>
        <h1 className='title text-bold'>{translate.status.statistics}</h1>
        <ul className='dynamic-table'>
          <li>
            <span>{translate.status.honorVictories}</span>
            <span>{formatNumber(honorVictories)}</span>
            <span>
              {honorVictoriesRanking > 0
                ? `${formatNumber(honorVictoriesRanking)}º`
                : '-'}
              <br />
              {translate.status.ranking}
            </span>
          </li>
          <li>
            <span>{translate.status.totalBattles}</span>
            <span>{formatNumber(totalBattles)}</span>
            <span>
              {totalBattlesRanking > 0
                ? `${formatNumber(totalBattlesRanking)}º`
                : '-'}
              <br />
              {translate.status.ranking}
            </span>
          </li>
          <li>
            <span>{translate.status.battlesWon}</span>
            <span>{formatNumber(battlesWon)}</span>
            <span>
              {battlesWonRanking > 0
                ? `${formatNumber(battlesWonRanking)}º`
                : '-'}
              <br />
              {translate.status.ranking}
            </span>
          </li>
          <li>
            <span>{translate.status.lostBattles}</span>
            <span>{formatNumber(lostBattles)}</span>
            <span>
              {lostBattlesRanking > 0
                ? `${formatNumber(lostBattlesRanking)}º`
                : '-'}
              <br />
              {translate.status.ranking}
            </span>
          </li>
          <li>
            <span>{translate.status.draws}</span>
            <span>{formatNumber(draws)}</span>
            <span>
              {drawsRanking > 0 ? `${formatNumber(drawsRanking)}º` : '-'}
              <br />
              {translate.status.ranking}
            </span>
          </li>
          <li>
            <span>{translate.status.damageCaused}</span>
            <span>{formatNumber(damageCaused)}</span>
            <span>
              {damageCausedRanking > 0
                ? `${formatNumber(damageCausedRanking)}º`
                : '-'}
              <br />
              {translate.status.ranking}
            </span>
          </li>
          <li>
            <span>{translate.status.damageSuffered}</span>
            <span>{formatNumber(damageSuffered)}</span>
            <span>
              {damageSufferedRanking > 0
                ? `${formatNumber(damageSufferedRanking)}º`
                : '-'}
              <br />
              {translate.status.ranking}
            </span>
          </li>
          <li>
            <span>{translate.status.goldEarned}</span>
            <span>{formatNumber(goldEarned)}</span>
            <span>
              {goldEarnedRanking > 0
                ? `${formatNumber(goldEarnedRanking)}º`
                : '-'}
              <br />
              {translate.status.ranking}
            </span>
          </li>
          <li>
            <span>{translate.status.lostGold}</span>
            <span>{formatNumber(lostGold)}</span>
            <span>
              {lostGoldRanking > 0 ? `${formatNumber(lostGoldRanking)}º` : '-'}
              <br />
              {translate.status.ranking}
            </span>
          </li>
          <li>
            <span>{translate.status.tormentusPoints}</span>
            <span>{formatNumber(tormentusPoints)}</span>
            <span>
              {tormentusPointsRanking > 0
                ? `${formatNumber(tormentusPointsRanking)}º`
                : '-'}
              <br />
              {translate.status.ranking}
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
        <CustomModal
          children={<Description description={description} />}
          showModal={showDescription}
        />
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
