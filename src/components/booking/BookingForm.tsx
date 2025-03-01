
import { useState } from "react";
import { Clock } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";

interface BookingFormProps {
  onSubmit: (e: React.FormEvent) => void;
  hours: number[];
  setHours: (hours: number[]) => void;
  date: Date | undefined;
  setDate: (date: Date | undefined) => void;
  selectedTimeSlot: string;
  setSelectedTimeSlot: (slot: string) => void;
  phoneNumber: string;
  setPhoneNumber: (number: string) => void;
  showPayment: boolean;
  handlePayment: () => void;
  totalPrice: number;
}

const BookingForm = ({
  onSubmit,
  hours,
  setHours,
  date,
  setDate,
  selectedTimeSlot,
  setSelectedTimeSlot,
  phoneNumber,
  setPhoneNumber,
  showPayment,
  handlePayment,
  totalPrice
}: BookingFormProps) => {
  const maxHours = 8;
  const pricePerHour = 100;

  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM",
    "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM",
    "05:00 PM", "06:00 PM", "07:00 PM", "08:00 PM"
  ];

  return (
    <div className="max-w-md mx-auto glass-card">
      <h2 className="text-xl font-bold mb-6">Book Gaming Session</h2>
      <form onSubmit={onSubmit} className="space-y-6">
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
          <Button
            type="submit"
            className="w-full"
          >
            Proceed to Payment
          </Button>
        ) : (
          <Button
            type="button"
            onClick={handlePayment}
            variant="default"
            className="w-full bg-green-600 hover:bg-green-700"
          >
            Pay ₹{totalPrice}
          </Button>
        )}

        {selectedTimeSlot && date && (
          <p className="text-sm text-muted-foreground text-center">
            Selected slot: {format(date, 'PP')} at {selectedTimeSlot}
          </p>
        )}
      </form>
    </div>
  );
};

export default BookingForm;
