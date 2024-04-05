"use client";

import { projects } from "@/utils/data";
import Image from "next/image";
import { ContactMe } from "@/Components/ContactMe";
async function page({ params }) {
  const projectID = params.projectID;
  // find corresponding data for project
  const data = projects.find((item) => {
    return item.pageUrl === projectID;
  });
  console.log(data);

  return (
    <>
      {/* Title section */}
      <header className="w-full h-[90%] flex items-center justify-center  space-x-[90px] py-[90px]">
        <Image
          src="/Header/C09.jpg"
          width={1200}
          height={600}
          alt="Placeholder"
          style={{ objectFit: "cover" }}
          className=" max-h-[550px] max-w-[600px]"
        />

        <div className="relative flex flex-col w-4/8 justify-center h-[550px] ">
          <p className="text-5xl text-balanced leading-snug uppercase max-w-[400px] font-light mt-[-80px] tracking-wide">
            {data?.projectName}
          </p>
          <div className="mt-10 text-lg">
            <p>
              <span className="font-bold inline-block w-[80px]">Type</span>
              {data?.projectType}
            </p>
            <p>
              <span className="font-bold inline-block w-[80px]">Clients</span>
              {data?.clients}
            </p>
            <p>
              <span className="font-bold inline-block w-[80px]">Year</span>
              {data?.projectYear}
            </p>
          </div>
        </div>
      </header>
      {data.randomImages && (
        <div className="flex justify-center h-full p-24 gap-20">
          {data.randomImages.map((item, idx) => {
            return (
              <Image
                key={idx}
                src={item}
                width={1200}
                height={300}
                alt="Placeholder"
                loading="lazy"
                style={{ objectFit: "cover" }}
                className="w-full h-[700px] "
              />
            );
          })}
        </div>
      )}
      {/* Hero section */}

      <div className="p-24 flex h-screen lg:flex-row flex-col items-center justify-between">
        <p className="text-xl xl:text-2xl  text-wrap w-4/6">
          {data?.heroSection?.description}
        </p>

        <div className="flex w-1/2 justify-end">
          <Image
            src={data.heroSection.imageUrl}
            width={1000}
            height={300}
            alt="Placeholder"
            loading="lazy"
            style={{ objectFit: "cover" }}
            className="w-[500px] h-[700px]"
          />
        </div>
      </div>
      {/* Floor plan */}
      <div className="p-24 w-full flex flex-row flex-wrap">
        {data.floorPlanImages.map((item, idx) => {
          return (
            <div key={idx} className="w-1/2">
              <Image
                key={idx}
                src={item.imageUrl}
                width={800}
                height={300}
                alt="Placeholder"
                loading="lazy"
                style={{ objectFit: "contain" }}
                className="w-full h-[600px] mb-2 p-10"
              />
              {item.description && (
                <p className="ml-[100px] mb-20 text-xl">{item.description}</p>
              )}
            </div>
          );
        })}
      </div>
      {/* ShowCase Section */}
      {data.showCaseImages.map((imgUrl, idx) => {
        return (
          <div key={idx} className="p-24 w-full flex flex-row flex-wrap">
            <Image
              src={imgUrl}
              width={800}
              height={800}
              alt="Placeholder"
              loading="lazy"
              style={{ objectFit: "contain" }}
              className="w-full h-[700px] mb-2 p-10"
            />
          </div>
        );
      })}
      {/* Before and after section */}
      <div className="p-24 w-full flex flex-row flex-wrap">
        {data.beforeAfterImages.map((imgUrl, idx) => {
          return (
            <div className="w-1/2">
              <Image
                key={idx}
                src={imgUrl}
                width={800}
                height={300}
                alt="Placeholder"
                loading="lazy"
                style={{ objectFit: "contain" }}
                className="w-full h-[700px] mb-2 p-10"
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
