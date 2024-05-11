"use client";

import { projects } from "@/utils/data";
import Image from "next/image";
import { ContactMe } from "@/Components/ContactMe";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "@/app/layout";

function page({ params }) {
  const projectID = params.projectID;
  const { englishVersion, languagePack } = useContext(AppContext);

  // find corresponding data for project
  const data = projects.find((item) => {
    return item.pageUrl === projectID;
  });

  return (
    <>
      {/* Title section */}
      <header className="w-full h-[90%] flex flex-col sm:items-center px-4 md:items-center  justify-center  sm:space-x-[90px] md:space-x-[90px] py-[90px] sm:flex-row md:flex-row ">
        <Image
          src={data?.projectImgSrc}
          width={1200}
          height={600}
          alt="Placeholder"
          style={{ objectFit: "cover" }}
          className=" max-h-[550px] sm:max-w-[600px] sm:px-0 md:px-0 "
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={100}
        />

        <div className="relative flex flex-col w-4/8 justify-center sm:h-[550px] md:h-[550px] mt-4 sm:mt-0 md:mt-0">
          <p className="sm:text-5xl md:text-5xl text-4xl text-balanced leading-snug uppercase max-w-[400px] font-light sm:mt-[-80px] md:mt-[-80px] tracking-wide">
            {data?.projectName[languagePack]}
          </p>
          <div className="sm:mt-10 md:mt-10 sm:text-lg md:text-lg">
            <p>
              <span className="font-bold inline-block w-[80px]">
                {englishVersion ? "Type" : "Typ"}
              </span>
              {data?.projectType}
            </p>
            <p>
              <span className="font-bold inline-block w-[80px]">
                {englishVersion ? "Clients" : "Klienti"}
              </span>
              {data?.clients[languagePack]}
            </p>
            <p>
              <span className="font-bold inline-block w-[80px]">
                {englishVersion ? "Year" : "Rok"}
              </span>
              {data?.projectYear}
            </p>
          </div>
        </div>
      </header>
      {/* Section with images if it exists */}
      <div>
        {data?.randomImages && (
          <div className="sm:flex-row md:flex-row justify-between w-full sm:p-24 md:p-24 sm:gap-20 md:gap-20 flex-col p-4">
            {data.randomImages.map((item, idx) => {
              return (
                <Image
                  key={idx}
                  src={item}
                  width={1200}
                  height={1200}
                  alt="Placeholder"
                  loading="lazy"
                  style={{ objectFit: "contain" }}
                  className="w-full sm:h-[700px] md:h-[700px] mb-4 "
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={100}
                />
              );
            })}
          </div>
        )}
      </div>
      {/* Hero section */}

      <div className="w-full sm:p-24 md:p-24 p-4 flex sm:h-screen md:h-screen lg:flex-row flex-col items-center sm:justify-between md:justify-between">
        <div
          className={`${
            data.id === "004" ? "sm:w-[45%] md:w-[45%]" : "sm:w-4/6 md:w-4/6"
          }`}
        >
          {data?.heroSection?.description[languagePack].map((text, idx) => {
            return (
              <p
                key={idx}
                className="sm:text-xl md:text-xl xl:text-2xl  text-wrap mb-5 "
              >
                {text}
              </p>
            );
          })}
        </div>
        <div className="flex sm:w-1/2 md:w-1/2 py-4 sm:py-0 md:py-0 justify-end order-first sm:order-last md:order-last">
          <Image
            src={data?.heroSection?.imageUrl}
            width={1000}
            height={300}
            alt="Placeholder"
            loading="lazy"
            style={{ objectFit: "cover" }}
            className={`${
              data.id === "004"
                ? "sm:w-[900px] md:w-[900px]"
                : "sm:w-[500px] md:w-[500px]"
            } sm:h-[700px] md:h-[700px] w-full h-[400px]`}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={100}
          />
        </div>
      </div>
      {/* Floor plan */}
      {data?.floorPlanImages && (
        <div
          className={`sm:p-24 md:p-24 w-full flex sm:flex-row md:flex-row flex-wrap ${data.floorPlanImages.styles}`}
        >
          {data.floorPlanImages.data.map((item, idx) => {
            return (
              <div key={idx} className="sm:w-1/2 md:w-1/2 mt-10">
                <Image
                  key={idx}
                  src={item.imageUrl}
                  width={800}
                  height={300}
                  alt="Placeholder"
                  loading="lazy"
                  style={{ objectFit: "contain" }}
                  className="w-full sm:h-[600px] md:h-[600px] mb-2 sm:p-10 md:p10 mt-10 sm:mt-0 md:mt-0"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={100}
                />
                {item["english" || "czech"] && (
                  <p className="sm:ml-[100px] md:ml-[100px] sm:mb-20 md:mb-20 text-xl ml-4">
                    {item[languagePack]}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      )}
      {/* ShowCase Section */}
      <div className="">
        {data?.showCaseImages.map((imgUrl, idx) => {
          return (
            <div
              key={idx}
              className="sm:p-24 md:p-24 w-full flex sm:flex-row md:flex-row flex-wrap mt-5 mb-10 sm:mt-0 md:mt-0 sm:mb-0 md:mb-0"
            >
              <Image
                src={imgUrl}
                width={2000}
                height={1200}
                alt="Placeholder"
                loading="lazy"
                style={{ objectFit: "contain" }}
                className="w-full sm:h-[700px] md:h-[700px] mb-2 sm:p-10 md:p-10 p-2"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          );
        })}
      </div>
      {/* Before and after section */}
      <div className="sm:p-24 md:p-24 w-full flex sm:flex-row md:flex-row gap-20 flex-col">
        {data?.beforeAfterImages?.data &&
          data.beforeAfterImages.data.map((imgUrl, idx, array) => {
            return (
              <div
                key={idx}
                className={`sm:w-1/${array.length} md:w-1/${array.length} sm:p-0 md:p-0 p-2 sm:h-[700px] md:h-[700px] h-[400px]`}
              >
                <Image
                  src={imgUrl}
                  width={800}
                  height={300}
                  alt="Placeholder"
                  loading="lazy"
                  style={{ objectFit: data?.beforeAfterImages?.styles }}
                  className="w-full h-full sm:h-[700px] md:h-[700px] mb-2 object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={100}
                />
              </div>
            );
          })}
      </div>
      <ContactMe />
    </>
  );
}

export default page;
