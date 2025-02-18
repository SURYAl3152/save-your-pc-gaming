
import { Monitor, Cloud, Gamepad } from "lucide-react";

interface StatsGridProps {
  isConnected: boolean;
}

export const StatsGrid = ({ isConnected }: StatsGridProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      <div className="glass-card p-6 hover:translate-y-[-2px] transition-all">
        <div className="flex items-center space-x-3">
          <Monitor className="text-primary w-6 h-6" />
          <h3 className="text-lg font-bold">System Status</h3>
        </div>
        <p className="text-sm text-muted-foreground mt-2 flex items-center">
          <span className={`status-indicator ${isConnected ? 'status-online' : 'status-offline'}`}></span>
          {isConnected ? "All Systems Operational" : "Maintenance"}
        </p>
      </div>

      <div className="glass-card p-6 hover:translate-y-[-2px] transition-all">
        <div className="flex items-center space-x-3">
          <Cloud className="text-primary w-6 h-6" />
          <h3 className="text-lg font-bold">Cloud Servers</h3>
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          3 High-Performance Servers Available
        </p>
      </div>

      <div className="glass-card p-6 hover:translate-y-[-2px] transition-all">
        <div className="flex items-center space-x-3">
          <Gamepad className="text-primary w-6 h-6" />
          <h3 className="text-lg font-bold">Games Library</h3>
        </div>
        <p className="text-sm text-muted-foreground mt-2">
          150+ Premium Games Available
        </p>
      </div>
    </div>
  );
};
