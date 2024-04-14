export function Nav() {
  return (
    <nav className="w-full px-24">
      <ol className="flex  flex-wrap justify-between text-xl uppercase">
        <li>
          <a href="#Projects" className="hover:underline">
            Projects
          </a>
        </li>
        <li>
          <a href="#Services" className="hover:underline">
            Services
          </a>
        </li>
        <li>
          <a href="#ContactMe" className="hover:underline">
            Contact
          </a>
        </li>
        <li>
          <a href="https://2408.cz/" className="hover:underline">
            24.08 independent design store
          </a>
        </li>
        <li>
          <a href="https://savelife.in.ua/en/" className="hover:underline">
            Help Ukraine
          </a>
        </li>
      </ol>
    </nav>
  );
}
