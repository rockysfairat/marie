// Language context:
import { useContext } from "react";
import { AppContext } from "../app/layout";

export function Nav() {
  // Language switch:
  const { englishVersion, setEnglishVersion } = useContext(AppContext);

  return (
    <nav className="w-full px-4 xl:px-24">
      <ol className="flex  flex-wrap justify-between text-lg uppercase [&>li]:mb-2">
        <li>
          <a href="/#Projects" className="hover:underline">
            {englishVersion ? "Projects" : " Projekty"}
          </a>
        </li>
        <li>
          <a href="/#Services" className="hover:underline">
            {englishVersion ? "Services" : " Služby"}
          </a>
        </li>
        <li>
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
        <div className="flex justify-between items-center w-[60px]">
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
        </div>
      </ol>
    </nav>
  );
}
