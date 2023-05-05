import { useState } from "react";
import { useRouter } from 'next/navigation';
import Link from "next/link";
import Image from "next/image";
// import Torodan from "../../public/img/torodanlogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-clr4 absolute z-50 w-full">
      <div className="mx-auto py-3 lg:py-5 px-4 sm:px-6 lg:px-28">
        <div className="flex items-center justify-between h-16 font-avenirheavy">
          <div className="flex items-center">
            <Link href="/" legacyBehavior>
              {/* <Image
                src={Torodan}
                alt="logo"
                width={180}
                height={50}
                className="cursor-pointer"
              ></Image> */}
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" legacyBehavior>
                <a className="text-clr2 hover:bg-clr1 hover:text-clr4 px-3 py-2 rounded-md font-medium">
                  Home
                </a>
              </Link>
              <Link href="/about" legacyBehavior>
                <a className="text-clr2 hover:bg-clr1 hover:text-clr4 px-3 py-2 rounded-md font-medium">
                  Sobre
                </a>
              </Link>

              <Link href="/contact" legacyBehavior>
                <a className="text-clr2 hover:bg-clr1 hover:text-clr4 px-3 py-2 rounded-md font-medium">
                  Fale Conosco
                </a>
              </Link>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleNavbar}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-clr2 hover:text-clr4 hover:bg-clr1 focus:outline-none focus:ring-2 focus:ring-clr2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`block h-8 w-8 ${isOpen ? "hidden" : "block"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`block h-8 w-8 ${isOpen ? "block" : "hidden"}`}
                viewBox="0 0 512 512"
                fill="currentColor"
                height="1em"
                width="1em"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={32}
                  d="M368 368L144 144M368 144L144 368"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-clr2`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-clr4 border-2">
          <Link href="/" legacyBehavior>
            <a
              className="text-clr4 hover:bg-clr1 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleNavbar}
            >
              Home
            </a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a
              className="text-clr4 hover:bg-clr1 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleNavbar}
            >
              Sobre
            </a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a
              className="text-clr4 hover:bg-clr1 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleNavbar}
            >
              Fale Conosco
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
