import Api from '../../../shared/config/Api';
import IUserDetails from '../interfaces/IUserDetails';

const userDetailsService = async (): Promise<IUserDetails> => {
  let userDetails: IUserDetails = <IUserDetails>{};
  await Api.get('/users/details')
    .then(response => {
      userDetails = response.data;
    })
    .catch(error => {
      if (error.response !== undefined) {
        return Promise.reject(error.response.data);
      }
      return Promise.reject(error);
    });
  return userDetails;
};

export default userDetailsService;
