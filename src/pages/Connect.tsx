
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const Connect = () => {
  const [ip, setIp] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleConnect = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would validate the connection details
    // For now, we'll just navigate to a gaming page
    navigate('/gaming');
  };

  return (
    <div className="min-h-screen p-6">
      <button
        onClick={() => navigate('/booking')}
        className="mb-8 flex items-center text-neutral hover:text-white transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Booking
      </button>

      <div className="max-w-md mx-auto glass-card">
        <h1 className="text-2xl font-bold mb-6">Connect to Gaming Server</h1>

        <form onSubmit={handleConnect} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="ip">Public IP Address</Label>
            <Input
              id="ip"
              type="text"
              placeholder="Enter the server IP"
              value={ip}
              onChange={(e) => setIp(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Connection Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter the password sent to your phone"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <p className="text-sm text-muted-foreground">
              Check your phone for the connection password
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-opacity-90 transition-all"
          >
            Connect to Gaming Server
          </button>
        </form>
      </div>
    </div>
  );
};

export default Connect;
