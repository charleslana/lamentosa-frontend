import IItem from '../../../shared/interfaces/IItem';
import TypeMarketEnum from '../enum/TypeMarketEnum';

interface IMarket {
  item: IItem;
  seller: string;
  gold: number;
  crystal: number;
  price: {
    gold: number;
    crystal: number;
  };
  type: TypeMarketEnum;
}

export default IMarket;
