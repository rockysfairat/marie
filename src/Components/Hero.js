import Image from "next/image";

export function Hero() {
  return (
    <div className="bg-dark text-xl [&>*]:w-2/5 [&>*]:h-3/5 flex items-center justify-between px-24">
      <div className="flex w-1/2 flex-col justify-between">
        <p className="text-7xl text-white">FROM CONCEPT TO EXECUTION</p>
        <p className="text-2xl text-greyDark">
          Experience a seamless journey from conceptual design to flawless
          execution with comprehensive range of services
        </p>
      </div>

      <div className="flex w-1/2 py-36">
        <Image
          src="/Hero/20231226_143921.jpg"
          width={300}
          height={300}
          alt="Placeholder"
          loading="lazy"
          style={{ objectFit: "contain" }}
          className="w-full"
        />
      </div>
    </div>
  );
}
