import Image from "next/image";

export function Hero() {
  return (
    <div className="bg-dark flex h-screen lg:flex-row flex-col items-center xl:justify-between jusify-center px-16">
      <div className="flex w-1/2 flex-col xl:justify-between jusify-center xl:[&>*]:mr-10 [&>*]:mr-0 h-fit lg:h-[80%]">
        <div className="font-montserrat pt-9">
          <p className="text-6xl xl:text-8xl text-white max-w-sm">FROM</p>
          <p className="text-6xl xl:text-8xl text-white">CONCEPT</p>
          <p className="text-6xl xl:text-8xl text-white">TO </p>
          <p className="text-6xl xl:text-8xl text-white">EXECUTION</p>
        </div>
        <div>
          <p className="text-xl w-full xl:text-3xl text-greyDark text-wrap">
            Experience a seamless journey from conceptual design to flawless
            execution with comprehensive range of services
          </p>
        </div>
      </div>

      <div className="flex w-1/2 items-center justify-center h-[80%] overflow-hidden">
        <Image
          src="/Hero/20231226_143921.jpg"
          width={800}
          height={800}
          alt="Placeholder"
          loading="lazy"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
}
