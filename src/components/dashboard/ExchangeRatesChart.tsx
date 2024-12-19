import { exchangeRates } from "@/data/mockData";
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

export const ExchangeRatesChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Taux de Change</CardTitle>
        <CardDescription>Évolution sur 7 jours</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={exchangeRates}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="USD" stroke="#3b82f6" />
              <Line type="monotone" dataKey="GBP" stroke="#10b981" />
              <Line type="monotone" dataKey="CNY" stroke="#f59e0b" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};
