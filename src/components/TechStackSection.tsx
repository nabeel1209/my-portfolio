import Image from "next/image";
import { forwardRef, MutableRefObject, useEffect, useRef, useState} from "react";
type TechStackData = {
  src: string;
  name: string;
  width: number;
  height: number;
};

function TechStack(data: TechStackData) {
  return (
    <div className="flex flex-col gap-2 w-28 p-1 justify-center items-center text-white font-sora font-semibold text-lg group-hover:hover:opacity-100 group-hover:hover:scale-100 group-hover:opacity-50 group-hover:scale-95  transition-all duration-500 ease-in-out lg:w-32">
      <Image
        src={data.src}
        alt=""
        className="w-auto h-16 rounded-xl lg:h-14"
        width={data.width}
        height={data.height}
      />
      {data.name}
    </div>
  );
}
function LanguagesPages() {
  return (
    <div className="p-4 py-6 rounded-3xl bg-[#ffffff17] grid grid-cols-[repeat(auto-fill,7rem)] grid-rows-[repeat(auto-fill,7rem)] justify-evenly gap-y-8 group hover:scale-105 transition-all duration-500 ease-in-out lg:gap-x-4">
      <TechStack
        src="/images/techStack/python.png"
        width={383}
        height={383}
        name="Python"
      ></TechStack>
      <TechStack
        src="/images/techStack/java.png"
        width={383}
        height={383}
        name="Java"
      ></TechStack>
      <TechStack
        src="/images/techStack/javascript.png"
        width={383}
        height={383}
        name="Javascript"
      ></TechStack>
      <TechStack
        src="/images/techStack/typescript.png"
        width={383}
        height={383}
        name="Typescript"
      ></TechStack>
      <TechStack
        src="/images/techStack/dart.png"
        width={383}
        height={383}
        name="Dart"
      ></TechStack>
      
    </div>
  );
}
function LibrariesPages() {
  return (
    <div className="p-4 py-6 rounded-3xl bg-[#ffffff17] grid grid-cols-[repeat(auto-fill,7rem)] grid-rows-[repeat(auto-fill,7rem)] justify-evenly gap-y-8 group hover:scale-105 transition-all duration-500 ease-in-out lg:gap-x-4">
      <TechStack
        src="/images/techStack/react.png"
        width={383}
        height={383}
        name="React"
      ></TechStack>
    </div>
  );
}
function FrameworksPages() {
  return (
    <div className="p-4 py-6 rounded-3xl bg-[#ffffff17] grid grid-cols-[repeat(auto-fill,7rem)] grid-rows-[repeat(auto-fill,7rem)] justify-evenly gap-y-8 group hover:scale-105 transition-all duration-500 ease-in-out lg:gap-x-4">
      <TechStack
        src="/images/techStack/nextjs.png"
        width={383}
        height={383}
        name="Next.js"
      ></TechStack>
      <TechStack
        src="/images/techStack/tailwind.png"
        width={383}
        height={383}
        name="Tailwind"
      ></TechStack>
      <TechStack
        src="/images/techStack/django.png"
        width={383}
        height={383}
        name="Django"
      ></TechStack>
      <TechStack
        src="/images/techStack/flutter.png"
        width={383}
        height={383}
        name="Flutter"
      ></TechStack>
    </div>
  );
}
function DatabasesPages() {
  return (
    <div className="p-4 py-6 rounded-3xl bg-[#ffffff17] grid grid-cols-[repeat(auto-fill,7rem)] grid-rows-[repeat(auto-fill,7rem)] justify-evenly gap-y-8 group hover:scale-105 transition-all duration-500 ease-in-out lg:gap-x-4">
      <TechStack
        src="/images/techStack/firebase.png"
        width={383}
        height={383}
        name="Firebase"
      ></TechStack>
    </div>
  );
}
function OtherPages() {
  return (
    <div className="p-4 py-6 rounded-3xl bg-[#ffffff17] grid grid-cols-[repeat(auto-fill,7rem)] grid-rows-[repeat(auto-fill,7rem)] justify-evenly gap-y-8 group hover:scale-105 transition-all duration-500 ease-in-out lg:gap-x-4">
      <TechStack
        src="/images/techStack/figma.png"
        width={383}
        height={383}
        name="Figma"
      ></TechStack>
      <TechStack
        src="/images/techStack/git.png"
        width={383}
        height={383}
        name="Git"
      ></TechStack>
    </div>
  );
}
function PagesSelector(data: {
  page: MutableRefObject<HTMLDivElement>;
  pageList: MutableRefObject<HTMLDivElement>[];
}) {
  useEffect(() => {
    for (let page of data.pageList) {
      if (data.page == page) {
        page.current.style.backgroundColor = "white";
        page.current.style.webkitTextFillColor = "#0f0615";
      } else {
        page.current.style.backgroundColor = "#0f0615";
        page.current.style.webkitTextFillColor = "white";
      }
    }
  });
  switch (data.page) {
    case data.pageList.at(0):
      return <LanguagesPages />;
    case data.pageList.at(1):
      return <LibrariesPages />;
    case data.pageList.at(2):
      return <FrameworksPages />;
    case data.pageList.at(3):
      return <DatabasesPages />;
    case data.pageList.at(4):
      return <OtherPages />;
  }
  return <></>;
}

const TechStackSection = forwardRef(function TechStackSection(props, ref) {
  const languages = useRef() as MutableRefObject<HTMLDivElement>;
  const libraries = useRef() as MutableRefObject<HTMLDivElement>;
  const frameworks = useRef() as MutableRefObject<HTMLDivElement>;
  const databases = useRef() as MutableRefObject<HTMLDivElement>;
  const other = useRef() as MutableRefObject<HTMLDivElement>;
  const pageList = [languages, libraries, frameworks, databases, other];
  const [pages, setPages] = useState(languages);
  return (
    <section
      className="relative w-full p-8 mt-16 flex flex-col gap-5 scroll-mt-28 sm:w-[40rem] lg:w-[85%] lg:items-start lg:p-0"
      ref={ref as any}
    >
      <h1 className="font-sora font-bold text-white text-3xl text-center xl:text-4xl">
        Tech Stack
      </h1>
      <div className="flex flex-col gap-4 lg:w-full">
        <div className="flex gap-2 w-full flex-wrap justify-center text-[1rem] font-inter text-white font-medium lg:text-[1.125rem] lg:w-fit">
          <div
            className="py-2 px-4 rounded-xl hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer"
            ref={languages}
            onClick={(e) => setPages(languages)}
          >
            Languages
          </div>
          <div
            className="py-2 px-4 hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer rounded-xl"
            ref={libraries}
            onClick={(e) => setPages(libraries)}
          >
            Libraries
          </div>
          <div
            className="py-2 px-4 hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer rounded-xl"
            ref={frameworks}
            onClick={(e) => setPages(frameworks)}
          >
            Frameworks
          </div>
          <div
            className="py-2 px-4 hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer rounded-xl"
            ref={databases}
            onClick={(e) => setPages(databases)}
          >
            Databases
          </div>
          <div
            className="py-2 px-4 hover:scale-105 transition-all duration-500 ease-in-out cursor-pointer rounded-xl"
            ref={other}
            onClick={(e) => setPages(other)}
          >
            Other
          </div>
        </div>
        <PagesSelector page={pages} pageList={pageList} />
      </div>
    </section>
  );
});
export default TechStackSection;
