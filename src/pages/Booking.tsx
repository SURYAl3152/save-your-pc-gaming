
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Clock } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";

const Booking = () => {
  const [hours, setHours] = useState([1]);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showPayment, setShowPayment] = useState(false);
  const [date, setDate] = useState<Date>();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string>("");
  const navigate = useNavigate();

  const pricePerHour = 150;
  const maxHours = 8;
  const totalPrice = hours[0] * pricePerHour;

  // Mock available time slots - in a real app, these would come from a backend
  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM",
    "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM"
  ];

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber) {
      alert("Please enter your phone number");
      return;
    }
    if (!date || !selectedTimeSlot) {
      alert("Please select a date and time slot");
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
            <Label>Select Date</Label>
            <div className="border rounded-lg p-3">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                disabled={(date) => date < new Date() || date > new Date(new Date().setMonth(new Date().getMonth() + 1))}
              />
            </div>
          </div>

          {date && (
            <div className="space-y-3">
              <Label className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Available Time Slots for {format(date, 'PP')}
              </Label>
              <div className="grid grid-cols-2 gap-3">
                {timeSlots.map((slot) => {
                  const isSelected = selectedTimeSlot === slot;
                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTimeSlot(slot)}
                      className={`
                        relative p-3 rounded-lg border transition-all duration-200
                        ${isSelected 
                          ? 'bg-primary border-primary text-white scale-105 shadow-lg' 
                          : 'hover:bg-[#E5DEFF] hover:border-[#9b87f5] hover:text-[#7E69AB]'
                        }
                        group overflow-hidden
                      `}
                    >
                      <div className="relative z-10 flex items-center justify-center">
                        <Clock className={`w-4 h-4 mr-2 ${isSelected ? 'text-white' : 'text-[#9b87f5]'}`} />
                        <span className="font-medium">{slot}</span>
                      </div>
                      {isSelected && (
                        <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-[#9b87f5] opacity-50 animate-pulse" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

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

          {selectedTimeSlot && (
            <p className="text-sm text-muted-foreground text-center">
              Selected slot: {format(date!, 'PP')} at {selectedTimeSlot}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Booking;
