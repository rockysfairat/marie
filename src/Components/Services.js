import Image from "next/image";
import { services } from "@/utils/data";

export function Services() {
  return (
    <div
      className="flex flex-col justify-start items-center bg-greyLight px-2 xl:px-24"
      id="Services"
    >
      <h2 className="w-full">Services</h2>
      <div className="w-min xl:w-full flex lg:flex-row flex-col justify-between items-start xl:[&>*]:w-[22%] flex-wrap overflow-hidden">
        {services.map(({ id, serviceImgSrc, serviceImgAlt, serviceName }) => (
          <div key={id} className="flex flex-col mb-3">
            <p className="text-6xl text-brown font-light">{id}</p>

            <div className="flex justify-center items-center my-2 h-[300px] w-[300px] overflow-hidden">
              <Image
                src={serviceImgSrc}
                alt={serviceImgAlt}
                width={300}
                height={300}
                style={{ objectFit: "cover" }}
                className="h-[300px] w-[300px]"
              />
            </div>

            <p className="text-brown text-center align-middle flex justify-center items-center">
              {serviceName}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
