import Image from "next/image";
import { projects } from "../utils/data";

export function Projects() {
  return (
    <div className="flex flex-col justify-start items-center px-24">
      <h2 className="w-full">Projects</h2>
      <div className="w-fuill flex [&>*]:w-[32%] justify-evenly">
        {projects.map(
          ({
            id,
            projectImgSrc,
            projectImgAlt,
            projectName,
            projectYear,
            projectType,
          }) => (
            <div key={id} className="flex flex-col justify-center text-dark">
              <Image
                src={projectImgSrc}
                alt={projectImgAlt}
                width={500}
                height={300}
                style={{ objectFit: "cover" }}
                className="h-[300px] w-[300px]"
              />

              <div className="flex flex-col [&>*]:flex [&>*]:justify-start border-dark border-t-[1px] mt-3 pt-3">
                <div className="[&>*:nth-child(odd)]:w-[20%] [&>*:nth-child(odd)]:font-bold [&>*:nth-child(even)]:font-light">
                  <p>Project</p>
                  <p>{projectName}</p>
                </div>
                <div className="[&>*:nth-child(odd)]:w-[20%] [&>*:nth-child(odd)]:font-bold [&>*:nth-child(even)]:font-light">
                  <p>Year</p>
                  <p>{projectYear}</p>
                </div>
                <div className="[&>*:nth-child(odd)]:w-[20%] [&>*:nth-child(odd)]:font-bold [&>*:nth-child(even)]:font-light">
                  <p>Type</p>
                  <p>{projectType}</p>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
