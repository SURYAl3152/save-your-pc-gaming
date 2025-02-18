
import { Cpu, Monitor, Cloud, Keyboard } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export const LearnMoreDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button className="bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-medium hover:bg-opacity-80 transition-all">
          Learn More
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-4">Play High-End Games on Low-Spec PCs</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-4">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-primary" />
                High-Performance Cloud Gaming
              </h3>
              <p className="text-muted-foreground">
                Access powerful RTX 4080 GPUs and latest gen processors through our cloud servers, without needing expensive hardware.
              </p>
            </div>
            <div className="glass-card p-4">
              <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                <Monitor className="w-5 h-5 text-primary" />
                Minimal Requirements
              </h3>
              <p className="text-muted-foreground">
                All you need is a basic monitor and keyboard to play the latest AAA games. No expensive gaming PC required!
              </p>
            </div>
          </div>

          <div className="glass-card p-4">
            <h3 className="text-xl font-bold mb-4">What You Need vs What We Provide</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Keyboard className="w-4 h-4 text-primary" />
                  What You Need:
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>Basic monitor</li>
                  <li>Keyboard and mouse</li>
                  <li>Internet connection</li>
                  <li>Any basic PC/laptop</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2 flex items-center gap-2">
                  <Cloud className="w-4 h-4 text-primary" />
                  What We Provide:
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                  <li>RTX 4080 GPU</li>
                  <li>32GB RAM</li>
                  <li>High-speed SSD storage</li>
                  <li>Latest gen processors</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-sm text-muted-foreground">
            Experience the latest games without investing in expensive hardware. Our cloud gaming solution brings high-end gaming to everyone, regardless of their PC specifications.
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
