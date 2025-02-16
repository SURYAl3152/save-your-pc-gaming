import { Monitor, Cloud, Gamepad, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const [isConnected] = useState(true);
  const navigate = useNavigate();

  const handleLaunch = () => {
    navigate('/booking');
  };

  return (
    <div className="min-h-screen p-6">
      {/* Hero Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Lovable Gaming Dashboard
        </h1>
        <p className="text-lg text-muted-foreground">
          Start playing your favorite games in the cloud.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <button className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all">
            Get Started
          </button>
          <button className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium hover:bg-opacity-80 transition-all">
            Learn More
          </button>
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="glass-card p-4">
          <div className="flex items-center space-x-2">
            <Monitor className="text-primary w-6 h-6" />
            <h3 className="text-lg font-bold">System Status</h3>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            {isConnected ? "Online" : "Offline"}
          </p>
        </div>

        <div className="glass-card p-4">
          <div className="flex items-center space-x-2">
            <Cloud className="text-primary w-6 h-6" />
            <h3 className="text-lg font-bold">Cloud Servers</h3>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            3 Servers Available
          </p>
        </div>

        <div className="glass-card p-4">
          <div className="flex items-center space-x-2">
            <Gamepad className="text-primary w-6 h-6" />
            <h3 className="text-lg font-bold">Games Available</h3>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            150+ Games
          </p>
        </div>
      </div>

      {/* Requirements Section */}
      <div className="glass-card p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4">System Requirements</h2>
        <ul className="list-disc pl-5 text-muted-foreground">
          <li>Stable internet connection</li>
          <li>Modern web browser</li>
          <li>Minimum 8GB RAM</li>
        </ul>
      </div>
    </div>
  );
};

export default Index;
