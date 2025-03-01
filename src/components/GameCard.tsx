
import { ArrowRight, Star, Users, Clock, Gamepad, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface GameCardProps {
  title: string;
  image: string;
  type: string;
  icon: React.ElementType;
}

export const GameCard = ({ title, image, type, icon: Icon }: GameCardProps) => {
  const navigate = useNavigate();
  
  // Sample data for demonstration - in a real app this would come from props
  const rating = 4.5;
  const players = "2M+";
  const releaseYear = "2022";
  const difficulty = "Medium";
  const playTime = "40+ hrs";
  const tags = ["Open World", "Multiplayer", "Action"];
  
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
            {rating >= 4.5 && (
              <Badge variant="secondary" className="bg-amber-600/20 text-amber-500 border-amber-500/50">
                Top Rated
              </Badge>
            )}
          </div>
          <p className="text-sm text-muted-foreground mb-3">{type}</p>
          
          {/* Additional game details */}
          <div className="grid grid-cols-3 gap-2 mb-3">
            <div className="flex items-center justify-center sm:justify-start">
              <Star className="w-4 h-4 text-yellow-500 mr-1" />
              <span className="text-sm">{rating}/5</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start">
              <Users className="w-4 h-4 text-primary mr-1" />
              <span className="text-sm">{players}</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start">
              <Clock className="w-4 h-4 text-muted-foreground mr-1" />
              <span className="text-sm">{releaseYear}</span>
            </div>
          </div>
          
          {/* Extended game details */}
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div className="flex items-center justify-center sm:justify-start">
              <Trophy className="w-4 h-4 text-orange-400 mr-1" />
              <span className="text-sm">Difficulty: {difficulty}</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start">
              <Gamepad className="w-4 h-4 text-green-500 mr-1" />
              <span className="text-sm">{playTime}</span>
            </div>
          </div>
          
          {/* Game tags */}
          <div className="flex flex-wrap justify-center sm:justify-start gap-1 mb-3">
            {tags.map((tag, i) => (
              <Badge key={i} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          
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
