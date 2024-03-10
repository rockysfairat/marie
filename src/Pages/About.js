import Image from "next/image";

export function About() {
  return (
    <div>
      <h2>About</h2>
      <div>
        <p>
          I am an open-minded architect with additional experience in design —
          with passion for new technologies and art.{" "}
        </p>
        <p>
          In every project, I am shaping the perfect space: a cozy home or a
          catchy retail unit, a friendly office or a fancy restaurant. For me,
          it’s more than just materials and furniture. My real job is to create
          the experience.
        </p>

        <p>
          On top of that are restless learning, tons of sketches, testing, and
          constant improvement. I believe that my ultimate goal is to make space
          fit people&rsquo;s needs perfectly and make it work its best for them.
        </p>
      </div>

      <Image
        src="/placeholder.png"
        width={300}
        height={300}
        alt="Placeholder"
      />
    </div>
  );
}
