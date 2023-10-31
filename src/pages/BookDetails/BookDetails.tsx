/* eslint-disable @typescript-eslint/no-non-null-assertion */
import toast from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";
import image from "../../assets/book.jpg";
import {
  useDeleteBookMutation,
  useGetSingleBookQuery,
} from "../../redux/features/books/bookApi";
import { useAppSelector } from "../../redux/hook";
import { IBook } from "../../types/globalTypes";
import Review from "../../components/Review";
import avater from "../../assets/avater.png";

export default function BookDetails() {
  const { user } = useAppSelector((state) => state.user);
  const { id } = useParams();
  const navigate = useNavigate();

  console.log(confirm);

  const { data } = useGetSingleBookQuery(id);
  const book: IBook = data?.data;

  const [deleteBook, { isLoading }] = useDeleteBookMutation();

  const handleDelete = () => {
    deleteBook(id!);
    if (!isLoading) {
      toast.success("This Book deleted successfully");
      navigate("/all-books");
    }
  };

  return (
    <div>
      <div className="flex max-w-7xl mx-auto items-center border-b border-gray-300">
        <div className="w-[50%]">
          <img src={book?.image ? book.image : image} alt="" />
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
              <Link to={`/update-book/${book._id}`} className="btn btn-sm">
                <button className="btn btn-info btn-sm">Edit</button>
              </Link>
              <label
                htmlFor="confirm-modal"
                className="btn btn-error btn-sm ml-3"
              >
                Delete
              </label>
            </div>
          )}
        </div>
      </div>
      <div className="lg:mx-10 md:mx-6">
        <h1 className="text-xl font-semibold">{book?.description}</h1>
      </div>
      <div>
        <input type="checkbox" id="confirm-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <p className="py-2 text-xl">
              Are you want to delete{" "}
              <span className="font-bold">{book?.title}</span>
            </p>
            <div className="modal-action">
              <label
                onClick={handleDelete}
                htmlFor="confirm-modal"
                className="btn btn-error"
              >
                Confirm
              </label>
              <label htmlFor="confirm-modal" className="btn">
                Close!
              </label>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="my-4">
          <h2 className="text-3xl  font-semibold text-center">
            {user.email ? "Your opinion matters!" : "Review"}
          </h2>
          <hr />
        </div>
        {user.email && <Review id={book?._id} />}

        {book?.reviews.map((review: string) => (
          <>
            <div className="flex items-center justify-center gap-4 px-2 mb-5 lg:w-[600px]">
              <img
                src={avater}
                alt=""
                className="w-12 h-12 bg-center bg-cover rounded-full  bg-gray-700"
              />
              <div>
                <p className="flex items-center py-2 font-medium ">{review}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
