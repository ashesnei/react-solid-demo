export type Category = 'books' | 'electronics' | 'clothing';

export interface Product {
  id: number;
  name: string;
  category: Category;
}
