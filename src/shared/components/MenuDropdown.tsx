import React, { useState } from 'react';
import routes from '../../routes/routes';
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
            Estatísticas<span className='arrow-down'></span>
          </button>
          <div className='dropdown-content'>
            <Link to={routes.status}>Meu Personagem</Link>
            <Link to={routes.grimoire}>Meu Grimório</Link>
            <Link to={routes.sentinels}>Minhas Sentinelas</Link>
            <Link to={routes.dailyTasks}>Tarefas Diárias</Link>
            <Link to={routes.achievements}>Conquistas</Link>
            <Link to={routes.exchangeStones}>Troca de Soul Stones</Link>
            <Link to={routes.honorPoints}>Pontos de Honra</Link>
          </div>
        </div>
        <div className='dropdown'>
          <button className='dropdown-link'>
            Cidade<span className='arrow-down'></span>
          </button>
          <div className='dropdown-content'>
            <Link to={routes.status}>O Mercado</Link>
            <Link to={routes.status}>Mercado Premium</Link>
            <Link to={routes.status}>O Ferreiro</Link>
            <Link to={routes.status}>A Feiticeira</Link>
            <Link to={routes.status}>Cemitério</Link>
            <Link to={routes.status}>Templo</Link>
            <Link to={routes.status}>Meu Mestre</Link>
            <Link to={routes.status}>As 7 Regiões</Link>
          </div>
        </div>
        <div className='dropdown'>
          <button className='dropdown-link'>
            Campo de Batalha<span className='arrow-down'></span>
          </button>
          <div className='dropdown-content'>
            <Link to={routes.status}>Caçar Criaturas</Link>
            <Link to={routes.status}>Caçar lobisomens</Link>
            <Link to={routes.status}>Caçar Renegados</Link>
            <Link to={routes.status}>Tormentus War</Link>
            <Link to={routes.status}>Khepri Arena</Link>
          </div>
        </div>
        <div className='dropdown'>
          <button className='dropdown-link'>
            Clãs<span className='arrow-down'></span>
          </button>
          <div className='dropdown-content'>
            <Link to={routes.status}>Meu Clã</Link>
            <Link to={routes.status}>Todos os Clãs</Link>
            <Link to={routes.status}>Criar um Clã</Link>
          </div>
        </div>
        <div className='dropdown'>
          <button className='dropdown-link'>
            Jornal<span className='arrow-down'></span>
          </button>
          <div className='dropdown-content'>
            <Link to={routes.status}>Ranking</Link>
            <Link to={routes.status}>Placar Tormentus</Link>
            <Link to={routes.status}>Liderança</Link>
            <Link to={routes.status}>Itens Únicos</Link>
            <Link to={routes.status}>Bosses</Link>
            <Link to={routes.status}>Heróis</Link>
            <Link to={routes.status}>Renegados</Link>
            <Link to={routes.status}>Procurar Personagem</Link>
          </div>
        </div>
        <div className='dropdown'>
          <Link to={routes.status}>
            <button className='dropdown-link'>Mensageiro</button>
          </Link>
        </div>
        <div className='dropdown'>
          <button className='dropdown-link'>
            Ajuda<span className='arrow-down'></span>
          </button>
          <div className='dropdown-content'>
            <Link to={routes.status}>Aprenda a jogar</Link>
            <Link to={routes.status}>O Manual dos Amaldiçoados</Link>
            <Link to={routes.status}>Contato</Link>
          </div>
        </div>
        <div className='dropdown'>
          <button className='dropdown-link'>
            Conta<span className='arrow-down'></span>
          </button>
          <div className='dropdown-content'>
            <Link to={routes.status}>Cristais de Sangue</Link>
            <Link to={routes.status}>Mudar seu Nome</Link>
            <Link to={routes.status}>Editar seu perfil</Link>
            <Link to={routes.status}>Mudar Gênero</Link>
            <Link to={routes.status}>Mudar de Raça</Link>
            <Link to={routes.login}>Sair</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuDropdown;
