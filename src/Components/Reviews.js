import { reviews } from "../utils/data";

export function Reviews() {
  return (
    <div className="px-24 flex flex-col">
      <h2 className="w-full">Reviews</h2>
      <div className="flex justify-between">
        {reviews.map(({ id, reviewTxt, reviewAuthor }) => (
          <div key={id} className="w-[25%] flex flex-col">
            <div className="bg-reviews grow p-3 flex justify-center items-center rounded-3xl">
              <p className="text-center font-light">{reviewTxt}</p>
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
