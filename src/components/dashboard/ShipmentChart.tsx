import { shipmentData } from "@/data/mockData";
import {
  CartesianGrid,
  Line,
  LineChart,
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

export const ShipmentChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Aperçu des Expéditions</CardTitle>
        <CardDescription>Réel vs Prévisions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={shipmentData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#3b82f6"
                name="Réel"
              />
              <Line
                type="monotone"
                dataKey="forecast"
                stroke="#9ca3af"
                name="Prévision"
                strokeDasharray="5 5"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
