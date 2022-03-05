import MarketType from '../types/MarketType';
import React, { useState } from 'react';
import TypeMarketEnum from '../enum/TypeMarketEnum';

type IProps = {
  tabFunction: (type: TypeMarketEnum) => void;
};

function TabBarMarket(props: IProps) {
  const [active, setActive] = useState<MarketType>(
    Object.keys(TypeMarketEnum)[
      Object.values(TypeMarketEnum).indexOf(TypeMarketEnum.Featured)
    ] as MarketType
  );

  const changeActive = (type: MarketType) => {
    setActive(type);
    props.tabFunction(TypeMarketEnum[type]);
  };

  return (
    <>
      <nav>
        {Object.entries(TypeMarketEnum).map(([key, value]) => (
          <button
            key={key}
            className={key === active ? 'active' : ''}
            onClick={() => changeActive(key as MarketType)}
          >
            {value}
          </button>
        ))}
      </nav>
    </>
  );
}

export default TabBarMarket;
