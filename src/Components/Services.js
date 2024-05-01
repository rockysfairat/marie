"use client";

import Image from "next/image";
import { servicesEn, servicesCz } from "@/utils/data";

// Language context:
import { useContext } from "react";
import { AppContext } from "../app/layout";

export function Services() {
  // Language switch:
  const { englishVersion } = useContext(AppContext);
  let services = englishVersion ? servicesEn : servicesCz;

  return (
    <div
      className="flex flex-col justify-start items-center bg-greyLight px-2 xl:px-24 min-h-fit"
      id="Services"
    >
      <h2 className="w-full">{englishVersion ? "Services" : "Služby"}</h2>
      <div className="w-min xl:w-full flex lg:flex-row flex-col justify-between items-start xl:[&>*]:w-[22%] flex-wrap">
        {services.map(
          ({ id, serviceImgSrc, serviceImgAlt, serviceName, serviceDesc }) => (
            <div key={id} className="flex flex-col mb-16 min-h-fit">
              <p className="text-6xl text-brown font-light">{id}</p>

              <div className="flex-col justify-center items-center my-2 w-[300px] ">
                <Image
                  src={serviceImgSrc}
                  alt={serviceImgAlt}
                  width={300}
                  height={300}
                  style={{ objectFit: "cover" }}
                  className="h-[300px] w-[300px]"
                />
                <p className="text-brown">{serviceName}</p>
                <ol>
                  {serviceDesc.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
                </ol>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
