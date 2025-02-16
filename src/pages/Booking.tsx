
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";

const Booking = () => {
  const [hours, setHours] = useState([1]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showPayment, setShowPayment] = useState(false);
  const navigate = useNavigate();

  const pricePerHour = 150;
  const maxHours = 8;
  const totalPrice = hours[0] * pricePerHour;

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber) {
      alert("Please enter your phone number");
      return;
    }
    setShowPayment(true);
  };

  const handlePayment = () => {
    // Here you would typically handle the payment
    // For now, we'll just navigate to the connection page
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

      <div className="max-w-md mx-auto glass-card">
        <h1 className="text-2xl font-bold mb-6">Book Gaming Session</h1>

        <form onSubmit={handleBooking} className="space-y-6">
          <div className="space-y-4">
            <Label>Gaming Hours: {hours[0]}</Label>
            <Slider
              value={hours}
              onValueChange={setHours}
              max={maxHours}
              min={1}
              step={1}
            />
            <p className="text-sm text-muted-foreground">
              Max {maxHours} hours per session
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
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
        </form>
      </div>
    </div>
  );
};

export default Booking;
