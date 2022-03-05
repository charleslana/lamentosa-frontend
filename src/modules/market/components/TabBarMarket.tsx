import React, { useState } from 'react';
import TypeMarketEnum from '../enum/TypeMarketEnum';

function TabBarMarket() {
  const [active, setActive] = useState(TypeMarketEnum.All as string);

  type marketType = keyof typeof TypeMarketEnum;

  const changeActive = (type: marketType) => {
    setActive(type);
  };

  return (
    <>
      <nav>
        {Object.values(TypeMarketEnum).map(value => (
          <button
            key={value}
            className={value == active ? 'active' : ''}
            onClick={() => changeActive(value as marketType)}
          >
            {value}
          </button>
        ))}
      </nav>
    </>
  );
}

export default TabBarMarket;
