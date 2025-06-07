"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { 
  BarChart3, 
  FileText, 
  Users, 
  MessageSquare, 
  Settings,
  LogOut,
  Eye,
  Plus,
  TrendingUp,
  Phone
} from "lucide-react";

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [stats, setStats] = useState({
    totalViews: 1247,
    whatsappClicks: 89,
    portfolioViews: 156,
    contactForms: 23
  });
  const router = useRouter();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("admin_logged_in");
    if (isLoggedIn === "true") {
      setIsAuthenticated(true);
    } else {
      router.push("/admin/login");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("admin_logged_in");
    localStorage.removeItem("admin_username");
    router.push("/admin/login");
  };

  if (!isAuthenticated) {
    return <div>Carregando...</div>;
  }

  const menuItems = [
    { icon: BarChart3, label: "Dashboard", href: "/admin/dashboard", active: true },
    { icon: FileText, label: "Portfólio", href: "/admin/portfolio" },
    { icon: MessageSquare, label: "Mensagens", href: "/admin/messages" },
    { icon: TrendingUp, label: "Relatórios", href: "/admin/reports" },
    { icon: Settings, label: "Configurações", href: "/admin/settings" },
  ];

  const recentWhatsAppClicks = [
    { page: "Fachadas Comerciais", time: "2 min atrás", count: 3 },
    { page: "Banners e Impressões", time: "15 min atrás", count: 1 },
    { page: "Adesivação de Veículos", time: "1h atrás", count: 2 },
    { page: "Hero Principal", time: "2h atrás", count: 1 },
    { page: "Portfólio Geral", time: "3h atrás", count: 1 },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 w-64 bg-white shadow-lg">
        <div className="p-6 border-b">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 text-white p-2 rounded-lg font-bold text-lg">
              MR
            </div>
            <div>
              <h2 className="font-bold text-gray-800">Mr. Machado</h2>
              <p className="text-sm text-gray-600">Admin Panel</p>
            </div>
          </div>
        </div>

        <nav className="p-4">
          <ul className="space-y-2">
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <li key={index}>
                  <a
                    href={item.href}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      item.active 
                        ? "bg-blue-600 text-white" 
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <IconComponent className="w-5 h-5" />
                    <span>{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Sair</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Dashboard</h1>
          <p className="text-gray-600">Bem-vindo ao painel administrativo</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Visualizações</p>
                <p className="text-2xl font-bold text-gray-800">{stats.totalViews}</p>
              </div>
              <Eye className="w-8 h-8 text-blue-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Cliques WhatsApp</p>
                <p className="text-2xl font-bold text-gray-800">{stats.whatsappClicks}</p>
              </div>
              <Phone className="w-8 h-8 text-green-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Portfólio</p>
                <p className="text-2xl font-bold text-gray-800">{stats.portfolioViews}</p>
              </div>
              <FileText className="w-8 h-8 text-purple-600" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Contatos</p>
                <p className="text-2xl font-bold text-gray-800">{stats.contactForms}</p>
              </div>
              <MessageSquare className="w-8 h-8 text-orange-600" />
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Recent WhatsApp Clicks */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold text-gray-800">Cliques WhatsApp Recentes</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentWhatsAppClicks.map((click, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-800">{click.page}</p>
                      <p className="text-sm text-gray-600">{click.time}</p>
                    </div>
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-sm">
                      {click.count} clicks
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-lg shadow">
            <div className="p-6 border-b">
              <h3 className="text-lg font-semibold text-gray-800">Ações Rápidas</h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4">
                <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <Plus className="w-8 h-8 text-blue-600 mb-2" />
                  <span className="text-sm font-medium">Novo Projeto</span>
                </button>
                
                <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <MessageSquare className="w-8 h-8 text-green-600 mb-2" />
                  <span className="text-sm font-medium">Ver Mensagens</span>
                </button>
                
                <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <BarChart3 className="w-8 h-8 text-purple-600 mb-2" />
                  <span className="text-sm font-medium">Relatórios</span>
                </button>
                
                <button className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                  <Settings className="w-8 h-8 text-gray-600 mb-2" />
                  <span className="text-sm font-medium">Configurações</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}