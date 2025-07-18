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
    <Card className="pt-0 rounded-sm flex flex-col h-full bg-ivory">
      {/* <div className="w-full bg-gray-200 h-40"></div> */}

      <div className="flex-1 flex flex-col px-6 py-4">
        <div data-section="title" className="mb-2">
          <div className="flex justify-between items-start">
            <CardTitle className="text-base font-bold text-ink">
              {name}
            </CardTitle>
            <p className="text-sm text-muted-foreground shrink-0 pl-2">
              {date}
            </p>
          </div>
        </div>

        {/* Roles */}
        <div data-section="roles" className="mb-2">
          <div className="flex gap-x-2 flex-wrap gap-y-2">
            {roles.map((role, idx) => (
              <Badge
                key={`${role}_${idx}`}
                className="text-[10px] bg-indigo shadow"
              >
                {role}
              </Badge>
            ))}
          </div>
        </div>

        {/* Tech stack */}
        <div data-section="techs" className="mb-2">
          <div className="flex gap-x-2 flex-wrap gap-y-2">
            {techs.map((tech, idx) => (
              <TechBadge key={`${tech}_${idx}`} tech={tech} />
            ))}
          </div>
        </div>

        {/* Description */}
        <div data-section="description" className="my-2">
          <p className="text-sm text-ink">{description}</p>
        </div>

        {/* Spacer (flex-grow를 사용하여 푸터를 맨 아래로 밀어냄) */}
        <div className="flex-grow" />

        {/* Footer with button */}
        <div data-section="footer" className="pt-2 flex justify-between">
          <div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button className="cursor-pointer bg-indigo text-ivory hover:bg-coral hover:text-ink transition-all duration-100">
                  What I Did?
                </Button>
              </AlertDialogTrigger>
              {/* ... AlertDialogContent ... */}
              <AlertDialogContent className="z-[100] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-lg w-full">
                <AlertDialogHeader>
                  <AlertDialogTitle className="">What I Did?</AlertDialogTitle>
                  <AlertDialogDescription asChild>
                    <ul>
                      {whatIDid.map((each, idx) => (
                        <li
                          key={idx}
                          className="flex gap-x-3 items-start h-fit my-3"
                        >
                          <MdArrowForwardIos
                            size={15}
                            className="font-bold mt-1 shrink-0"
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
                <Button className="bg-indigo hover:bg-indigo hover:scale-105 active:scale-95 cursor-pointer">
                  <FaGithub />
                </Button>
              </a>
            )}
            {hostedLink !== null && (
              <a href={hostedLink} target="_blank" rel="noopener noreferrer">
                <Button className="bg-coral-sand hover:bg-coral-sand hover:scale-105 active:scale-95 cursor-pointer">
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
