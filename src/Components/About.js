import Image from "next/image";

export function About() {
  return (
    <div className="bg-greyDark flex flex-col px-5 lg:px-24 pb-4">
      <h2 className="w-full">About</h2>
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="w-full lg:w-[60%] flex flex-col justify-center [&>*]:mb-5 text-dark text-xl">
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

        <div className="w-full lg:w-[450px]">
          <Image
            src="/About/20231109_082620-01.jpeg"
            width={800}
            height={800}
            alt="Placeholder"
            style={{ objectFit: "cover" }}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
