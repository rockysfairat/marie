import { reviews } from "../utils/data";

export function Reviews() {
  return (
    <div className="px-2 lg:px-24 flex flex-col">
      <h2 className="w-full">Reviews</h2>
      <div className="flex flex-col lg:flex-row justify-between lg:mx-0 mx-10">
        {reviews.map(({ id, reviewTxt, reviewAuthor }) => (
          <div
            key={id}
            className="w-full lg:w-[25%] flex flex-col lg:mb-0 mb-6"
          >
            <div className="bg-reviews grow p-3 flex justify-center items-center">
              <p className=" font-light">{reviewTxt}</p>
            </div>

            <p className="font-bold text-brown text-center text-lg">
              {reviewAuthor}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
