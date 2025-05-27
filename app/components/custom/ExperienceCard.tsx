import { Card, CardContent, CardDescription, CardTitle } from "../ui/card";
import { MdArrowForwardIos } from "react-icons/md";

interface ExperienceCardProps {
    title: string;
    company: string;
    duration: string;
    location: string;
    role: string[] | [];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
    title,
    company,
    duration,
    location,
    role,
}) => {
    return (
        <Card>
            <div className="flex flex-col gap-y-3">
                <div className="px-5 md:flex md:justify-between">
                    <CardTitle>{title}</CardTitle>
                    <CardDescription className="text-end">{duration}</CardDescription>
                </div>
                <div className="px-5 md:flex md:justify-between">
                    <CardTitle>{company}</CardTitle>
                    <CardDescription className="text-end">{location}</CardDescription>
                </div>
            </div>
            <CardContent>
                <ul className="flex flex-col gap-y-2">
                    {role.length > 0 &&
                        role.map((item, idx) => (
                            <li key={idx} className="flex h-fit items-center gap-x-2">
                                <MdArrowForwardIos size={15} className="font-bold" />
                                <p>{item}</p>
                            </li>
                        ))}
                </ul>
            </CardContent>
        </Card>
    );
};

export default ExperienceCard;
