import ItemRarityEnum from '../enum/ItemRarityEnum';
import ItemSlotEnum from '../enum/ItemSlotEnum';

interface IItem {
  id?: number;
  isEquip: boolean;
  name: string;
  upgrade: number;
  image: number;
  level: number;
  attributes: {
    life: number;
    force: number;
    defense: number;
    agility: number;
    intelligence: number;
    resistance: number;
  };
  slot: ItemSlotEnum;
  rarity?: ItemRarityEnum;
}

export default IItem;
