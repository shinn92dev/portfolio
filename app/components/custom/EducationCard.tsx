import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import kwuLogo from "@/assets/kwu_logo.png";
import bcitLogo from "@/assets/bcit_logo.png";
import knouLogo from "@/assets/knou_logo.png";

interface EducationCardProps {
    name: string;
    degree: string;
    location: string;
    duration: string;
}

const EducationCard: React.FC<EducationCardProps> = ({ name, degree, location, duration }) => {
    const logo = name.includes("Kwangwoon")
        ? kwuLogo
        : name.includes("Korean")
        ? knouLogo
        : bcitLogo;
    return (
        <Card className="px-5">
            <div className="flex h-full items-center md:gap-x-10">
                <img src={logo} className="w-15" alt="" />
                <div className="flex flex-col gap-y-2 w-full">
                    <div className="px-5 md:flex md:justify-between">
                        <CardTitle>{degree}</CardTitle>
                        <CardDescription>{duration}</CardDescription>
                    </div>
                    <div className="px-5 md:flex md:justify-between">
                        <CardTitle>{name}</CardTitle>
                        <p>{location}</p>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default EducationCard;
