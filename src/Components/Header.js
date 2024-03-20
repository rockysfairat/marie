import Image from "next/image";

export function Header() {
  return (
    <header className="w-full h-[90%] flex items-center justify-center  space-x-[90px] py-[80px]">
      <Image
        src="/Header/C09.jpg"
        width={400}
        height={350}
        alt="Placeholder"
        style={{ objectFit: "cover" }}
        className="ml-[100px] max-h-[350px]"
      />

      <div className="relative flex flex-col w-2/5 justify-center h-[350px] ">
        <p className="text-4xl text-balanced leading-snug uppercase max-w-[300px] font-light mt-[-50px]">
          architecture interior design archviz
        </p>
        <a
          className="absolute border-[1px] border-dark w-1/4 p-2 uppercase text-nowrap flex justify-center items-center bottom-0"
          href="#"
        >
          Learn more
        </a>
      </div>
    </header>
  );
}
