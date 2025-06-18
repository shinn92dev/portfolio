import { useRef } from "react";
import PROJECT_CONTENT from "@/contents/en/project";
import ProjectCard from "@/components/custom/ProjectCard";
import { useSyncCardHeights } from "@/hooks/useSyncCardHeights";
import type { RefObject } from "react";

const Project = () => {
  const containerRef = useRef<HTMLDivElement>(null); // ref 생성
  useSyncCardHeights(containerRef as RefObject<HTMLElement>);
  return (
    <div className="pb-10 px-5">
      <h2 className="my-5 font-bold text-3xl">Project.</h2>
      <div
        ref={containerRef}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch"
      >
        {PROJECT_CONTENT.map((item) => (
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
        ))}
      </div>
    </div>
  );
};

export default Project;
