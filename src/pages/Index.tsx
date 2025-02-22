
import { Car, Bot, Crown, Crosshair, Sun, Moon } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GameCard } from "@/components/GameCard";
import { LearnMoreDialog } from "@/components/LearnMoreDialog";
import { StatsGrid } from "@/components/StatsGrid";
import { SystemRequirements } from "@/components/SystemRequirements";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const Index = () => {
  const [isConnected] = useState(true);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

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
      {/* Theme Toggle Button */}
      <div className="fixed top-4 right-4 z-50">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full bg-background text-foreground border-2 hover:bg-background/90 transform hover:scale-110 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                {theme === 'dark' ? (
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all animate-in" />
                ) : (
                  <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all animate-in" />
                )}
                <span className="sr-only">Toggle theme</span>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Switch to {theme === 'dark' ? 'light' : 'dark'} mode</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

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
          <LearnMoreDialog />
        </div>
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
        {games.map((game, index) => (
          <GameCard key={index} {...game} />
        ))}
      </div>

      <StatsGrid isConnected={isConnected} />
      <SystemRequirements />
    </div>
  );
};

export default Index;
