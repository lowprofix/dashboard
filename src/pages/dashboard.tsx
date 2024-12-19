import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { KPICard } from "@/components/dashboard/KPICard";
import { ShipmentChart } from "@/components/dashboard/ShipmentChart";
import { ExchangeRatesChart } from "@/components/dashboard/ExchangeRatesChart";
import { CustomsDocuments } from "@/components/dashboard/CustomsDocuments";
import { MessagesList } from "@/components/dashboard/MessagesList";
import { useCurrency } from "@/hooks/useCurrency";
import {
  BadgeDollarSign,
  Package,
  FileText,
  MessageSquare,
  Euro,
  DollarSign,
} from "lucide-react";
import { TransportChart } from "@/components/dashboard/TransportChart";
import { transportData } from "@/data/mockData";

export default function Dashboard() {
  const { currency, setCurrency, formatCurrency } = useCurrency("EUR");
  const [language, setLanguage] = useState("FR");

  return (
    <div className="w-full min-h-screen bg-gray-50 p-6">
      {/* ... Header ... */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Tableau de Bord Import/Export</h1>
          <p className="text-gray-600">Vue d'ensemble des opérations</p>
        </div>
        <div className="flex gap-4">
          <Select value={currency} onValueChange={setCurrency}>
            <SelectTrigger className="w-[130px]">
              <SelectValue>
                {currency === "EUR" ? "€ EUR" : "$ USD"}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="EUR">€ EUR</SelectItem>
              <SelectItem value="USD">$ USD</SelectItem>
            </SelectContent>
          </Select>
          <Select value={language} onValueChange={setLanguage}>
            <SelectTrigger className="w-[130px]">
              <SelectValue>Français</SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="FR">Français</SelectItem>
              <SelectItem value="EN">English</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      {/* KPI Cards */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <KPICard
          title="Expéditions en Cours"
          value="24"
          subtitle="+2.5% vs mois précédent"
          icon={Package}
        />
        <KPICard
          title="Valeur des transaction"
          value={formatCurrency(120000)}
          subtitle="Total des transactions en cours"
          icon={BadgeDollarSign}
        />
        <KPICard
          title="Document à renouveler"
          value="3"
          subtitle="Dans les 30 jours"
          subtitleColor="text-red-500"
          icon={FileText}
          iconColor="text-red-500"
        />
        <KPICard
          title="Messages non lus"
          value="12"
          subtitle="Nouveaux messages"
          icon={MessageSquare}
          iconColor="text-blue-500"
          subtitleColor="text-blue-500"
        />
      </div>

      {/* Tabs */}
      <Tabs defaultValue="supply-chain" className="space-y-4">
        <TabsList className="flex flex-col sm:flex-row h-auto">
          <TabsTrigger
            value="supply-chain"
            className="w-full sm:w-auto mb-2 sm:mb-0"
          >
            Chaîne d'Approvisionnement
          </TabsTrigger>
          <TabsTrigger
            value="customs"
            className="w-full sm:w-auto mb-2 sm:mb-0"
          >
            Documentation Douanière
          </TabsTrigger>
          <TabsTrigger
            value="finance"
            className="w-full sm:w-auto mb-2 sm:mb-0"
          >
            Finance
          </TabsTrigger>
          <TabsTrigger value="communication" className="w-full sm:w-auto">
            Communication
          </TabsTrigger>
        </TabsList>

        <TabsContent value="supply-chain">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ShipmentChart />
            <TransportChart data={transportData} />
          </div>
        </TabsContent>

        <TabsContent value="customs">
          <CustomsDocuments />
        </TabsContent>

        <TabsContent value="finance">
          <ExchangeRatesChart />
        </TabsContent>

        <TabsContent value="communication">
          <MessagesList />
        </TabsContent>
      </Tabs>
    </div>
  );
}
