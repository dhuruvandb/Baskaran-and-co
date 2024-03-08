export interface stateValues {
  productDetails: {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
  }[];
  cartValue: { [key: string]: number };
  isLoggedin: boolean;
}
