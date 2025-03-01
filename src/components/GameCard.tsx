
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";

interface GameCardProps {
  title: string;
  image: string;
  type: string;
  icon: React.ElementType;
}

export const GameCard = ({ title, image, type, icon: Icon }: GameCardProps) => {
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
