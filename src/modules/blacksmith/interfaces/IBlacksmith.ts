import IItem from '../../../shared/interfaces/IItem';

interface IBlacksmith {
  item: IItem;
  cost: {
    grimoire: number;
    crystal: number;
    greenStone: number;
    yellowStone: number;
    orangeStone: number;
    blueStone: number;
    redStone: number;
  };
}

export default IBlacksmith;
