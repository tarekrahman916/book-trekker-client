/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useCreateBookMutation } from "../redux/features/books/bookApi";
import { useAppSelector } from "../redux/hook";

interface BookFormInput {
  title: string;
  image?: string;
  author: string;
  genre: string;
  publishedYear: string;
  description?: string;
}

export default function CreateBookForm() {
  const { user } = useAppSelector((state) => state.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BookFormInput>();

  const [createBook, { isSuccess, isLoading }] = useCreateBookMutation();
  console.log(isSuccess, isLoading);
  const navigate = useNavigate();

  const onSubmit = (data: BookFormInput) => {
    const bookData = {
      title: data.title,
      image: data.image,
      author: data.author,
      genre: data.genre,
      publishedYear: data.publishedYear,
      description: data.description,
      userEmail: user.email,
    };

    createBook(bookData);

    if (data) {
      toast.success("Book Created Successfully");
      navigate("/all-books");
    } else {
      toast.error("Book created Failed");
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
            <p className="font-medium text-2xl">Create Book</p>
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
                {...register("title", { required: "title is required" })}
                placeholder="Title"
                className="input input-bordered w-full "
              />
              {errors.title && (
                <p className="text-white">{errors.title.message}</p>
              )}
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
              />
            </div>

            <div className="col-span-full sm:col-span-2">
              <label htmlFor="email" className="text-sm text-gray-50">
                Author
              </label>
              <input
                {...register("author", { required: "author is required" })}
                type="text"
                placeholder="Author"
                className="input input-bordered w-full "
              />
              {errors.author && (
                <p className="text-white">{errors.author.message}</p>
              )}
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="address" className="text-sm text-gray-50">
                Genre
              </label>
              <input
                {...register("genre", { required: "genre is required" })}
                type="text"
                placeholder="Genre"
                className="input input-bordered w-full "
              />
              {errors.genre && (
                <p className="text-white">{errors.genre.message}</p>
              )}
            </div>
            <div className="col-span-full sm:col-span-2">
              <label htmlFor="city" className="text-sm text-gray-50">
                Published Year
              </label>
              <input
                {...register("publishedYear", {
                  required: "Published year is required",
                })}
                type="text"
                placeholder=" Published Year"
                className="input input-bordered w-full "
              />
              {errors.publishedYear && (
                <p className="text-white">{errors.publishedYear.message}</p>
              )}
            </div>
            <div className="col-span-full ">
              <label htmlFor="description" className="text-sm text-gray-50 ">
                Description{" "}
                <span className="text-base font-medium">(Optional)</span>
              </label>
              <textarea
                {...register("description")}
                id="bio"
                placeholder="Description"
                className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-info">
              Create Book
            </button>
          </div>
        </fieldset>
      </form>
    </section>
  );
}
