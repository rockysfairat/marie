import Image from "next/image";

export function Hero() {
  return (
    <div className="bg-dark [&>*]:h-3/5 flex lg:flex-row flex-col items-center lg:justify-between justify-center px-24  border-white border-2">
      <div className="flex w-1/2 flex-col justify-between border-white border-2">
        <p className="text-6xl xl:text-8xl text-white max-w-sm">FROM</p>
        <p className="text-6xl xl:text-8xl text-white">CONCEPT</p>
        <p className="text-6xl xl:text-8xl text-white">TO </p>
        <p className="text-6xl xl:text-8xl text-white">EXECUTION</p>
        <p className="text-xl xl:w-full xl:text-3xl text-greyDark mt-[200px] w-[650px] text-wrap">
          Experience a seamless journey from conceptual design to flawless
          execution with comprehensive range of services
        </p>
      </div>

      <div className="flex w-1/2 py-36 h-20">
        <Image
          src="/Hero/20231226_143921.jpg"
          width={300}
          height={300}
          alt="Placeholder"
          loading="lazy"
          // style={{ objectFit: "contain" }}
          className="w-[600px] max-h-[700px]"
        />
      </div>
    </div>
  );
}
