
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { games } from "@/data/games";
import GameSelection from "@/components/booking/GameSelection";
import BookingForm from "@/components/booking/BookingForm";

const Booking = () => {
  const [hours, setHours] = useState([1]);
  const [date, setDate] = useState<Date>();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showPayment, setShowPayment] = useState(false);
  const [selectedGame, setSelectedGame] = useState<number | null>(null);
  const navigate = useNavigate();

  const pricePerHour = 100;
  const totalPrice = hours[0] * pricePerHour;

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

      <GameSelection 
        games={games}
        selectedGame={selectedGame}
        setSelectedGame={setSelectedGame}
      />

      {selectedGame && (
        <BookingForm
          onSubmit={handleBooking}
          hours={hours}
          setHours={setHours}
          date={date}
          setDate={setDate}
          selectedTimeSlot={selectedTimeSlot}
          setSelectedTimeSlot={setSelectedTimeSlot}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          showPayment={showPayment}
          handlePayment={handlePayment}
          totalPrice={totalPrice}
        />
      )}
    </div>
  );
};

export default Booking;
