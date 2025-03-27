
import React from 'react';
import { Routes, Route, Navigate, Link, useLocation } from 'react-router-dom';
import AdminNavbar from '@/components/AdminNavbar';
import { 
  Users, 
  Activity, 
  ShieldCheck, 
  TrendingUp, 
  FileText, 
  BarChart, 
  Percent,
  ChevronRight
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Placeholder components for dashboard sections
const UserManagement = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-6">User Management</h2>
    <div className="bg-white rounded-lg shadow p-6">
      <p className="text-gray-500">User management functionality will be implemented here, including:</p>
      <ul className="list-disc ml-6 mt-2 space-y-1">
        <li>List of all users (jobseeker & company)</li>
        <li>Filter by activity/role</li>
        <li>Account suspend/ban feature</li>
      </ul>
    </div>
  </div>
);

const AIMonitoring = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-6">AI Monitoring</h2>
    <div className="bg-white rounded-lg shadow p-6">
      <p className="text-gray-500">AI monitoring tools will be implemented here, including:</p>
      <ul className="list-disc ml-6 mt-2 space-y-1">
        <li>Tracking recommendation model performance</li>
        <li>Analysis of bias in recommendations</li>
        <li>Update model based on feedback</li>
      </ul>
    </div>
  </div>
);

const ContentModeration = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-6">Content Moderation</h2>
    <div className="bg-white rounded-lg shadow p-6">
      <p className="text-gray-500">Content moderation tools will be implemented here, including:</p>
      <ul className="list-disc ml-6 mt-2 space-y-1">
        <li>Approve/reject job vacancies</li>
        <li>Company verification</li>
      </ul>
    </div>
  </div>
);

const Analytics = () => (
  <div className="p-6">
    <h2 className="text-2xl font-bold mb-6">Analytics</h2>
    <div className="bg-white rounded-lg shadow p-6">
      <p className="text-gray-500">Analytics dashboard will be implemented here, including:</p>
      <ul className="list-disc ml-6 mt-2 space-y-1">
        <li>Active user statistics</li>
        <li>Conversion rate (signup → apply/hire)</li>
      </ul>
    </div>
  </div>
);

const AdminDashboard: React.FC = () => {
  const location = useLocation();
  
  // Navigation configuration
  const navigation = [
    {
      name: 'User Management',
      path: '/admin/users',
      icon: Users,
      component: UserManagement
    },
    {
      name: 'AI Monitoring',
      path: '/admin/ai-monitoring',
      icon: Activity,
      component: AIMonitoring
    },
    {
      name: 'Content Moderation',
      path: '/admin/moderation',
      icon: ShieldCheck,
      component: ContentModeration
    },
    {
      name: 'Analytics',
      path: '/admin/analytics',
      icon: BarChart,
      component: Analytics
    }
  ];
  
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <AdminNavbar />
      
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200">
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800">Dashboard</h2>
          </div>
          <nav className="mt-2">
            <ul>
              {navigation.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <li key={item.name}>
                    <Link
                      to={item.path}
                      className={cn(
                        "flex items-center px-4 py-3 text-sm",
                        isActive
                          ? "bg-found-blue/10 text-found-blue border-r-2 border-found-blue"
                          : "text-gray-700 hover:bg-gray-100"
                      )}
                    >
                      <item.icon className={cn(
                        "mr-3 h-5 w-5",
                        isActive ? "text-found-blue" : "text-gray-500"
                      )} />
                      <span>{item.name}</span>
                      {isActive && <ChevronRight className="ml-auto h-4 w-4 text-found-blue" />}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>
        
        {/* Main content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Navigate to="/admin/users" replace />} />
            {navigation.map((item) => (
              <Route
                key={item.path}
                path={item.path.replace('/admin/', '')}
                element={<item.component />}
              />
            ))}
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
