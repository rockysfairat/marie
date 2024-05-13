"use client";
import Image from "next/image";
import { projects } from "../utils/data";
import Link from "next/link";
import { useState, useContext } from "react";
import renderProjectsView from "../utils/functions";
import { AppContext } from "@/app/layout";

export function Projects() {
  const { englishVersion, setEnglishVersion, setLanguagePack, languagePack } =
    useContext(AppContext);
  const initialLimit = 3;
  const [projectsList, setProjectsList] = useState(
    renderProjectsView(projects, initialLimit)
  );
  return (
    <div
      className="flex flex-col justify-start items-center px-2 xl:px-24"
      id="Projects"
    >
      <h2 className="w-full">Projects</h2>
      <div className="w-full flex-col xl:flex-row flex [&>*]:w-full xl:[&>*]:w-[32%] flex-wrap gap-5 items-start [&>*]:mb-10">
        {projectsList.map(
          ({
            id,
            projectImgSrc,
            projectImgAlt,
            projectName,
            projectYear,
            projectType,
            pageUrl,
            data,
          }) => (
            <Link
              key={id}
              href={{
                pathname: `projects/${pageUrl}`,
                query: {
                  test: "Test work",
                },
              }}
              as={`/projects/${pageUrl}`}
            >
              <div className="flex flex-col justify-center text-dark">
                <Image
                  src={projectImgSrc}
                  alt={projectImgAlt}
                  width={500}
                  height={300}
                  style={{ objectFit: "cover" }}
                  className="h-[300px] w-full"
                />

                <div className="flex flex-col [&>*]:flex [&>*]:justify-start border-dark border-t-[1px] mt-3 pt-3">
                  <div className="[&>*:nth-child(odd)]:w-[20%] [&>*:nth-child(odd)]:font-bold [&>*:nth-child(even)]:font-light">
                    <p>Project</p>
                    <p>{projectName[languagePack]}</p>
                  </div>
                  <div className="[&>*:nth-child(odd)]:w-[20%] [&>*:nth-child(odd)]:font-bold [&>*:nth-child(even)]:font-light">
                    <p>Year</p>
                    <p>{projectYear}</p>
                  </div>
                  <div className="[&>*:nth-child(odd)]:w-[20%] [&>*:nth-child(odd)]:font-bold [&>*:nth-child(even)]:font-light">
                    <p>Type</p>
                    <p>{projectType[languagePack]}</p>
                  </div>
                </div>
              </div>
            </Link>
          )
        )}
      </div>
      {projectsList.length % 3 === 0 && (
        <button
          className="border-[1px] border-dark  p-2 uppercase text-nowrap flex justify-center items-center mb-10"
          onClick={() => setProjectsList(projects, initialLimit * 2)}
        >
          Show more
        </button>
      )}
    </div>
  );
}
