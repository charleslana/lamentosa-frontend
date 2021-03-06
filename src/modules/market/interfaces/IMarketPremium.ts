interface IMarketPremium {
  id: number;
  name: string;
  image: number;
  description: string;
  quantity: number;
  price: number;
  gold?: number;
  discount?: number;
}

export default IMarketPremium;
