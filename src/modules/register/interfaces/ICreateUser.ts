export default interface ICreateUser {
  email: string;
  password: string;
  name: string;
  gender: string;
  breed: string;
  message?: string;
  status?: number;
}
