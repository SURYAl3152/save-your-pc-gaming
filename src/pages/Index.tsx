
import { Car, Bot, Crown, Crosshair, Sun, Moon, LogIn, LogOut, User, Gamepad2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GameCard } from "@/components/GameCard";
import { LearnMoreDialog } from "@/components/LearnMoreDialog";
import { StatsGrid } from "@/components/StatsGrid";
import { SystemRequirements } from "@/components/SystemRequirements";
import { useTheme } from "@/hooks/use-theme";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Index = () => {
  const [isConnected] = useState(true);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/auth');
  };

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
    <div className="min-h-screen p-4 md:p-6 max-w-7xl mx-auto relative gaming-background">
      {/* Gaming animated background overlay */}
      <div className="gaming-overlay"></div>
      
      {/* Header with Theme and Auth Controls */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
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

        {user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transform hover:scale-110 transition-all duration-200 shadow-md hover:shadow-lg border-2 border-purple-500"
              >
                <User className="h-[1.2rem] w-[1.2rem]" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-gray-900 border border-purple-500">
              <DropdownMenuItem 
                className="cursor-pointer text-white hover:bg-purple-800"
                onClick={handleLogout}
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button
            variant="outline"
            size="icon"
            onClick={() => navigate('/auth')}
            className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transform hover:scale-110 transition-all duration-200 shadow-md hover:shadow-lg border-2 border-purple-500"
          >
            <LogIn className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        )}
      </div>

      {/* Hero Section */}
      <div className="mb-12 text-center md:text-left relative z-10">
        <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
          <Gamepad2 className="h-8 w-8 text-purple-500 animate-pulse" />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Save-Your-PC-Gaming
          </h1>
        </div>
        <p className="text-lg text-purple-300 mb-1 font-semibold">
          SYP Gaming - Cloud Gaming Revolution
        </p>
        <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto md:mx-0">
          Start playing AAA titles on your low-spec PC with our high-performance cloud servers.
        </p>
        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
          <button 
            onClick={() => navigate('/booking')}
            className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition-all hover:translate-y-[-2px] hover:shadow-lg border border-purple-400 shadow-[0_0_15px_rgba(168,85,247,0.5)]"
          >
            Start Gaming Now
          </button>
          <LearnMoreDialog />
        </div>
      </div>

      {/* Games Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12 relative z-10">
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
