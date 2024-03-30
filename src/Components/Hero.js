import Image from "next/image";

export function Hero() {
  return (
    <div className="bg-dark flex h-screen lg:flex-row flex-col items-center xl:justify-between jusify-center">
      <div className="flex w-1/2 flex-col xl:justify-between jusify-center  border-green border-2 xl:[&>*]:ml-24 [&>*]:ml-0 xl:[&>*]:mr-10 [&>*]:mr-0 h-fit xl:h-[80%]">
        <div className="border-green border-2 font-montserrat pt-9">
          <p className="text-6xl xl:text-8xl text-white max-w-sm">FROM</p>
          <p className="text-6xl xl:text-8xl text-white">CONCEPT</p>
          <p className="text-6xl xl:text-8xl text-white">TO </p>
          <p className="text-6xl xl:text-8xl text-white">EXECUTION</p>
        </div>
        <div className="border-green border-2">
          <p className="text-xl w-full xl:text-3xl text-greyDark text-wrap">
            Experience a seamless journey from conceptual design to flawless
            execution with comprehensive range of services
          </p>
        </div>
      </div>

      <div className="flex w-1/2 border-green border-2 items-center justify-center h-fit xl:h-[80%]">
        <Image
          src="/Hero/20231226_143921.jpg"
          width={300}
          height={300}
          alt="Placeholder"
          loading="lazy"
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
}
