import React, { useState } from 'react';
import routes from '../../routes/routes';
import translate from '../../translate/translate';
import { Link } from 'react-router-dom';

function MenuDropdown() {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className='menu'>
      <div className='menu-mobile'>
        <div
          className='icon-mini-menu cursor-pointer'
          onClick={toggleMenu}
        ></div>
        <Link to={routes.status}>
          <div className='icon-battle'></div>
        </Link>
        <Link to={routes.status}>
          <div className='icon-hunt'></div>
        </Link>
      </div>
      <div className={`menu-dropdown ${menu ? 'd-block' : ''}`}>
        <div className='dropdown'>
          <button className='dropdown-link'>
            {translate.menuDropdown.statistics}
            <span className='arrow-down'></span>
          </button>
          <div className='dropdown-content'>
            <Link to={routes.status}>{translate.menuDropdown.status}</Link>
            <Link to={routes.grimoire}>{translate.menuDropdown.grimoire}</Link>
            <Link to={routes.sentinels}>
              {translate.menuDropdown.sentinels}
            </Link>
            <Link to={routes.dailyTasks}>
              {translate.menuDropdown.dailyTasks}
            </Link>
            <Link to={routes.achievements}>
              {translate.menuDropdown.achievements}
            </Link>
            <Link to={routes.exchangeStones}>
              {translate.menuDropdown.exchangeStones}
            </Link>
            <Link to={routes.honorPoints}>
              {translate.menuDropdown.honorPoints}
            </Link>
          </div>
        </div>
        <div className='dropdown'>
          <button className='dropdown-link'>
            {translate.menuDropdown.city}
            <span className='arrow-down'></span>
          </button>
          <div className='dropdown-content'>
            <Link to={routes.market}>{translate.menuDropdown.market}</Link>
            <Link to={routes.premiumMarket}>
              {translate.menuDropdown.premiumMarket}
            </Link>
            <Link to={routes.blacksmith}>
              {translate.menuDropdown.blacksmith}
            </Link>
            <Link to={routes.enchantment}>
              {translate.menuDropdown.enchantment}
            </Link>
            <Link to={routes.cemetery}>{translate.menuDropdown.cemetery}</Link>
            <Link to={routes.temple}>{translate.menuDropdown.temple}</Link>
            <Link to={routes.master}>{translate.menuDropdown.master}</Link>
            <Link to={routes.regions}>{translate.menuDropdown.regions}</Link>
          </div>
        </div>
        <div className='dropdown'>
          <button className='dropdown-link'>
            {translate.menuDropdown.battlefield}
            <span className='arrow-down'></span>
          </button>
          <div className='dropdown-content'>
            <Link to={routes.battlefield}>
              {translate.menuDropdown.battlefieldCreatures}
            </Link>
            <Link to={routes.battlefieldEnemies}>
              {translate.menuDropdown.battlefieldEnemies}
            </Link>
            <Link to={routes.battlefieldRenegades}>
              {translate.menuDropdown.battlefieldRenegades}
            </Link>
            <Link to={routes.tormentus}>
              {translate.menuDropdown.tormentus}
            </Link>
            <Link to={routes.khepriArena}>
              {translate.menuDropdown.khepriArena}
            </Link>
          </div>
        </div>
        <div className='dropdown'>
          <button className='dropdown-link'>
            {translate.menuDropdown.clan}
            <span className='arrow-down'></span>
          </button>
          <div className='dropdown-content'>
            <Link to={routes.clan}>{translate.menuDropdown.myClan}</Link>
            <Link to={routes.clanList}>{translate.menuDropdown.clanList}</Link>
            <Link to={routes.clanCrete}>
              {translate.menuDropdown.createClan}
            </Link>
          </div>
        </div>
        <div className='dropdown'>
          <button className='dropdown-link'>
            {translate.menuDropdown.journal}
            <span className='arrow-down'></span>
          </button>
          <div className='dropdown-content'>
            <Link to={routes.ranking}>{translate.menuDropdown.ranking}</Link>
            <Link to={routes.tormentusScore}>
              {translate.menuDropdown.tormentusScore}
            </Link>
            <Link to={routes.leadership}>
              {translate.menuDropdown.leadership}
            </Link>
            <Link to={routes.itemsUnique}>
              {translate.menuDropdown.itemsUnique}
            </Link>
            <Link to={routes.boss}>{translate.menuDropdown.boss}</Link>
            <Link to={routes.heroes}>{translate.menuDropdown.heroes}</Link>
            <Link to={routes.renegades}>
              {translate.menuDropdown.renegades}
            </Link>
            <Link to={routes.searchPlayer}>
              {translate.menuDropdown.searchPlayer}
            </Link>
          </div>
        </div>
        <div className='dropdown'>
          <Link to={routes.messages}>
            <button className='dropdown-link'>
              {translate.menuDropdown.messages}
            </button>
          </Link>
        </div>
        <div className='dropdown'>
          <button className='dropdown-link'>
            {translate.menuDropdown.help}
            <span className='arrow-down'></span>
          </button>
          <div className='dropdown-content'>
            <Link to={routes.manual}>{translate.menuDropdown.manual}</Link>
            <Link to={routes.contact}>{translate.menuDropdown.contact}</Link>
          </div>
        </div>
        <div className='dropdown'>
          <button className='dropdown-link'>
            {translate.menuDropdown.account}
            <span className='arrow-down'></span>
          </button>
          <div className='dropdown-content'>
            <Link to={routes.bloodCrystals}>
              {translate.menuDropdown.bloodCrystals}
            </Link>
            <Link to={routes.changeCharacterName}>
              {translate.menuDropdown.changeCharacterName}
            </Link>
            <Link to={routes.editProfile}>
              {translate.menuDropdown.editProfile}
            </Link>
            <Link to={routes.changeGender}>
              {translate.menuDropdown.changeGender}
            </Link>
            <Link to={routes.changeBreed}>
              {translate.menuDropdown.changeBreed}
            </Link>
            <Link to={routes.login}>{translate.menuDropdown.logout}</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuDropdown;
