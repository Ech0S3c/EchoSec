import Link from "next/link";
import Image from "next/image";
import { Link as ScrollLink, Element } from "react-scroll";

import logoImage from "@/assets/Logo.svg";

export const Navbar = () => {
  return(
    <nav className="fixed w-full max-h-40 flex items-center justify-center flex-wrap bg-background home">
      <div className="mr-8 ml-8 h-28 w-full flex items-center justify-between text-white border-b-2">
        <div className="flex items-center flex-shrink-0 text-white">
          <Link href="/" target="_top">
              <Image src={logoImage} width={208} height={80} alt="Logo Echosec" />
          </Link>
        </div>
        <div className="gap-16 flex items-center">
          <Link href="#/processo-seletivo" className="font-montserrat block font-medium text-lg lg:inline-block lg:mt-0 text-gray-300 hover:text-white">
              Processo Seletivo
          </Link>
          <Link href="#/sobre-nos" className="font-montserrat block font-medium text-lg lg:inline-block lg:mt-0 text-gray-300 hover:text-white">
              Sobre nós
          </Link>
          <Link href="https://www.google.com/" target="_blank" rel="noopener noreferrer" className="block lg:inline-block lg:mt-0">
              <button className="w-40 h-14 font-montserrat font-medium text-lg text-gray-300 border-gray-300 border-2 rounded-2xl flex items-center justify-center hover:border-white hover:text-white">
                Inscreva-se
              </button>
            </Link>
        </div>
      </div>
    </nav>
  )
}