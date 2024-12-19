import { messages } from "@/data/mockData";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export const MessagesList = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Messages Récents</CardTitle>
        <CardDescription>Communication multilingue</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {messages.map((msg) => (
            <div key={msg.id} className="p-4 border rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold">{msg.from}</h3>
                  <Badge variant="outline" className="mt-1">
                    {msg.lang}
                  </Badge>
                </div>
                <span className="text-sm text-gray-500">{msg.time}</span>
              </div>
              <p className="text-gray-600">{msg.content}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
