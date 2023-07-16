export interface IBook {
  _id: string;
  title: string;
  description?: string;
  author: string;
  genre: string;
  publicationDate: string;
  userEmail: string;
  reviews?: string[];
  createdAt: Date;
  updatedAt: Date;
}
