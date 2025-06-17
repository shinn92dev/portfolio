import PROJECT_CONTENT from "@/contents/en/project";
import ProjectCard from "~/components/custom/ProjectCard";

const Project = () => {
  return (
    <div className="pb-10 px-5">
      <h2 className="my-5 font-bold text-3xl">Project.</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-3">
        {PROJECT_CONTENT.map((item) => {
          return (
            <ProjectCard
              name={item.title}
              date={item.date}
              //   roles={item.roles}
              techs={item.techStack}
              description={item.description}
              githubLink={item.gitHubLink}
              hostedLink={item.hostedLink}
              image={item.image}
              whatIDid={item.whatIDid}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Project;
