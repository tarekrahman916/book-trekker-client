import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetSingleBookQuery,
  useUpdateBookMutation,
} from "../../redux/features/books/bookApi";
import { IBook } from "../../types/globalTypes";

interface BookFormInput {
  title: string;
  image: string;
  author: string;
  genre: string;
  publishedYear: string;
  description: string;
}

const EditBook = () => {
  const { id } = useParams();

  const { data } = useGetSingleBookQuery(id);
  const book: IBook = data?.data;
  const [updateBook, { isLoading, isSuccess }] = useUpdateBookMutation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<BookFormInput>();

  const onSubmit = (data: any) => {
    for (const key of Object.keys(data)) {
      if (data[key] === "") {
        delete data[key];
      }
    }

    const options = {
      id,
      bookData: data,
    };

    updateBook(options);

    console.log(data, isSuccess, updateBook);

    if (!isLoading) {
      toast.success("Book updated successfully!");
      navigate(`/book-details/${id}`);
    }
  };

  return (
    <section className="p-6 bg-gray-800 ">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="container flex flex-col mx-auto space-y-12"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900">
          <div className="space-y-2 col-span-full lg:col-span-1 text-gray-50">
            <p className="font-medium text-2xl">Update Book</p>
            <p className="text-xs">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
              fuga autem eum!
            </p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="firstname" className="text-sm text-gray-50">
                Title
              </label>
              <input
                type="text"
                {...register("title")}
                placeholder="Title"
                className="input input-bordered w-full "
                defaultValue={book?.title}
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label htmlFor="lastname" className="text-sm text-gray-50">
                Image Link{" "}
                <span className="text-base font-medium">(Optional)</span>
              </label>
              <input
                type="text"
                {...register("image")}
                placeholder="Image Link"
                className="input input-bordered w-full "
                defaultValue={book?.image}
              />
            </div>

            <div className="col-span-full sm:col-span-2">
              <label htmlFor="email" className="text-sm text-gray-50">
                Author
              </label>
              <input
                {...register("author")}
                type="text"
                placeholder="Author"
                className="input input-bordered w-full "
                defaultValue={book?.author}
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="address" className="text-sm text-gray-50">
                Genre
              </label>
              <input
                {...register("genre")}
                type="text"
                placeholder="Genre"
                className="input input-bordered w-full "
                defaultValue={book?.genre}
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="city" className="text-sm text-gray-50">
                Published Year
              </label>
              <input
                {...register("publishedYear")}
                type="text"
                placeholder=" Published Year"
                className="input input-bordered w-full "
                defaultValue={book?.publishedYear}
              />
            </div>
            <div className="col-span-full ">
              <label htmlFor="description" className="text-sm text-gray-50 ">
                Description{" "}
                <span className="text-base font-medium">(Optional)</span>
              </label>
              <textarea
                {...register("description")}
                id="bio"
                defaultValue={book?.description}
                className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-info">
              Update Book
            </button>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default EditBook;
