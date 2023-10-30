export interface IBook {
  _id: string;
  title: string;
  description?: string;
  author: string;
  genre: string;
  publishedYear: string;
  userEmail: string;
  reviews?: string[];
  createdAt: Date;
  updatedAt: Date;
}

// export type IBookInput = {
//   title: string;
//   description?: string;
//   author: string;
//   genre: string;
//   publishedYear: string;
//   userEmail: string;
//   image?: string;
// };
