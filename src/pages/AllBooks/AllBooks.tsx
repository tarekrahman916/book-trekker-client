/* eslint-disable no-unsafe-optional-chaining */
import { useState } from "react";
import BookCard from "../../components/BookCard";
import Loader from "../../components/Loader";
import { useGetBooksQuery } from "../../redux/features/books/bookApi";
import {
  genreFilter,
  publicationYearFilter,
  searchState,
} from "../../redux/features/books/bookSlice";
import { useAppDispatch, useAppSelector } from "../../redux/hook";
import { IBook } from "../../types/globalTypes";

export default function AllBooks() {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useAppDispatch();
  const { genre, search, publicationYear, limit } = useAppSelector(
    (state) => state.book
  );

  console.log(currentPage);

  const options = {
    search: search,
    page: currentPage,
  };

  const { data, isLoading } = useGetBooksQuery(options);

  let totalPages;

  if (data) {
    const total = data.meta.total;
    totalPages = Math.ceil(total / 10);
  }

  const pageNumbers = Array.from(
    { length: totalPages as number },
    (_, index) => index + 1
  );

  const genres: string[] = [];
  const publishedYears: string[] = [];

  data?.data?.map((item: IBook) => {
    if (!genres.includes(item.genre)) {
      genres.push(item.genre);
    }
    if (!publishedYears.includes(item.publishedYear)) {
      publishedYears.push(item.publishedYear);
    }
  });

  let books;

  if (genre && publicationYear) {
    books = data?.data?.filter(
      (item: IBook) =>
        item.genre === genre && item.publishedYear === publicationYear
    );
  } else if (genre) {
    books = data?.data?.filter((item: IBook) => item.genre === genre);
  } else if (publicationYear) {
    books = data?.data?.filter(
      (item: IBook) => item.publishedYear === publicationYear
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
                <option value="">All</option>
                {genres?.map((item: string) => (
                  <option>{item}</option>
                ))}
              </select>
            </div>
            <div className="space-y-3">
              <select
                onChange={(e) =>
                  dispatch(publicationYearFilter(e.target.value))
                }
                className="select select-bordered w-full "
              >
                <option disabled selected>
                  Filter by Publication Year
                </option>
                <option value="">All</option>
                {publishedYears?.map((year) => (
                  <option>{year}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <div>
            <div className=" grid lg:grid-cols-3 grid-cols-1 gap-10 pb-5">
              {books?.map((book: IBook) => (
                <BookCard key={book._id} book={book as IBook} />
              ))}
            </div>
            <div className="join flex justify-center items-center mb-20">
              {pageNumbers.map((page) => (
                <button
                  key={page}
                  className={`join-item btn btn-primary ${
                    page === currentPage ? "btn-active" : ""
                  }`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
