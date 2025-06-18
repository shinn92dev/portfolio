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
      {/* Optional image placeholder */}
      <div className="w-full bg-gray-200 h-50"></div>
      {/* Main grid layout inside card */}
      <div className="flex-1 grid grid-rows-[auto_auto_auto_auto_1fr_auto] px-6">
        {/* Title + Date */}
        <CardHeader className="px-0 pb-2">
          <div className="flex justify-between items-start">
            <CardTitle className="text-base font-bold">{name}</CardTitle>
            <p className="text-sm text-muted-foreground">{date}</p>
          </div>
        </CardHeader>

        {/* Roles */}
        <CardContent className="px-0 pb-2 min-h-[40px]">
          <div className="flex gap-x-2 flex-wrap gap-y-2">
            {roles.map((role, idx) => (
              <Badge key={`${role}_${idx}`} className="text-[10px]">
                {role}
              </Badge>
            ))}
          </div>
        </CardContent>

        {/* Tech stack */}
        <CardContent className="px-0 pb-2 min-h-[40px]">
          <div className="flex gap-x-2 flex-wrap gap-y-2">
            {techs.map((tech, idx) => (
              <TechBadge key={`${tech}_${idx}`} tech={tech} />
            ))}
          </div>
        </CardContent>

        {/* Description */}
        <CardContent className="px-0 pb-2 min-h-[80px]">
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>

        {/* Spacer (grow to fill remaining space) */}
        <div />

        {/* Footer with button */}
        <CardFooter className="px-0 pt-0 flex justify-between mt-10">
          <div>
            <AlertDialog>
              <AlertDialogTrigger>
                <Button>What I Did?</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>What I Did?</AlertDialogTitle>
                  <AlertDialogDescription>
                    {whatIDid.map((each, idx) => (
                      <div
                        key={idx}
                        className="flex gap-x-2 items-center h-fit my-2"
                      >
                        <MdArrowForwardIos size={15} className="font-bold" />
                        <p>{each}</p>
                      </div>
                    ))}
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Close</AlertDialogCancel>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
          <div className="flex gap-x-3">
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
        </CardFooter>
      </div>
    </Card>
  );
};

export default ProjectCard;
