import Api from '../../../shared/config/Api';
import ICreateUser from '../interfaces/ICreateUser';

const createUserService = async (
  userCreate: ICreateUser
): Promise<ICreateUser> => {
  await Api.post('/public/users', {
    email: userCreate.email,
    password: userCreate.password,
    name: userCreate.name,
    gender: userCreate.gender,
    breed: userCreate.breed,
  })
    .then(response => {
      userCreate = response.data;
    })
    .catch(error => {
      if (error.response !== undefined) {
        return Promise.reject(error.response.data);
      }
      return Promise.reject(error);
    });
  return userCreate;
};

export default createUserService;
