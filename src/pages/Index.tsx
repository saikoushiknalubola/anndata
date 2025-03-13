
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wheat, Soil, Bell, Users, Recycle } from 'lucide-react';
import Layout from '../components/Layout';
import Button from '../components/Button';
import Card from '../components/Card';
import { toast } from '@/components/ui/use-toast';

const HomePage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    toast({
      title: "Welcome to Andata",
      description: "AI-powered farming assistance at your fingertips",
      duration: 3000,
    });
  }, []);

  const navButtons = [
    { 
      title: "Crop Advisor", 
      icon: <Wheat size={18} />, 
      path: "/crop-advisor",
      color: "bg-gradient-to-br from-saffron to-saffron/80" 
    },
    { 
      title: "Soil Scanner", 
      icon: <Soil size={18} />, 
      path: "/soil-scanner",
      color: "bg-gradient-to-br from-earth to-earth/80" 
    },
    { 
      title: "Alerts", 
      icon: <Bell size={18} />, 
      path: "/alerts",
      color: "bg-gradient-to-br from-saffron to-earth/90" 
    },
    { 
      title: "Farmer Tips", 
      icon: <Users size={18} />, 
      path: "/farmer-tips",
      color: "bg-gradient-to-br from-leaf to-leaf/80" 
    },
    { 
      title: "Waste Ideas", 
      icon: <Recycle size={18} />, 
      path: "/waste-ideas",
      color: "bg-gradient-to-br from-earth to-earth/80" 
    },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <Card className="text-center py-8 bg-gradient-to-br from-cream to-white">
          <h1 className="text-2xl font-bold text-leaf mb-4 animate-pulse-gentle">
            Empower Your Farm with AI
          </h1>
          <p className="text-earth text-sm max-w-xs mx-auto">
            Modern solutions for traditional farming.
            Get personalized recommendations based on your location and needs.
          </p>
        </Card>

        <div className="grid grid-cols-1 gap-4 animate-slide-up">
          {navButtons.map((button, index) => (
            <Button 
              key={button.title}
              variant={index % 2 === 0 ? "primary" : index % 3 === 0 ? "accent" : "secondary"}
              icon={button.icon}
              fullWidth
              className={`py-4 justify-start px-6 ${index % 2 === 0 ? "animate-delay-100" : ""}`}
              onClick={() => navigate(button.path)}
            >
              <span className="font-semibold">{button.title}</span>
            </Button>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-xs text-earth/70">
            Version 1.0 | Developed for small-scale Indian farmers
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
