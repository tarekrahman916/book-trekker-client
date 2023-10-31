import { Link } from "react-router-dom";
import { IBook } from "../types/globalTypes";

interface IProps {
  book: IBook;
}

export default function BookCard({ book }: IProps) {
  const { _id, title, genre, author, publishedYear, image } = book;
  return (
    <div className="card bg-base-100 shadow-xl rounded-2xl h-[480px] flex flex-col items-start justify-between p-5 overflow-hidden  border border-gray-100 hover:shadow-2xl hover:scale-[101%] transition-all gap-2">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="badge badge-outline">{genre}</div>
        <h2 className="card-title ">{title}</h2>
        <p>Author: {author}</p>
        <p>Published: {publishedYear}</p>
        <p className="font-medium">
          If a dog chews shoes whose shoes does he choose?
        </p>
        <div className="card-actions justify-end">
          <Link to={`/book-details/${_id}`} className="btn btn-sm">
            See Details
          </Link>
          <button className="btn btn-sm">Add Wishlist</button>
        </div>
      </div>
    </div>
  );
}
