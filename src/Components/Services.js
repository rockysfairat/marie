import Image from "next/image";
import { services } from "@/utils/data";

export function Services() {
  return (
    <div className="flex flex-col justify-start items-center bg-greyLight px-24">
      <h2 className="w-full">Services</h2>
      <div className="w-full flex justify-between [&>*]:w-[22%]">
        {services.map(({ id, serviceImgSrc, serviceImgAlt, serviceName }) => (
          <div key={id} className="flex flex-col">
            <p className="text-6xl text-brown font-light">{id}</p>

            <Image
              src={serviceImgSrc}
              alt={serviceImgAlt}
              width={300}
              height={300}
              style={{ objectFit: "cover" }}
              className="h-[300px] w-[300px]"
            />

            <p className="text-brown text-center grow">{serviceName}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
