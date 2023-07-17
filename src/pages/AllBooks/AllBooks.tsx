import BookCard from "../../components/BookCard";
import {
  useGetBooksFiltersQuery,
  useGetBooksQuery,
} from "../../redux/features/books/bookApi";
import {
  genreFilter,
  publicationYearFilter,
  searchState,
} from "../../redux/features/books/bookSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { IBook } from "../../types/globalTypes";

export default function AllBooks() {
  const dispatch = useAppDispatch();
  const { search, genre, publicationYear } = useAppSelector(
    (state) => state.book
  );
  const { data } = useGetBooksQuery({ search, genre, publicationYear });
  const { data: filters } = useGetBooksFiltersQuery(undefined);
  let books;

  if (genre && publicationYear) {
    books = data?.data?.filter(
      (item: IBook) =>
        item.genre === genre && item.publicationDate === publicationYear
    );
  } else if (genre) {
    books = data?.data?.filter((item: IBook) => item.genre === genre);
  } else if (publicationYear) {
    books = data?.data?.filter(
      (item: IBook) => item.publicationDate === publicationYear
    );
  } else {
    books = data?.data;
  }

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
              <select
                onChange={(e) => dispatch(genreFilter(e.target.value))}
                className="select select-bordered w-full "
              >
                <option disabled selected>
                  Filter by Genre
                </option>
                {filters?.data?.map((book: IBook) => (
                  <option>{book?.genre}</option>
                ))}
              </select>
            </div>
            <div className="space-y-3 ">
              <select
                onChange={(e) =>
                  dispatch(publicationYearFilter(e.target.value))
                }
                className="select select-bordered w-full "
              >
                <option disabled selected>
                  Filter by Publication Year
                </option>
                {filters?.data?.map((book: IBook) => (
                  <option>{book?.publicationDate}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className=" grid lg:grid-cols-3 grid-cols-1 gap-10 pb-20">
          {books?.map((book: IBook) => (
            <BookCard key={book._id} book={book as IBook} />
          ))}
        </div>
      </div>
    </div>
  );
}
