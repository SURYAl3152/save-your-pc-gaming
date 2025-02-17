
import { Monitor, Cloud, Gamepad, ArrowRight, Sword, Car, Bot, Crown, Crosshair, Brain } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";

const GameCard = ({ title, image, type, icon: Icon }: { title: string; image: string; type: string; icon: any }) => {
  const navigate = useNavigate();
  
  return (
    <Card className="glass-card card-hover group cursor-pointer transition-all duration-300">
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 p-4">
        <div className="relative w-32 h-32 sm:w-24 sm:h-24 rounded-lg overflow-hidden">
          <img 
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-2 right-2 bg-black/50 p-2 rounded-full">
            <Icon className="w-4 h-4 text-white" />
          </div>
        </div>
        <div className="flex-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start space-x-2 mb-2">
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
          <p className="text-sm text-muted-foreground mb-2">{type}</p>
          <button 
            onClick={() => navigate('/booking')}
            className="w-full sm:w-auto bg-primary text-white px-4 py-2 rounded-lg font-medium flex items-center justify-center hover:bg-opacity-90 transition-all group-hover:translate-x-1"
          >
            Launch
            <ArrowRight className="ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    </Card>
  );
};

const Index = () => {
  const [isConnected] = useState(true);
  const navigate = useNavigate();

  const games = [
    {
      title: "Grand Theft Auto V",
      image: "/lovable-uploads/d9ff41d0-6dc9-42f0-8663-271613f819f0.png",
      type: "Action & Adventure",
      icon: Car
    },
    {
      title: "Detroit: Become Human",
      image: "/lovable-uploads/c65192d1-9870-4e4d-ade4-a19cf3690839.png",
      type: "Story & Adventure",
      icon: Bot
    },
    {
      title: "Elden Ring",
      image: "https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_art.jpg",
      type: "Action RPG",
      icon: Crown
    },
    {
      title: "Counter-Strike 2",
      image: "/lovable-uploads/00da22e8-4316-4167-9524-a3700b9a0e09.png",
      type: "FPS",
      icon: Crosshair
    }
  ];

  return (
    <div className="min-h-screen p-4 md:p-6 max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="mb-12 text-center md:text-left">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 animate-fade-in">
          Welcome to Save-Your-PC-Gaming
        </h1>
        <p className="text-lg text-muted-foreground mb-1">
          SYP Gaming
        </p>
        <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto md:mx-0">
          Start playing your favorite games in the cloud with high-performance servers.
        </p>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <button 
            onClick={() => navigate('/booking')}
            className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-opacity-90 transition-all hover:translate-y-[-2px] hover:shadow-lg"
          >
            Get Started
          </button>
          <button className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium hover:bg-opacity-80 transition-all">
            Learn More
          </button>
        </div>
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        {games.map((game, index) => (
          <GameCard key={index} {...game} />
        ))}
      </div>

      {/* Stats Grid */}
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

      {/* Requirements Section */}
      <div className="glass-card p-6 hover:translate-y-[-2px] transition-all">
        <h2 className="text-2xl font-bold mb-4 flex items-center">
          <Brain className="w-6 h-6 mr-2 text-primary" />
          System Requirements
        </h2>
        <ul className="list-disc pl-5 text-muted-foreground space-y-2">
          <li>Stable internet connection (15+ Mbps recommended)</li>
          <li>Modern web browser (Chrome, Firefox, or Edge)</li>
          <li>Minimum 8GB RAM for optimal performance</li>
          <li>Any modern operating system (Windows 10+, macOS, Linux)</li>
        </ul>
      </div>
    </div>
  );
};

export default Index;
