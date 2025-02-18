
import { Brain } from "lucide-react";

export const SystemRequirements = () => {
  return (
    <div className="glass-card p-6 hover:translate-y-[-2px] transition-all">
      <h2 className="text-2xl font-bold mb-4 flex items-center">
        <Brain className="w-6 h-6 mr-2 text-primary" />
        System Requirements
      </h2>
      <ul className="list-disc pl-5 text-muted-foreground space-y-2">
        <li>Stable internet connection (15+ Mbps recommended)</li>
        <li>Modern web browser (Chrome, Firefox, or Edge)</li>
        <li>Minimum 8GB RAM for optimal performance</li>
        <li>Any modern operating system (Windows 10+, macOS, Linux)</li>
      </ul>
    </div>
  );
};
