import Link from "next/link";
import HamburgerMenu from "@/app/component/hamburger-menu";
import { ArrowRight, CodeXml } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-white w-full h-screen overflow-y-scroll overflow-x-hidden">
      <nav className="bg-black flex items-center justify-between p-6 lg:px-100 sticky top-0 h-[10vh] border-b border-gray-600 z-50">
        <Link href="/">
          <p className="text-4xl font-bold text-white">P.</p>
        </Link>
        <HamburgerMenu />
      </nav>
      <section className="bg-black w-screen h-[90vh] flex justify-center p-8 lg:px-100 pt-0 pb-0 flex-col overflow-hidden top-0">
        <div className="w-full h-full border-l border-r border-gray-600 flex items-center justify-center">
          <CodeXml size={150} color="#e17100" />
        </div>
        <div className="w-full h-full">
          <div className="border border-b-0 border-gray-600 relative p-2">
            <h1 className="text-3xl lg:text-6xl font-bold text-white">
              Piraisudan R
            </h1>
            <p className="text-md lg:text-xl lg:mt-4 font-extralight text-gray-300">
              Full Stack Engineer
            </p>
          </div>

          <div className="border border-b-0 border-gray-600">
            <p className="text-gray-500 text-sm lg:text-lg mt-8 px-2">
              I build customer-facing web products and internal tools from
              React/TypeScript UIs to secure multi-tenant backends. Analytics
              platforms used by 100+ people, and production systems for
              operations and engineering teams.
            </p>
            <div className="pl-2">
              <button className="group cursor-pointer text-black w-max font-bold text-xs gap-4 bg-amber-600 uppercase rounded-4xl p-2 px-6 pr-2 mt-8 tracking-widest flex items-center justify-between">
                View my works
                <span className="border border-white w-10! h-10! rounded-4xl bg-white flex items-center justify-center group-hover:scale-115 transition-transform duration-200 ease-in-out">
                  <ArrowRight />
                </span>
              </button>
            </div>
          </div>
          <div className="border border-t-0 h-full border-gray-600"></div>
        </div>
      </section>
      <div className="w-screen h-[50vh] bg-white"></div>
    </div>
  );
}
