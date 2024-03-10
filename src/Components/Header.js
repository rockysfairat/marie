import Image from "next/image";

export function Header() {
  return (
    <header className="bg-red w-1/2">
      <Image
        src="/placeholder.png"
        width={300}
        height={300}
        alt="Placeholder"
      />
      <p>architecture interior design archviz</p>
      <a href="#">Learn more</a>
    </header>
  );
}
