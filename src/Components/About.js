"use client";

import Image from "next/image";

// Language context:
import { useContext } from "react";
import { AppContext } from "../app/layout";

export function About() {
  // Language switch:
  const { englishVersion } = useContext(AppContext);
  return (
    <div className="bg-greyDark flex flex-col px-5 lg:px-24 pb-4">
      <h2 className="w-full">{englishVersion ? "About me" : "o mně"} </h2>
      <div className="flex flex-col lg:flex-row justify-between">
        {englishVersion ? (
          <div className="w-full lg:w-[60%] flex flex-col justify-center [&>*]:mb-5 text-dark text-xl">
            <p>
              I am an open-minded architect with additional experience in design
              — with passion for new technologies and art.{" "}
            </p>
            <p>
              In every project, I am shaping the perfect space: a cozy home or a
              catchy retail unit, a friendly office or a fancy restaurant. For
              me, it’s more than just materials and furniture. My real job is to
              create the experience.
            </p>

            <p>
              On top of that are restless learning, tons of sketches, testing,
              and constant improvement. I believe that my ultimate goal is to
              make space fit people&rsquo;s needs perfectly and make it work its
              best for them.
            </p>
          </div>
        ) : (
          <div className="w-full lg:w-[60%] flex flex-col justify-center [&>*]:mb-5 text-dark text-xl">
            <p>
              Jsem architektka se zkušenostmi v oblasti designu a vášní pro nové
              technologie a umění.
            </p>
            <p>
              V každém projektu utvářím dokonalý prostor: útulný domov nebo
              chytlavou obchodní jednotku, přátelskou kancelář nebo luxusní
              restauraci. Pro mě je to víc než jen materiály a nábytek. Mým
              skutečným úkolem je vytvářet zážitek.
            </p>

            <p>
              K tomu navíc neustálé učení, tuny náčrtů, testování a zlepšování.
              Věřím, že mým konečným cílem je, aby prostor perfektně vyhovoval
              potřebám lidí a aby pro ně fungoval co nejlépe.
            </p>
          </div>
        )}

        <div className="w-full lg:w-[450px] mb-10">
          <Image
            src="/About/20231109_082620-01.jpeg"
            width={800}
            height={800}
            alt="Placeholder"
            style={{ objectFit: "cover" }}
            className="w-full sm:pb-5 md:pb-5"
          />
        </div>
      </div>
    </div>
  );
}

// <a href="https://www.freepik.com/search">Icon by Xinh Studio</a>
// <a href="https://www.freepik.com/search">Icon by Freepik</a>
