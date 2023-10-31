import React, { ChangeEvent, FormEvent, useState } from "react";
import { usePostReviewMutation } from "../redux/features/books/bookApi";

const Review = ({ id }: { id: string }) => {
  const [inputValue, setInputValue] = useState<string>("");

  const [postReview, { isLoading, isSuccess, status }] =
    usePostReviewMutation();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const options = {
      id: id,
      data: { review: inputValue },
    };

    postReview(options);
    setInputValue("");
    console.log(isLoading, isSuccess, status);
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className=" mt-3">
      <div className="flex justify-center items-center w-[100vw]">
        <div className="">
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <textarea
              placeholder="Your review..."
              className="textarea p-4 rounded-md  border text-gray-100 bg-gray-900"
              onChange={handleChange}
              spellCheck="false"
            ></textarea>
            <button
              type="submit"
              className="btn btn-info py-4 my-4 font-semibold rounded-md text-gray-900 "
            >
              Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;
