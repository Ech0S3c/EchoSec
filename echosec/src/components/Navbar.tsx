import Link from "next/link";
import Image from "next/image";

import logoImage from "@/assets/Logo.svg";

export const Navbar = () => {
  return(
    <nav className="fixed w-full h-36 flex items-center justify-center flex-wrap bg-background home">
      <div className="mr-8 ml-8 h-28 w-full flex items-center justify-between text-white border-b-2 max-md:flex-col">
        <div className="flex items-center flex-shrink-0 text-white">
          <Link href="#/">
              <Image src={logoImage} width={208} height={80} alt="Logo Echosec" />
          </Link>
        </div>
        <div className="gap-16 flex items-center max-md:hidden">
          <Link href="http://ctf.echosec.com.br/" target="_blank" className="block lg:inline-block lg:mt-0">
            <button className="w-40 h-14 font-montserrat font-medium text-lg text-gray-300 border-gray-300 border-2 rounded-2xl flex items-center justify-center hover:border-white hover:text-white max-sm:mb-10">
              Inscreva-se
            </button>
          </Link>
        </div>
      </div>
    </nav>
  )
}