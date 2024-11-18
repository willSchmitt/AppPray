import { FaHandsPraying } from "react-icons/fa6";
import { PiLineVerticalBold } from "react-icons/pi";
import { IoSearchCircleSharp, IoSearchSharp } from "react-icons/io5";
import { CiHome } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

export function Navbar() {
  return (
    <div className="flex flex-row justify-around py-7 w-full">
      <section className="flex items-center gap-5">
        <FaHandsPraying size="2.5rem" />
        <PiLineVerticalBold size="2.5rem" />
        <h1 className="font-bold text-2xl">APP PRAY</h1>
      </section>

      <section className="">
        <div className="w-full max-w-sm min-w-[300px]">
          <div className="relative">
            <IoSearchCircleSharp className="absolute w-5 h-5 top-2.5 right-2.5 bg-blue500" />

            <input
              type="text"
              className="w-full pl-3 pr-10 py-2 bg-transparent placeholder:text-slate-400 text-white text-sm border border-white rounded-2xl transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
              placeholder="Pesquisar..."
            />
          </div>
        </div>
      </section>

      <section className="flex items-center gap-10">
        <a href="/">
          <CiHome size="1.875rem" />
        </a>

        <a href="/">
          <CgProfile size="1.85rem" />
        </a>
      </section>
    </div>
  );
}
