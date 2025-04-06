
import React from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import { Separator } from "@/components/ui/separator";
import { DollarSign, FileText, Clock, Info, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { toast } from '@/components/ui/use-toast';

const FarmSubsidies = () => {
  const { t } = useLanguage();

  const subsidies = [
    {
      id: 1,
      title: "Pradhan Mantri Fasal Bima Yojana",
      description: "Crop insurance scheme to protect farmers against crop failure due to natural calamities.",
      eligibility: "All farmers including sharecroppers and tenant farmers growing notified crops",
      deadline: "Before sowing season",
      icon: <FileText size={20} />
    },
    {
      id: 2,
      title: "PM Kisan Samman Nidhi",
      description: "Income support scheme providing farmers with up to ₹6,000 per year.",
      eligibility: "Small and marginal farmers with less than 2 hectares of landholding",
      deadline: "Rolling applications accepted",
      icon: <DollarSign size={20} />
    },
    {
      id: 3,
      title: "Soil Health Card Scheme",
      description: "Provides information on soil nutrient status and fertilizer recommendations.",
      eligibility: "All farmers with agricultural land",
      deadline: "Year-round applications",
      icon: <FileText size={20} />
    },
  ];

  const handleApplyClick = (title: string) => {
    toast({
      title: "Application Started",
      description: `You're applying for ${title}`,
      duration: 3000,
    });
  };

  return (
    <Layout title="Farm Subsidies" showBackButton>
      <div className="space-y-6 px-4">
        <Card variant="farm">
          <h2 className="text-lg font-semibold text-earth mb-3">Available Subsidies</h2>
          <p className="text-sm text-earth/80 mb-4">
            Check eligibility and apply for government assistance programs that can help with farming costs.
          </p>

          <div className="space-y-4 mt-4">
            {subsidies.map((subsidy) => (
              <Card key={subsidy.id} variant="bordered" className="p-4">
                <div className="flex items-start">
                  <div className="bg-leaf/10 p-2 rounded-full mr-3">
                    {subsidy.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-earth">{subsidy.title}</h3>
                    <p className="text-sm text-earth/70 mt-1">{subsidy.description}</p>
                    
                    <Separator className="my-3" />
                    
                    <div className="grid grid-cols-1 gap-2 text-sm">
                      <div className="flex items-center">
                        <CheckCircle size={16} className="text-leaf mr-2" />
                        <span>Eligibility: {subsidy.eligibility}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="text-leaf mr-2" />
                        <span>Deadline: {subsidy.deadline}</span>
                      </div>
                    </div>
                    
                    <button 
                      className="mt-3 w-full py-2 bg-leaf text-white rounded-md hover:bg-leaf/90 transition-colors"
                      onClick={() => handleApplyClick(subsidy.title)}
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Card>
        
        <Card className="bg-gradient-to-r from-earth/10 to-white p-4">
          <div className="flex items-start">
            <div className="p-2 bg-earth/10 rounded-full mr-3">
              <Info size={20} className="text-earth" />
            </div>
            <div>
              <h3 className="font-medium text-earth">Need Assistance?</h3>
              <p className="text-sm text-earth/80 mt-1">
                Contact your local agriculture office for help with subsidy applications and eligibility verification.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default FarmSubsidies;
