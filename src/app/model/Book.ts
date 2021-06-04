import { Category } from './Category';

export class Book {
  id: number;
  name: string;
  author: string;
  price: number;
  picByte: string;
  retrievedImage: string;
  category: Category;
  isAdded: boolean;
}
