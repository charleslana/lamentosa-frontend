import IActionLoader from '../interfaces/IActionLoader';
import IStateLoader from '../interfaces/IStateLoader';
import LoaderEnum from '../enum/LoaderEnum';

const loaderReducer = (
  state: IStateLoader,
  action: IActionLoader
): IStateLoader => {
  switch (action.type) {
    case LoaderEnum.HIDE_LOADER:
      return {
        loading: false,
      };
    case LoaderEnum.SHOW_LOADER:
      return {
        loading: true,
      };
    default:
      return state;
  }
};

export default loaderReducer;
