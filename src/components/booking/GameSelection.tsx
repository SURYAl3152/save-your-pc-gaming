
import GameCard, { Game } from "./GameCard";

interface GameSelectionProps {
  games: Game[];
  selectedGame: number | null;
  setSelectedGame: (id: number) => void;
}

const GameSelection = ({ games, selectedGame, setSelectedGame }: GameSelectionProps) => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Select Your Game</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {games.map((game) => (
          <GameCard 
            key={game.id}
            game={game}
            isSelected={selectedGame === game.id}
            onSelect={setSelectedGame}
          />
        ))}
      </div>
    </div>
  );
};

export default GameSelection;
