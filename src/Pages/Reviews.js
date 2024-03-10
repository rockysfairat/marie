import { reviews } from "../../src/utils/data";

export function Reviews() {
  return (
    <div>
      <h2>Reviews</h2>
      {reviews.map(({ id, reviewTxt, reviewAuthor }) => (
        <div key={id}>
          <p>{reviewTxt}</p>
          <p>{reviewAuthor}</p>
        </div>
      ))}
    </div>
  );
}
