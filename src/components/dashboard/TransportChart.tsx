import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { transportData } from "@/data/mockData";

interface TransportChartProps {
  data: Array<{
    name: string;
    value: number;
  }>;
}

export const TransportChart = ({ data }: TransportChartProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Répartition des Modes de Transport</CardTitle>
        <CardDescription>Distribution en pourcentage</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={transportData} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" unit="%" domain={[0, 100]} />
              <YAxis dataKey="name" type="category" width={100} />
              <Tooltip formatter={(value) => `${value}%`} />
              <Bar dataKey="value" fill="#3b82f6">
                {data.map((entry, index) => (
                  <text
                    key={entry.name}
                    x={entry.value + 2}
                    y={index * 40 + 20}
                    fill="#666"
                    fontSize={12}
                    textAnchor="start"
                    dy={4}
                  >
                    {entry.value}%
                  </text>
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
