import { Card, CardTitle } from "../ui/card";
import SKILL_LOGOS from "@/contents/skillLogo";
interface SkillCardProps {
    skill: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
    let skillKey = skill.toLowerCase().replace(" ", "").replace(".", "").replace("/", "");
    return (
        <Card className="w-30">
            <div className="flex flex-col items-center gap-y-5">
                <img src={SKILL_LOGOS[skillKey]} alt="" className="w-25 h-25" />
                <CardTitle className="text-center">{skill}</CardTitle>
            </div>
        </Card>
    );
};

export default SkillCard;
