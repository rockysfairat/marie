import Image from "next/image";

export function ContactMe() {
  return (
    <div className="bg-biege">
      <h2>Contact Me</h2>
      <Image
        src="/ContactMe/06_Post.jpg"
        alt="Something"
        width="300"
        height="300"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
