import Image from "next/image";

export function Hero() {
  return (
    <div className="bg-dark">
      <p>FROM CONCEPT TO EXECUTION</p>
      <p>
        Experience a seamless journey from conceptual design to flawless
        execution with comprehensive range of services
      </p>
      <Image
        src="/placeholder.png"
        width={300}
        height={300}
        alt="Placeholder"
      />
    </div>
  );
}
