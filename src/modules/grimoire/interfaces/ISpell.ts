import TypeMasterEnum from '../enum/TypeMasterEnum';

export default interface ISpell {
  name: string;
  image: number;
  description: string;
  victories: number[];
  typeMaster: TypeMasterEnum;
}
