'use client'
import { projects } from "@/utils/data";


async function page({ params }) {
  // console.log(params);
  // console.log(projects);
  const projectID = params.projectID
  const data = projects.find((item) => {
    return item.pageUrl === projectID
  });
  console.log(data);
  return <p>Post:</p>
}


export default page;