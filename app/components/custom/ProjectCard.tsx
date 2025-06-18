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
    <Card className="pt-0 rounded-sm flex flex-col h-full">
      <div className="w-full bg-gray-200 h-40"></div>

      {/* flex-1을 주어 남은 공간을 모두 차지하도록 합니다. */}
      <div className="flex-1 flex flex-col px-6 py-4">
        {/* Title + Date */}
        <div data-section="title" className="mb-2">
          <div className="flex justify-between items-start">
            <CardTitle className="text-base font-bold">{name}</CardTitle>
            <p className="text-sm text-muted-foreground shrink-0 pl-2">
              {date}
            </p>
          </div>
        </div>

        {/* Roles */}
        {/* 각 섹션을 div로 감싸고 data-section 속성을 추가합니다. */}
        <div data-section="roles" className="mb-2">
          <div className="flex gap-x-2 flex-wrap gap-y-2">
            {roles.map((role, idx) => (
              <Badge key={`${role}_${idx}`} className="text-[10px]">
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
        <div data-section="description" className="mb-2">
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>

        {/* Spacer (flex-grow를 사용하여 푸터를 맨 아래로 밀어냄) */}
        <div className="flex-grow" />

        {/* Footer with button */}
        <div data-section="footer" className="pt-2 flex justify-between">
          <div>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button>What I Did?</Button>
              </AlertDialogTrigger>
              {/* ... AlertDialogContent ... */}
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>What I Did?</AlertDialogTitle>
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
                <Button>
                  <FaGithub />
                </Button>
              </a>
            )}
            {hostedLink !== null && (
              <a href={hostedLink} target="_blank" rel="noopener noreferrer">
                <Button>
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
