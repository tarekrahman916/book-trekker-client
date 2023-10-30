import { useParams } from "react-router-dom";
import image from "../../assets/book.jpg";
import { useGetSingleBookQuery } from "../../redux/features/books/bookApi";
import { useAppSelector } from "../../redux/hook";
import { IBook } from "../../types/globalTypes";

export default function BookDetails() {
  const { user } = useAppSelector((state) => state.user);
  const { id } = useParams();

  const { data } = useGetSingleBookQuery(id);
  const book: IBook = data?.data;
  console.log(book);

  return (
    <div>
      <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300">
        <div className="w-[50%]">
          <img src={image} alt="" />
        </div>
        <div className="w-[50%] space-y-3 mx-5">
          <p className="text-2xl">{book?.title}</p>
          <p className="text-xm">
            <span className="font-bold">Author:</span> {book?.author}
          </p>

          <div className="flex gap-5">
            <p className="text-xl">
              {" "}
              <span className="font-bold">Genre:</span> {book?.genre}
            </p>
            <p className="text-xl">
              <span className="font-bold">Published:</span>{" "}
              {book?.publishedYear}
            </p>
          </div>

          {user?.email === book?.userEmail && (
            <div>
              <button className="btn btn-info btn-sm">Edit</button>
              <button className="btn btn-error btn-sm ml-3">Delete</button>
            </div>
          )}
        </div>
      </div>
      <div className="lg:mx-10 md:mx-6">
        <h1 className="text-xl font-semibold">{book?.description}</h1>
      </div>
    </div>
  );
}
