import { useParams } from "react-router-dom";
import image from "../../assets/book.jpg";
import { useGetSingleBookQuery } from "../../redux/features/books/bookApi";
import { useAppSelector } from "../../redux/hook";

export default function BookDetails() {
  const { user } = useAppSelector((state) => state.user);
  const { id } = useParams();

  const { data } = useGetSingleBookQuery(id);
  const book = data?.data;
  console.log(book);

  return (
    <div>
      <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300">
        <div className="w-[50%]">
          <img src={image} alt="" />
        </div>
        <div className="w-[50%] space-y-3 mx-5">
          <p className="text-sm">Author: {book?.author}</p>
          <h1 className="text-3xl font-semibold">{book?.description}</h1>
          <p className="text-xl">Genre: {book?.genre}</p>
          <p className="text-xl">Published: {book?.publicationDate}</p>

          {user?.email === book?.userEmail && (
            <div>
              <button className="btn btn-info btn-sm">Edit</button>
              <button className="btn btn-error btn-sm ml-3">Delete</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
