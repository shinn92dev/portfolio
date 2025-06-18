import TECH_BADGE_MAP from "~/constants/techBadgeMap";
import { Badge } from "../ui/badge";

interface TechBadgeProps {
  tech: string;
}

const TechBadge: React.FC<TechBadgeProps> = ({ tech }) => {
  const data = TECH_BADGE_MAP[tech.toLowerCase()];
  if (!data) return null;

  return (
    <Badge className="flex items-center gap-2 px-3 py-0 bg-gray-100 rounded-full shadow text-sm">
      <img src={data.icon} alt={`${data.name} icon`} className="w-4 h-4" />
      <span className="text-ink">{data.name}</span>
    </Badge>
  );
};

export default TechBadge;
