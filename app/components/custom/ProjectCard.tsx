import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { MdArrowForwardIos } from "react-icons/md";
import TechBadge from "./TechBadge";
import { FaGithub } from "react-icons/fa6";
import { RiHomeHeartLine } from "react-icons/ri";

interface ProjectCardProps {
  name: string;
  date: string;
  roles: string[];
  techs: string[];
  description: string;
  githubLink: string | null;
  hostedLink: string | null;
  image: string;
  whatIDid: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  date,
  roles,
  techs,
  description,
  githubLink,
  hostedLink,
  image,
  whatIDid,
}) => {
  return (
    <Card className="bg-ivory flex h-full flex-col rounded-sm pt-0">
      {/* <div className="w-full bg-gray-200 h-40"></div> */}

      <div className="flex flex-1 flex-col px-6 py-4">
        <div data-section="title" className="mb-2">
          <div className="flex items-start justify-between">
            <CardTitle className="text-ink text-base font-bold">
              {name}
            </CardTitle>
            <p className="text-muted-foreground shrink-0 pl-2 text-sm">
              {date}
            </p>
          </div>
        </div>

        {/* Roles */}
        <div data-section="roles" className="mb-2">
          <div className="flex flex-wrap gap-x-2 gap-y-2">
            {roles.map((role, idx) => (
              <Badge
                key={`${role}_${idx}`}
                className="bg-indigo text-[10px] shadow"
              >
                {role}
              </Badge>
            ))}
          </div>
        </div>

        {/* Tech stack */}
        <div data-section="techs" className="mb-2">
          <div className="flex flex-wrap gap-x-2 gap-y-2">
            {techs.map((tech, idx) => (
              <TechBadge key={`${tech}_${idx}`} tech={tech} />
            ))}
          </div>
        </div>

        {/* Description */}
        <div data-section="description" className="my-2">
          <p className="text-ink text-sm">{description}</p>
        </div>

        {/* Spacer (flex-grow를 사용하여 푸터를 맨 아래로 밀어냄) */}
        <div className="flex-grow" />

        {/* Footer with button */}
        <div data-section="footer" className="flex justify-between pt-2">
          <div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="bg-indigo text-ivory hover:bg-coral hover:text-ink cursor-pointer transition-all duration-100">
                  What I Did?
                </Button>
              </AlertDialogTrigger>
              {/* ... AlertDialogContent ... */}
              <AlertDialogContent className="fixed top-1/2 left-1/2 z-[100] w-full max-w-lg -translate-x-1/2 -translate-y-1/2">
                <AlertDialogHeader>
                  <AlertDialogTitle className="">What I Did?</AlertDialogTitle>
                  <AlertDialogDescription asChild>
                    <ul>
                      {whatIDid.map((each, idx) => (
                        <li
                          key={idx}
                          className="my-3 flex h-fit items-start gap-x-3"
                        >
                          <MdArrowForwardIos
                            size={15}
                            className="mt-1 shrink-0 font-bold"
                          />
                          <span>{each}</span>
                        </li>
                      ))}
                    </ul>
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Close</AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
          <div className="flex gap-x-2">
            {githubLink !== null && (
              <a href={githubLink} target="_blank" rel="noopener noreferrer">
                <Button className="bg-indigo hover:bg-indigo cursor-pointer hover:scale-105 active:scale-95">
                  <FaGithub />
                </Button>
              </a>
            )}
            {hostedLink !== null && (
              <a href={hostedLink} target="_blank" rel="noopener noreferrer">
                <Button className="bg-coral-sand hover:bg-coral-sand cursor-pointer hover:scale-105 active:scale-95">
                  <RiHomeHeartLine />
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
