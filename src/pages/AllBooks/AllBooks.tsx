import BookCard from "../../components/BookCard";
import { useGetBooksQuery } from "../../redux/features/books/bookApi";
import { searchState } from "../../redux/features/books/bookSlice";
import { useAppDispatch } from "../../redux/hook";
import { IBook } from "../../types/globalTypes";

export default function AllBooks() {
  const dispatch = useAppDispatch();

  const { data } = useGetBooksQuery(undefined);
  const books = data?.data;

  return (
    <div className="px-12">
      <div className="lg:w-1/2">
        <input
          type="text"
          onChange={(e) => dispatch(searchState(e.target.value))}
          placeholder="Search by title, author, or genre "
          className="input input-bordered w-full "
        />
      </div>
      <div className="">
        <div className="flex justify-between py-6">
          <div className="flex gap-6">
            <div>
              <select className="select select-bordered w-full ">
                <option disabled selected>
                  Filter by Genre
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>
            <div className="space-y-3 ">
              <select className="select select-bordered w-full ">
                <option disabled selected>
                  Filter by Publication Year
                </option>
                <option>Han Solo</option>
                <option>Greedo</option>
              </select>
            </div>
          </div>
        </div>
        <div className=" grid lg:grid-cols-3 grid-cols-1 gap-10 pb-20">
          {books?.map((book: IBook) => (
            <BookCard book={book as IBook} />
          ))}
        </div>
      </div>
    </div>
  );
}
