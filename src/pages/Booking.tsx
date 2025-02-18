import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Clock, Gamepad, Monitor, Cpu } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";

const games = [
  {
    id: 1,
    title: "Grand Theft Auto V",
    image: "/lovable-uploads/d9ff41d0-6dc9-42f0-8663-271613f819f0.png",
    description: "Experience the thrilling open-world action game with stunning graphics and immersive gameplay.",
    requirements: {
      gpu: "NVIDIA GeForce GTX 970 4GB",
      cpu: "Intel Core i5 3470 @ 3.2GHz",
      ram: "8GB",
      storage: "72GB"
    }
  },
  {
    id: 2,
    title: "Detroit: Become Human",
    image: "/lovable-uploads/c65192d1-9870-4e4d-ade4-a19cf3690839.png",
    description: "Immerse yourself in a neo-noir thriller where your choices determine the fate of human-android relations.",
    requirements: {
      gpu: "NVIDIA GeForce GTX 1060 6GB",
      cpu: "Intel Core i7-3770 @ 3.4 GHz",
      ram: "16GB",
      storage: "64GB"
    }
  },
  {
    id: 3,
    title: "Elden Ring",
    image: "https://upload.wikimedia.org/wikipedia/en/b/b9/Elden_Ring_Box_art.jpg",
    description: "Explore a vast open world filled with epic battles and deep lore in this challenging action RPG.",
    requirements: {
      gpu: "NVIDIA GeForce GTX 1060 3GB",
      cpu: "Intel Core i5-8400",
      ram: "12GB",
      storage: "60GB"
    }
  },
  {
    id: 4,
    title: "Counter-Strike 2",
    image: "/lovable-uploads/00da22e8-4316-4167-9524-a3700b9a0e09.png",
    description: "Experience the next evolution of tactical shooter with improved graphics and gameplay mechanics.",
    requirements: {
      gpu: "NVIDIA GeForce GTX 1080",
      cpu: "Intel Core i5-9600K",
      ram: "16GB",
      storage: "85GB"
    }
  }
];

const Booking = () => {
  const [hours, setHours] = useState([1]);
  const [date, setDate] = useState<Date>();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showPayment, setShowPayment] = useState(false);
  const [selectedGame, setSelectedGame] = useState<number | null>(null);
  const navigate = useNavigate();

  const maxHours = 8;
  const pricePerHour = 100;
  const totalPrice = hours[0] * pricePerHour;

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM",
    "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM"
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedGame) {
      alert("Please select a game first");
      return;
    }
    setShowPayment(true);
  };

  const handlePayment = () => {
    navigate('/connect');
  };

  return (
    <div className="min-h-screen p-6">
      <button
        onClick={() => navigate('/')}
        className="mb-8 flex items-center text-neutral hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Games
      </button>

      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Select Your Game</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {games.map((game) => (
            <Card 
              key={game.id}
              className={`glass-card p-4 cursor-pointer transition-all duration-300 hover:scale-[1.02] ${
                selectedGame === game.id ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => setSelectedGame(game.id)}
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
          ))}
        </div>

        {selectedGame && (
          <div className="max-w-md mx-auto glass-card">
            <h2 className="text-xl font-bold mb-6">Book Gaming Session</h2>
            <form onSubmit={handleBooking} className="space-y-6">
              <div>
                <Label htmlFor="hours">Hours</Label>
                <Slider
                  id="hours"
                  defaultValue={hours}
                  max={maxHours}
                  step={1}
                  onValueChange={(value) => setHours(value)}
                />
                <p className="text-sm text-muted-foreground">
                  {hours[0]} hour(s) selected
                </p>
              </div>

              <div>
                <Label>Date</Label>
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border"
                />
                {date ? (
                  <p className="text-sm text-muted-foreground">
                    {format(date, "PP")}
                  </p>
                ) : (
                  <p className="text-sm text-muted-foreground">
                    Please select a date.
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor="time">Select a Time Slot</Label>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((slot) => (
                    <button
                      key={slot}
                      type="button"
                      className={`rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=on]:bg-accent data-[state=on]:text-accent-foreground ${selectedTimeSlot === slot ? 'bg-secondary text-secondary-foreground' : 'bg-muted text-muted-foreground'
                        }`}
                      onClick={() => setSelectedTimeSlot(slot)}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  type="tel"
                  id="phone"
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between mb-4">
                  <span>Price per hour:</span>
                  <span>₹{pricePerHour}</span>
                </div>
                <div className="flex justify-between font-bold">
                  <span>Total Price:</span>
                  <span>₹{totalPrice}</span>
                </div>
              </div>

              {!showPayment ? (
                <button
                  type="submit"
                  className="w-full bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-all"
                >
                  Proceed to Payment
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handlePayment}
                  className="w-full bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-all"
                >
                  Pay ₹{totalPrice}
                </button>
              )}

              {selectedTimeSlot && date && (
                <p className="text-sm text-muted-foreground text-center">
                  Selected slot: {format(date, 'PP')} at {selectedTimeSlot}
                </p>
              )}
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default Booking;
