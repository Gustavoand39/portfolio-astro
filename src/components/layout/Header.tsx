import { useState } from "react";
import MenuIcon from "../icons/MenuIcon";
import CloseIcon from "../icons/CloseIcon";
import LinkButton from "../ui/LinkButton";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => setShowMenu(!showMenu);

  const handleHideMenu = () => setShowMenu(false);

  const handleNavigate = (href: string) => {
    handleHideMenu();
    window.location.href = `/${href}`;
  };

  return (
    <header className="fixed top-4 w-full left-1/2 transform -translate-x-1/2 z-30">
      <div
        className="border border-slate-500 bg-gray-100/80 backdrop-blur-md flex justify-between items-center gap-12 px-6 py-3 md:px-12 
        mx-auto rounded-full shadow-small w-5/6"
      >
        <div className="flex items-center gap-2">
          <a
            aria-label="Home Page"
            className="font-medium sm:text-base"
            href="/"
          >
            Gustavo Pascual
          </a>
        </div>

        <nav className="hidden lg:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            <li
              className="menu-item"
              onClick={() => handleNavigate("#projects")}
            >
              Proyectos
            </li>
            <li
              className="menu-item"
              onClick={() => handleNavigate("#work-experience")}
            >
              Experiencia
            </li>
            <li className="menu-item" onClick={() => handleNavigate("#skills")}>
              Habilidades
            </li>
          </ul>

          <LinkButton
            ariaLabel="Contact Page"
            href="/contact"
            target="_self"
            className="rounded-lg"
          >
            Contacto
          </LinkButton>
        </nav>

        <div className="lg:hidden">
          <button
            className="cursor-pointer flex items-center"
            onClick={handleShowMenu}
            aria-label="Menu Button"
            aria-expanded={showMenu}
            aria-controls="mobile-menu"
          >
            <div
              className={`transition-transform duration-300 transform ${
                showMenu ? "rotate-180" : ""
              }`}
            >
              {showMenu ? (
                <CloseIcon className="h-6 w-6 md:h-8 md:w-8" />
              ) : (
                <MenuIcon className="h-6 w-6 md:h-8 md:w-8" />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={`lg:hidden flex items-center justify-center mt-4 mx-6 transition-all duration-300 z-30 ${
          showMenu ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
        }`}
      >
        {showMenu && (
          <nav className="border border-gray-300 bg-gray-100 rounded-2xl p-12 h-96 w-full flex flex-col items-center gap-4 shadow-xl">
            <ul className="flex flex-col items-center w-full gap-4">
              <li
                className="menu-item text-center w-full"
                onClick={() => handleNavigate("#projects")}
              >
                Proyectos
              </li>
              <li
                className="menu-item text-center w-full"
                onClick={() => handleNavigate("#work-experience")}
              >
                Experiencia
              </li>
              <li
                className="menu-item text-center w-full"
                onClick={() => handleNavigate("#skills")}
              >
                Habilidades
              </li>
            </ul>

            <LinkButton
              ariaLabel="Contact Page"
              href="/contact"
              target="_self"
              className="rounded-lg w-full"
            >
              Contacto
            </LinkButton>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
