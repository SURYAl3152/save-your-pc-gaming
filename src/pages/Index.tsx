
import { Monitor, Cloud, Gamepad, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [isConnected] = useState(true);
  const navigate = useNavigate();

  const handleLaunch = () => {
    navigate('/auth');
  };

  return (
    <div className="min-h-screen p-6 space-y-6">
      {/* Hero Section */}
      <div className="glass-card card-hover mb-8">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-sm text-neutral">Cloud Gaming</span>
            <h1 className="text-4xl font-bold mb-4">Welcome Back</h1>
            <p className="text-muted-foreground mb-6">
              Your cloud instance is {isConnected ? "ready" : "offline"}
            </p>
          </div>
          <div className="hidden md:block">
            <Gamepad className="w-16 h-16 text-primary animate-float" />
          </div>
        </div>
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="glass-card card-hover group cursor-pointer">
          <div className="flex items-center space-x-4">
            <div className="relative w-24 h-24 rounded-lg overflow-hidden">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/8/8a/Grand_Theft_Auto_V_Logo.png"
                alt="GTA V"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">Grand Theft Auto V</h3>
              <p className="text-sm text-muted-foreground">Ready to play</p>
              <button 
                onClick={handleLaunch}
                className="mt-4 bg-primary text-white px-4 py-2 rounded-lg font-medium flex items-center hover:bg-opacity-90 transition-all"
              >
                Launch
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="glass-card card-hover group cursor-pointer">
          <div className="flex items-center space-x-4">
            <div className="relative w-24 h-24 rounded-lg overflow-hidden">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/4/41/Detroit_Become_Human.png"
                alt="Detroit: Become Human"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-2">Detroit: Become Human</h3>
              <p className="text-sm text-muted-foreground">Ready to play</p>
              <button 
                onClick={handleLaunch}
                className="mt-4 bg-primary text-white px-4 py-2 rounded-lg font-medium flex items-center hover:bg-opacity-90 transition-all"
              >
                Launch
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-card card-hover">
          <Monitor className="w-8 h-8 text-primary mb-4" />
          <h3 className="text-lg font-semibold mb-2">System Status</h3>
          <div className="flex items-center">
            <span className={`status-indicator ${isConnected ? "status-online" : "status-offline"}`}></span>
            <span>{isConnected ? "Connected" : "Offline"}</span>
          </div>
        </div>

        <div className="glass-card card-hover">
          <Cloud className="w-8 h-8 text-primary mb-4" />
          <h3 className="text-lg font-semibold mb-2">Cloud Instance</h3>
          <p className="text-sm text-muted-foreground">High Performance</p>
          <p className="text-2xl font-bold mt-2">60 FPS</p>
        </div>

        <div className="glass-card card-hover">
          <Gamepad className="w-8 h-8 text-primary mb-4" />
          <h3 className="text-lg font-semibold mb-2">Game Ready</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>Graphics</span>
              <span className="text-success">Ultra</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Resolution</span>
              <span className="text-success">1440p</span>
            </div>
          </div>
        </div>
      </div>

      {/* Requirements Section */}
      <div className="glass-card card-hover mt-6">
        <h2 className="text-xl font-semibold mb-4">System Requirements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h4 className="text-sm font-medium text-neutral mb-2">Recommended</h4>
            <ul className="space-y-2 text-sm">
              <li>• 25 Mbps Internet Connection</li>
              <li>• Chrome or Edge Browser</li>
              <li>• Windows 10 or newer</li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium text-neutral mb-2">Your System</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-success">• 100 Mbps Connection ✓</li>
              <li className="text-success">• Chrome Browser ✓</li>
              <li className="text-success">• Windows 11 ✓</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
