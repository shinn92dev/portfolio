import { Card, CardTitle } from "../ui/card";
import TECH_LOGO_MAP from "~/constants/techLogoMap";
interface SkillCardProps {
  skill: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  const data = TECH_LOGO_MAP[skill.toLowerCase()];
  if (!data) return null;
  return (
    <Card className="w-30">
      <div className="flex flex-col items-center gap-y-5">
        <img src={data.icon} alt="" className="w-25 h-25" />
        <CardTitle className="text-center">{data.name}</CardTitle>
      </div>
    </Card>
  );
};

export default SkillCard;
