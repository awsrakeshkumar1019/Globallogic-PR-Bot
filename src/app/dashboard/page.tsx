import { Suspense } from 'react';
import { DashboardContent } from '@/components/dashboard/dashboard-content';
import { SidebarLayout } from '@/components/layout/sidebar-layout';

function DashboardFallback() {
  return (
    <SidebarLayout title="Dashboard">
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-center space-y-4">
          <div className="w-8 h-8 border-2 border-gray-300 border-t-black rounded-full animate-spin mx-auto"></div>
          <div className="space-y-2">
            <h3 className="text-lg font-medium text-gray-900">Loading Dashboard</h3>
            <p className="text-sm text-gray-600">Initializing dashboard components...
          </div>
        </div>
      </div>
    </SidebarLayout>
  );
}

export default function Dashboard() {
  return (
    <Suspense fallback={<DashboardFallback />}>
      <DashboardContent 
    </Suspense>
  );
} 
