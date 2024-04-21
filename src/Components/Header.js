import Image from "next/image";

export function Header() {
  return (
    <header className="w-full h-[90%] flex flex-col xl:flex-row items-start  sm:mt-[100px] justify-start xl:justify-center space-x-0 xl:space-x-[90px] py-[40px] xl:py-0">
      <Image
        src="/Header/C09.jpg"
        width={650}
        height={600}
        alt="Placeholder"
        style={{ objectFit: "cover" }}
        className="w-full xl:w-[40%] max-h-[550px] max-w-[5600px]"
      />

      <div className="relative flex flex-col w-4/8 justify-center items-start xl:items-start h-[200px] xl:h-[550px] mt-3">
        <p className="flex flex-col text-3xl xl:text-5xl text-balanced leading-snug uppercase max-w-[400px] font-light mt-[-80px] tracking-wide sm:text-3xl md:text-3xl [&>span]:block justify-start items-start">
          <span>architecture </span>
          <span>interior design</span>
          <span>archviz</span>
        </p>
        <a
          className="absolute border-[1px] border-dark w-2/4 p-2 uppercase text-nowrap flex justify-center items-center bottom-0"
          href="/#Services"
        >
          Learn more
        </a>
      </div>
    </header>
  );
}
