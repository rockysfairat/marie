"use client";

import "./globals.css";
// Next JS components:
import { useState, createContext, useEffect } from "react";

// Web components:
import { Nav } from "@/Components/Nav";

export const AppContext = createContext({});

export default function RootLayout({ children }) {
  const [englishVersion, setEnglishVersion] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  const [languagePack, setLanguagePack] = useState(
    englishVersion ? "english" : "czech"
  );

  useEffect(() => {
    setLanguagePack(englishVersion ? "english" : "czech");
  }, [englishVersion]);

  return (
    <html lang="en">
      <title>Marie Does Design</title>
      <meta
        name="description"
        content="Interior design, architecture and all stages of project documentation in Prague and central Bohemian region"
      />
      <body className="w-full sm:pt-[60px] flex flex-col items-center pt-[30px]">
        <AppContext.Provider
          value={{
            englishVersion,
            setEnglishVersion,
            languagePack,
            setLanguagePack,
          }}
        >
          <h1 className=" w-full px-4 xl:px-24 uppercase font-semibold sm:text-2xl md:text-2xl">
            marie.does.design
          </h1>
          {/* Hamburger menu */}
          <div
            className="hamburgerMenu cursor-pointer absolute right-0 top-0 p-5 flex flex-col  z-50 bg-neutral-950 sm:hidden md:hidden"
            onClick={toggleMenu}
          >
            <div className="w-7 h-1 bg-dark my-1 mx-0"></div>
            <div className="w-7 h-1 bg-dark my-1 mx-0"></div>
            <div className="w-7 h-1 bg-dark my-1 mx-0"></div>
          </div>
          <ul
            className={
              "MENU_ITEMS flex flex-col fixed top-0 w-full h-full bg-white transition-all ease-in-out delay-300 z-50 list-none mt-0 pt-12 pb-0 pl-0 pr-0 [&>li]:flex [&>li]:justify-center [&>li]:mb-4 [&>li]:text-2xl sm:hidden" +
              (isOpen ? " left-0" : " left-[-100vw]")
            }
          >
            <span
              onClick={toggleMenu}
              className="absolute top-4 right-4 border-solid border-navyBlue border-2 rounded-full w-0.5 h-0.5 p-6 flex items-center justify-center"
            >
              X
            </span>
            <li onClick={toggleMenu}>
              <a href="/#Projects" className="hover:underline">
                {englishVersion ? "Projects" : " Projekty"}
              </a>
            </li>
            <li onClick={toggleMenu}>
              <a href="/#Services" className="hover:underline">
                {englishVersion ? "Services" : " Služby"}
              </a>
            </li>
            <li onClick={toggleMenu}>
              <a href="#ContactMe" className="hover:underline">
                {englishVersion ? "Contact" : "Kontakt"}
              </a>
            </li>

            <li>
              <a href="https://2408.cz/" className="hover:underline">
                24.08 independent design store
              </a>
            </li>
            <li>
              <a href="https://savelife.in.ua/en/" className="hover:underline">
                {englishVersion ? "Help Ukraine" : "Pomoc Ukrajině"}
              </a>
            </li>
            {/* en-cz button */}
            <li className="flex justify-between items-center gap-2">
              <button onClick={() => setEnglishVersion(!englishVersion)}>
                {!englishVersion ? (
                  <span className="text-greyDark">EN</span>
                ) : (
                  <span className="text-dark">EN</span>
                )}
              </button>
              <button onClick={() => setEnglishVersion(!englishVersion)}>
                {!englishVersion ? (
                  <span className="text-dark">CZ</span>
                ) : (
                  <span className="text-greyDark">CZ</span>
                )}
              </button>
            </li>
          </ul>
          {/* Black line */}
          <div className=" px-4 my-[6px] w-full xl:px-24 mx-[10px] xl:mx-24">
            <hr className="" style={{ color: "black", height: "1px" }} />
          </div>

          <Nav />

          {children}
        </AppContext.Provider>
      </body>
    </html>
  );
}
