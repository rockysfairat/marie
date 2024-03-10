import Image from "next/image";
import { services } from "@/utils/data";

export function Services() {
  return (
    <div>
      <h2>Services</h2>
      {services.map(({ id, serviceImgSrc, serviceImgAlt, serviceName }) => (
        <div key={id}>
          <p>{id}</p>
          <Image
            src={serviceImgSrc}
            alt={serviceImgAlt}
            width={300}
            height={300}
          />
          <p>{serviceName}</p>
        </div>
      ))}
    </div>
  );
}
