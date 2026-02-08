
export interface Component {
  name: string;
  category: string;
  price: number;
  spec?: string;
}

export interface PCBuild {
  id: string;
  title: string;
  description: string;
  priceBracket: number;
  usage: 'Gaming' | 'Office' | 'Creative' | 'Workstation';
  components: Component[];
  totalPrice: number;
  image: string;
}

export type BudgetRange = 'low' | 'mid' | 'high' | 'enthusiast';
