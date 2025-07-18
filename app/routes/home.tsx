import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useRef } from "react";
import { useSyncCardHeights } from "@/hooks/useSyncCardHeights"; // Hook import
import type { RefObject } from "react";

import { Button } from "@/components/ui/button";
import mainImg from "@/assets/anthony1.webp";
import bg from "@/assets/background2.jpg";
import { useEffect, useState } from "react";
import HOME_CONTENT from "@/contents/en/home";
import PROJECT_CONTENT from "@/contents/en/project";
import ProjectCard from "@/components/custom/ProjectCard";
const Home = () => {
  const [scale, setScale] = useState(1.2);
  const carouselRef = useRef<HTMLDivElement>(null); // ref 생성
  useSyncCardHeights(carouselRef as RefObject<HTMLElement>);

  useEffect(() => {
    const updateScale = () => {
      const width = window.innerWidth;
      const minW = 400;
      const maxW = 1200;
      const clampedW = Math.min(Math.max(width, minW), maxW);
      const s = 1.2 - ((clampedW - minW) / (maxW - minW)) * 0.2;
      setScale(s);
    };

    window.addEventListener("resize", updateScale);
    updateScale();
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <div className="pb-10 text-ink">
      {/* Main Photo */}
      <div
        className="grid md:grid-cols-2 bg-cover bg-center filter "
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="w-full aspect-[1/0.7] overflow-hidden relative">
          <div
            className="absolute inset-0 transition-transform duration-300 ease-in-out"
            style={{ transform: `scale(${scale})`, transformOrigin: "top" }}
          >
            <img
              src={mainImg}
              alt={"Main image"}
              className="w-full h-full object-cover object-top shadow-2xl shadow-ink"
            />
          </div>
        </div>
        <div className="w-full flex flex-col">
          <div className="md:h-full py-5">
            <div className="text-3xl h-full flex flex-col items-center justify-center">
              <p className="font-bold">{HOME_CONTENT.titleMsg}</p>
              <h2 className="w-full text-center font-bold text-6xl text-ink">
                <span className="text-xl">{HOME_CONTENT.titleMsg2}</span>
                {HOME_CONTENT.title}
              </h2>
              <p className="text-xl px-10 font-bold py-5 drop-shadow mt-5">
                {HOME_CONTENT.shortIntro}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-4 col-span-full justify-center  p-5 py-10 gap-5">
          {HOME_CONTENT.buttons.map((items) => {
            const Icon = items.icon;
            return (
              <div
                key={items.title}
                className="w-full flex justify-center shadow-xl shadow-ivory"
              >
                <Button
                  asChild
                  className="flex h-12 w-full max-w-60 items-center justify-center gap-5 drop-shadow bg-coral-sand hover:bg-coral-sand text-ink font-bold text-xl hover:scale-105 duration-75 active:scale-95 cursor-pointer"
                >
                  <a
                    href={items.link}
                    target={`${items.type !== "email" && "_blank"}`}
                    rel="noopener noreferrer"
                  >
                    <Icon className="" />
                    <span className="">{items.title}</span>
                  </a>
                </Button>
              </div>
            );
          })}
        </div>
      </div>
      {/* Top Project Section */}
      <div>
        <div className="py-5">
          <h2 className="text-xl text-center font-bold text-ink">
            {HOME_CONTENT.projectTitle}
          </h2>
        </div>
        <Carousel className="px-3">
          <CarouselContent ref={carouselRef} className="gap-5">
            {PROJECT_CONTENT.map(
              (item, idx) =>
                item.highlight && (
                  <CarouselItem
                    key={item.title}
                    className="md:basis-1/2 hover:scale-[0.99] duration-75 transition-all overflow-visible"
                  >
                    <div className="h-full">
                      <ProjectCard
                        key={item.title}
                        name={item.title}
                        date={item.date}
                        roles={item.roles}
                        techs={item.techStack}
                        description={item.description}
                        githubLink={item.gitHubLink}
                        hostedLink={item.hostedLink}
                        image={item.image}
                        whatIDid={item.whatIDid}
                      />
                    </div>
                  </CarouselItem>
                )
            )}
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
