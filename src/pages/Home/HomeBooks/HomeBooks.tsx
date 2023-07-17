import BookCard from "../../../components/BookCard";
import { useGetBooksQuery } from "../../../redux/features/books/bookApi";
import { useAppSelector } from "../../../redux/hook";
import { IBook } from "../../../types/globalTypes";

export default function HomeBooks() {
  const { search } = useAppSelector((state) => state.book);
  const { data } = useGetBooksQuery({
    search,
    limit: 10,
  });
  return (
    <div className="py-5 px-10">
      <h1>Top Books</h1>
      <div className="grid lg:grid-cols-3 gap-10 pt-6">
        {data?.data.map((book: IBook) => (
          <BookCard book={book as IBook} />
        ))}
      </div>
    </div>
  );
}
