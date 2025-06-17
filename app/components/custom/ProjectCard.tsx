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

interface ProjectCardProps {
  name: string;
  date: string;
  //   roles: string[] | null;
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
  //   roles,
  techs,
  description,
  githubLink,
  hostedLink,
  image,
  whatIDid,
}) => {
  return (
    <Card className="min-h-56 pt-0 rounded-sm ">
      <div className="w-full bg-gray-200 h-40"></div>
      <CardHeader>
        <div className="grid grid-cols-2 md:grid-cols-1">
          <CardTitle className="w-full">{name}</CardTitle>
          <p className="w-full text-end">{date}</p>
        </div>
        <CardDescription>
          {/* <div className="flex gap-x-3 flex-wrap my-2 gap-2">
            {roles !== null &&
              roles.map((role, idx) => (
                <Badge key={`${role}_${idx}`} className="text-[10px]">
                  {role}
                </Badge>
              ))}
          </div> */}
          <div className="flex gap-x-3 flex-wrap my-2 gap-2">
            {techs.map((tech, idx) => (
              <Badge key={`${tech}_${idx}`}>{tech}</Badge>
            ))}
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
      <CardFooter className="flex justify-center mt-auto">
        <AlertDialog>
          <AlertDialogTrigger>
            <Button>Detail</Button>
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
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
