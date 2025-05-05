
import React from 'react';
import { Info, ExternalLink } from 'lucide-react';
import Card from './Card';

const Disclaimer = () => {
  return (
    <Card variant="bordered" className="bg-cream/70 border-earth/20 mt-8">
      <div className="space-y-3">
        <div className="flex items-start">
          <div className="bg-earth/10 p-1.5 rounded-full mr-2 flex-shrink-0 mt-0.5">
            <Info size={16} className="text-earth" />
          </div>
          <h3 className="font-medium text-soil text-sm">Disclaimer & Copyright Notice</h3>
        </div>
        
        <div className="text-xs text-soil/80 space-y-2">
          <p>
            Andata is a demonstration project and is not affiliated with any government agency or organization. 
            All government logos and branding elements shown are used for demonstration purposes only.
          </p>
          <p>
            All content, features, and data in this application are fictional and meant for illustrative purposes.
            Any resemblance to actual products, services, or real-world data is coincidental.
          </p>
          <p>
            The application design, code, and content are provided "as is" without warranty of any kind,
            either express or implied. The developers assume no responsibility for errors or omissions in the
            content provided.
          </p>
        </div>
        
        <div className="border-t border-terracotta/10 pt-2 flex justify-between items-center">
          <p className="text-xs text-soil/70">© 2025 Andata Project</p>
          <a href="#" className="text-xs flex items-center text-leaf hover:text-terracotta transition-colors">
            <span className="mr-1">Terms of Use</span>
            <ExternalLink size={10} />
          </a>
        </div>
      </div>
    </Card>
  );
};

export default Disclaimer;
