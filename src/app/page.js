import Image from "next/image";
import { Hero } from "@/Pages/Hero";
import { Projects } from "@/Pages/Projects";
import { Services } from "@/Pages/Services";
import { About } from "@/Pages/About";
import { Reviews } from "@/Pages/Reviews";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Projects />
      <Services />
      <About />
      <Reviews />
    </main>
  );
}
