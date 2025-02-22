
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Loader2 } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Button } from "@/components/ui/button";

const Connect = () => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [ip, setIp] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const supabase = createClientComponentClient();

  const handleConnect = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsConnecting(true);

    try {
      // Get the user's session
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        toast.error("Please sign in to connect to a gaming server");
        navigate('/auth');
        return;
      }

      // Create or update the RDP connection
      const { error } = await supabase
        .from('rdp_connections')
        .upsert({
          user_id: session.user.id,
          ip_address: ip,
          status: 'connecting'
        });

      if (error) throw error;

      // Simulate RDP connection (in a real app, you'd connect to your RDP service here)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast.success("Successfully connected to gaming server!");
      navigate('/gaming');
    } catch (error) {
      console.error('Connection error:', error);
      toast.error("Failed to connect to gaming server. Please try again.");
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <div className="min-h-screen p-6">
      <button
        onClick={() => navigate('/booking')}
        className="mb-8 flex items-center text-muted-foreground hover:text-foreground transition-colors"
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
              disabled={isConnecting}
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
              disabled={isConnecting}
            />
            <p className="text-sm text-muted-foreground">
              Check your phone for the connection password
            </p>
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={isConnecting}
          >
            {isConnecting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Connecting...
              </>
            ) : (
              'Connect to Gaming Server'
            )}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Connect;
