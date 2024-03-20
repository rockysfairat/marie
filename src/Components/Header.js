import Image from "next/image";

export function Header() {
  return (
    <header className="w-full h-[90%] flex items-center justify-center  space-x-[90px] py-[90px]">
      <Image
        src="/Header/C09.jpg"
        width={650}
        height={600}
        alt="Placeholder"
        style={{ objectFit: "cover" }}
        className=" max-h-[550px] max-w-[5600px]"
      />

      <div className="relative flex flex-col w-4/8 justify-center h-[550px] ">
        <p className="text-5xl text-balanced leading-snug uppercase max-w-[400px] font-light mt-[-80px] tracking-wide">
          architecture interior design archviz
        </p>
        <a
          className="absolute border-[1px] border-dark w-2/4 p-2 uppercase text-nowrap flex justify-center items-center bottom-0"
          href="#"
        >
          Learn more
        </a>
      </div>
    </header>
  );
}
