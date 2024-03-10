import Image from "next/image";
import { projects } from "../../src/utils/data";

export function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      {projects.map(
        ({
          id,
          projectImgSrc,
          projectImgAlt,
          projectName,
          projectYear,
          projectType,
        }) => (
          <div key={id}>
            <Image
              src={projectImgSrc}
              alt={projectImgAlt}
              width={300}
              height={300}
            />
            <div>
              <div>
                <p>Project</p>
                <p>{projectName}</p>
              </div>
              <div>
                <p>Year</p>
                <p>{projectYear}</p>
              </div>
              <div>
                <p>Type</p>
                <p>{projectType}</p>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}
