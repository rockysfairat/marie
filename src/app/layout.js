"use client";

import "./globals.css";
// Next JS components:
import { useState, createContext, useEffect } from "react";

// Web components:
import { Nav } from "@/Components/Nav";

export const AppContext = createContext({});

export default function RootLayout({ children }) {
  const [englishVersion, setEnglishVersion] = useState(true);
  const [languagePack, setLanguagePack] = useState(
    englishVersion ? "english" : "czech"
  );
  useEffect(() => {
    setLanguagePack(englishVersion ? "english" : "czech");
  }, [englishVersion]);
  return (
    <html lang="en">
      <title>Marie Does Design</title>
      <body className="w-full sm:pt-[60px] flex flex-col items-center pt-[30px]">
        <AppContext.Provider
          value={{
            englishVersion,
            setEnglishVersion,
            setLanguagePack,
            languagePack,
          }}
        >
          <h1 className=" w-full px-4 xl:px-24 uppercase font-semibold text-3xl">
            marie.does.design
          </h1>
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
