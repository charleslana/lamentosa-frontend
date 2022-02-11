export default interface IAuthenticate {
  email: string;
  password: string;
  data?: {
    token: string;
  };
}
