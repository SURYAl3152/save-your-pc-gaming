
import { Card } from "@/components/ui/card";
import { Cpu, Monitor } from "lucide-react";

interface GameRequirements {
  gpu: string;
  cpu: string;
  ram: string;
  storage: string;
}

export interface Game {
  id: number;
  title: string;
  image: string;
  description: string;
  requirements: GameRequirements;
}

interface GameCardProps {
  game: Game;
  isSelected: boolean;
  onSelect: (id: number) => void;
}

const GameCard = ({ game, isSelected, onSelect }: GameCardProps) => {
  return (
    <Card 
      className={`glass-card p-4 cursor-pointer transition-all duration-300 hover:scale-[1.02] ${
        isSelected ? 'ring-2 ring-primary' : ''
      }`}
      onClick={() => onSelect(game.id)}
    >
      <div className="flex gap-4">
        <img 
          src={game.image} 
          alt={game.title}
          className="w-32 h-32 object-cover rounded-lg"
        />
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-2">{game.title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{game.description}</p>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex items-center gap-1">
              <Cpu className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">{game.requirements.cpu}</span>
            </div>
            <div className="flex items-center gap-1">
              <Monitor className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">{game.requirements.gpu}</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default GameCard;
