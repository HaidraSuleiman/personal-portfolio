import { navbarData, copyRightIcon } from "@/assests";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-17.5 h-full fixed left-0 top-0 flex flex-col justify-between border-r border-gray-200 px-4 py-10 z-10 opacity-0 hover:opacity-100 transition-all ">
      <a href="/#home">
        <span className="text-3xl font-semibold text-red-400">H</span>.
        <span className="block w-min rotate-90 origin-bottom text-[12px] font-semibold">
          Brown
        </span>
      </a>
      <div className="flex flex-col gap-y-3 max-sm:gap-y-2 ">
        {navbarData.map((item, i) => (
          <Link
            key={item.id}
            href={`#${item.id}`}
            scroll
            className="group flex flex-col items-center gap-y-2 "
          >
            <span className="text-2xl text-yellow-600 group-hover:scale-125 transition-all">
              {item.icon}
            </span>
            <span className="text-[10px] tracking-wide -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 text-center text-gray-500">
              {item.name}
            </span>
          </Link>
        ))}
      </div>

      <p className="flex items-center justify-center text-[12px] text-gray-500 mt-6">
        <span className="absolute left-1/2 w-max flex items-center -rotate-90 origin-bottom-left tracking-wider">
          {copyRightIcon} 2019 - {new Date().getFullYear()}
        </span>
      </p>
    </div>
  );
}
