import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Menu, Settings, Store, Users, X } from "lucide-react";
import { useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function MainLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false); // Par défaut fermé sur mobile
  const location = useLocation();

  const navigationItems = [
    { icon: LayoutDashboard, label: "Tableau de Bord", href: "/dashboard" },
    { icon: Store, label: "Fournisseurs", href: "/suppliers" },
    { icon: Users, label: "Clients", href: "/clients" },
    { icon: Settings, label: "Paramètres", href: "/settings" },
  ];

  return (
    <div className="flex h-screen w-full overflow-hidden bg-gray-50">
      {/* Overlay sur mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 lg:hidden z-20"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed lg:static inset-y-0 left-0 z-30 w-64 transform bg-white transition-transform duration-200 ease-in-out lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full",
          "border-r"
        )}
      >
        <div className="flex h-16 items-center justify-between px-4">
          <h2 className="text-lg font-semibold">ImportExport</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        <nav className="space-y-2 px-2">
          {navigationItems.map((item) => (
            <Link key={item.href} to={item.href}>
              <Button
                variant="ghost" // Changement ici : utilisation de ghost au lieu de secondary
                className={cn(
                  "w-full justify-start gap-2",
                  location.pathname === item.href && [
                    "bg-accent text-accent-foreground", // Style actif
                    "hover:bg-accent hover:text-accent-foreground", // Hover style pour l'élément actif
                  ],
                  "hover:bg-accent/50" // Hover style pour les éléments non-actifs
                )}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Button>
            </Link>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen w-full overflow-x-hidden">
        {/* Header Mobile */}
        <div className="lg:hidden flex items-center h-16 px-4 border-b bg-white">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-5 w-5" />
          </Button>
          <h1 className="ml-4 text-lg font-semibold">ImportExport</h1>
        </div>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
