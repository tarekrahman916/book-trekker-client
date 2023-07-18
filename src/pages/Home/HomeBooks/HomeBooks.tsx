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
      <h1 className="text-2xl font-bold">Top Books</h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 pb-20">
        {data?.data.map((book: IBook) => (
          <BookCard book={book as IBook} />
        ))}
      </div>
    </div>
  );
}
