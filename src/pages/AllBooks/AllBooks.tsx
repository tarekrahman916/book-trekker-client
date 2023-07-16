import BookCard from "../../components/BookCard";

export default function AllBooks() {
  return (
    <div className="px-12">
      <div className="lg:w-1/2">
        <input
          type="text"
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
          <BookCard />
          <BookCard />
          <BookCard />
        </div>
      </div>
    </div>
  );
}
