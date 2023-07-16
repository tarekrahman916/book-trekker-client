export interface IBook {
  _id: string;
  title: string;
  description?: string;
  author: string;
  genre: string;
  publicationDate: Date;
  userEmail: string;
  reviews?: string[];
  createdAt: Date;
  updatedAt: Date;
}
