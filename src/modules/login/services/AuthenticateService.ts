import Api from '../../../shared/config/Api';
import IAuthenticate from '../interfaces/IAuthenticate';

const authenticateService = async (
  authenticate: IAuthenticate
): Promise<IAuthenticate> => {
  await Api.post('/public/users/authenticate', {
    email: authenticate.email,
    password: authenticate.password,
  })
    .then(response => {
      authenticate = response.data;
    })
    .catch(error => {
      if (error.response !== undefined) {
        return Promise.reject(error.response.data);
      }
      return Promise.reject(error);
    });
  return authenticate;
};

export default authenticateService;
