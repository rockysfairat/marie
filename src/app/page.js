import Image from "next/image";
import { Hero } from "@/Components/Hero";
import { Projects } from "@/Components/Projects";
import { Services } from "@/Components/Services";
import { About } from "@/Components/About";
import { Reviews } from "@/Components/Reviews";
import { ContactMe } from "@/Components/ContactMe";

export default function Home() {
  return (
    <main className="flex flex-col [&>*]:min-h-screen">
      <Hero />
      <Projects />
      <Services />
      <About />
      <Reviews />
      <ContactMe />
    </main>
  );
}
