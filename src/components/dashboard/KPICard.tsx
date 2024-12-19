import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface KPICardProps {
  title: string;
  value: string | number;
  subtitle: string;
  icon: LucideIcon;
  iconColor?: string;
  subtitleColor?: string;
}

export const KPICard = ({
  title,
  value,
  subtitle,
  icon: Icon,
  iconColor = "text-gray-500",
  subtitleColor,
}: KPICardProps) => {
  return (
    <Card className="w-full">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <Icon className={`h-4 w-4 ${iconColor}`} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className={`text-xs ${subtitleColor || "text-gray-500"}`}>
          {subtitle}
        </p>
      </CardContent>
    </Card>
  );
};
