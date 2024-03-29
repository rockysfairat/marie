import Image from "next/image";

export function About() {
  return (
    <div className="bg-greyDark flex flex-col px-24">
      <h2 className="w-full">About</h2>
      <div className="flex justify-between">
        <div className="w-[60%] flex flex-col justify-center [&>*]:mb-5 text-dark">
          <p>
            I am an open-minded architect with additional experience in design —
            with passion for new technologies and art.{" "}
          </p>
          <p>
            In every project, I am shaping the perfect space: a cozy home or a
            catchy retail unit, a friendly office or a fancy restaurant. For me,
            it’s more than just materials and furniture. My real job is to
            create the experience.
          </p>

          <p>
            On top of that are restless learning, tons of sketches, testing, and
            constant improvement. I believe that my ultimate goal is to make
            space fit people&rsquo;s needs perfectly and make it work its best
            for them.
          </p>
        </div>

        <Image
          src="/About/20231109_082620-01.jpeg"
          width={300}
          height={300}
          alt="Placeholder"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
