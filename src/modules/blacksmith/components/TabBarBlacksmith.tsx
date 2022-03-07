import CustomModal from '../../../shared/components/CustomModal';
import Instructions from './Instructions';
import React, { useState } from 'react';
import routes from '../../../routes/routes';
import { Link, useLocation } from 'react-router-dom';

function TabBarBlacksmith() {
  const [modal, setModal] = useState(false);
  const { pathname } = useLocation();

  const showInstructions = () => {
    setModal(!modal);
  };

  return (
    <>
      <nav>
        <Link
          to={routes.blacksmith}
          className={pathname === routes.blacksmith ? 'active' : ''}
        >
          Melhorar
        </Link>
        <Link
          to={routes.blacksmithCombine}
          className={
            pathname.includes(routes.blacksmithCombine) ? 'active' : ''
          }
        >
          Combinar
        </Link>
        <button onClick={showInstructions}>Instruções</button>
      </nav>
      {modal ? (
        <CustomModal children={<Instructions />} showModal={showInstructions} />
      ) : (
        ''
      )}
    </>
  );
}

export default TabBarBlacksmith;
