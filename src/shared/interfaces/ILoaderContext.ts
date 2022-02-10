import IActionLoader from './IActionLoader';
import IStateLoader from './IStateLoader';
import { Dispatch } from 'react';

export default interface ILoaderContext {
  dispatch?: Dispatch<IActionLoader>;
  state?: IStateLoader;
}
