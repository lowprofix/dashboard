import {
  BrowserRouter as Router,
  Route,
  Routes,
  BrowserRouter,
  Navigate,
} from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import Dashboard from "./pages/dashboard";
import Suppliers from "./pages/suppliers";
import Clients from "./pages/clients";
import Settings from "./pages/settings";
import Login from "./pages/login";
import "./App.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes publiques */}
        <Route path="/login" element={<Login />} />

        {/* Routes protégées avec Layout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="suppliers" element={<Suppliers />} />
          <Route path="clients" element={<Clients />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
