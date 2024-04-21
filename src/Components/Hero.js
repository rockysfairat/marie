import Image from "next/image";

export function Hero() {
  return (
    <div className="bg-dark flex h-screen lg:flex-row flex-col items-center xl:justify-between jusify-center px-0 xl:px-16 pb-4">
      <div className="flex w-full xl:w-1/2 flex-col xl:justify-between jusify-center xl:[&>*]:mr-10 [&>*]:mr-0 h-fit lg:h-[80%]">
        <div className="pt-9 px-4">
          <p className="text-5xl xl:text-8xl text-white max-w-sm">FROM</p>
          <p className="text-5xl xl:text-8xl text-white">CONCEPT</p>
          <p className="text-5xl xl:text-8xl text-white">TO </p>
          <p className="text-5xl xl:text-8xl text-white">EXECUTION</p>
        </div>
        <div className="px-4 py-4">
          <p className="text-xl w-full xl:text-3xl text-greyDark text-wrap">
            Experience a seamless journey from conceptual design to flawless
            execution with comprehensive range of services
          </p>
        </div>
      </div>

      <div className="flex w-full xl:w-1/2 px-4 items-center justify-center h-[80%] overflow-hidden">
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
