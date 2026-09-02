import Image from "next/image";
import FilterComponent from "@/app/component/filter-component";
import { skill_gridList, skill_filter_list } from "@/app/data/data";

export default function WhoAmISection() {
  return (
    <section
      id="who-am-i"
      className="w-screen h-max bg-white p-8 pb-20 lg:px-100 scroll-mt-[10vh]"
    >
      <h1 className="font-black text-3xl text-black text-center mt-12">
        Who <span className={`font-light`}>am I?</span>
      </h1>
      <div className="flex items-center justify-center gap-4 mt-10">
        <div className="border-black w-30 h-30 lg:w-50 lg:h-50 overflow-hidden relative rounded-full cursor-pointer">
          <div className="relative w-full h-full group">
            <Image
              className="object-cover scale-150 translate-y-5 -translate-x-4 lg:translate-y-10 lg:-translate-x-7"
              src={"/profile_photo.jpg"}
              alt="profile photo"
              fill
            />
            <div className="lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-100 ease-in-out hidden lg:block">
              <div className="text-sm text-white bg-black/50 w-full h-full flex items-center justify-center flex-col absolute left-0 top-0">
                <p className="font-black text-lg">Piraisudan R</p>
                <p className="font-light text-gray-200 text-xs">
                  piraisudan590@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-gray-500 text-sm lg:text-lg! mt-10 leading-5.5 lg:leading-7 lg:px-10 md:text-center lg:text-center text-justify">
        I&apos;m very passionate & dedicated to my
        work. <br />
        With 5+ years experience as a professional web application developer.{" "}
        <span className="hidden lg:block">
          I have acquired the skills and knowledge necessary to create an
          application from scratch, <br />
          from Developing UIs to Deployment.
        </span>
      </p>
      <p className="text-gray-500 text-sm lg:text-lg! lg:hidden lg:leading-7 text-justify">
        I have acquired the skills and knowledge necessary to create an
        application from scratch, Developing UIs to Deployment.
      </p>
      <div id="skills" className="text-black mt-9 scroll-mt-[10vh]">
        <h1 className="border-b text-left font-black text-2xl pb-4">SKILLS</h1>
        <FilterComponent
          gridList={skill_gridList}
          filterList={skill_filter_list}
        />
      </div>
    </section>
  );
}
