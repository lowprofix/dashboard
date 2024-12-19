import { customsDocuments } from "@/data/mockData";
import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

export const CustomsDocuments = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Documents Douaniers</CardTitle>
        <CardDescription>Suivi des certifications et licences</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {customsDocuments.map((doc) => (
            <div
              key={doc.id}
              className="flex justify-between items-center p-4 border rounded-lg"
            >
              <div>
                <h3 className="font-semibold">{doc.type}</h3>
                <p className="text-sm text-gray-500">ID: {doc.id}</p>
              </div>
              <div className="text-right">
                <Badge
                  variant={
                    doc.status === "Valide"
                      ? "default"
                      : doc.status === "À renouveler"
                      ? "secondary"
                      : "default"
                  }
                >
                  {doc.status}
                </Badge>
                <p className="text-sm text-gray-500 mt-1">
                  Exp: {doc.expiration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
