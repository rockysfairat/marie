import Image from "next/image";

export function Header() {
  return (
    <header className="w-full h-screen flex items-center justify-around [&>*]:w-2/5 [&>*]:h-1/2">
      <div>
        <Image
          src="/Header/C09.jpg"
          width={500}
          height={300}
          alt="Placeholder"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex flex-col justify-between">
        <p className="text-4xl">architecture interior design archviz</p>
        <a
          className="border-2 border-dark w-1/4 p-5 uppercase text-nowrap flex justify-center items-center"
          href="#"
        >
          Learn more
        </a>
      </div>
    </header>
  );
}
