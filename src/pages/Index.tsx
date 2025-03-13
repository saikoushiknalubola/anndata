
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wheat, Leaf, Bell, Users, Recycle, FileText, Info, HelpCircle } from 'lucide-react';
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
      icon: <Leaf size={18} />, 
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

  const infoSections = [
    {
      title: "About Andata",
      icon: <Info size={20} className="text-saffron" />,
      content: "Andata is an AI-powered farming assistant designed for small-scale Indian farmers. We combine traditional farming knowledge with modern technology to help farmers increase yield and sustainability."
    },
    {
      title: "Why Choose Us",
      icon: <HelpCircle size={20} className="text-leaf" />,
      content: "Our platform provides personalized recommendations based on your location, soil conditions, and local weather patterns. We help you make informed decisions without the need for expensive equipment or expertise."
    },
    {
      title: "How It Works",
      icon: <FileText size={20} className="text-earth" />,
      content: "Simply select your location, upload soil photos, and receive instant AI-generated recommendations. Get alerts for weather changes, pest control, and connect with other farmers to share knowledge."
    }
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <Card className="text-center py-6 px-4 bg-gradient-to-br from-cream to-white">
          <h1 className="text-2xl font-bold text-leaf mb-3 animate-pulse-gentle">
            Empower Your Farm with AI
          </h1>
          <p className="text-earth text-sm max-w-xs mx-auto">
            Modern solutions for traditional farming.
            Get personalized recommendations based on your location and needs.
          </p>
        </Card>

        <div className="grid grid-cols-1 gap-3 animate-slide-up">
          {navButtons.map((button, index) => (
            <Button 
              key={button.title}
              variant={index % 2 === 0 ? "primary" : index % 3 === 0 ? "accent" : "secondary"}
              icon={button.icon}
              fullWidth
              className={`py-3 justify-start px-5 ${index % 2 === 0 ? "animate-delay-100" : ""}`}
              onClick={() => navigate(button.path)}
            >
              <span className="font-semibold">{button.title}</span>
            </Button>
          ))}
        </div>

        <div className="mt-8 space-y-4">
          <h2 className="text-xl font-semibold text-earth text-center">Farming Made Smarter</h2>
          
          {infoSections.map((section, index) => (
            <Card key={index} className="bg-white/80">
              <div className="flex items-start">
                <div className="mr-3 mt-1">{section.icon}</div>
                <div>
                  <h3 className="font-semibold text-earth">{section.title}</h3>
                  <p className="text-sm text-earth/80 mt-1">{section.content}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-gradient-to-r from-leaf/10 to-cream/50 rounded-lg p-4 mt-6">
          <h3 className="font-semibold text-earth text-center mb-2">Our Impact</h3>
          <div className="grid grid-cols-3 gap-2 text-center">
            <div>
              <p className="text-saffron font-bold text-xl">1000+</p>
              <p className="text-xs text-earth/70">Farmers</p>
            </div>
            <div>
              <p className="text-leaf font-bold text-xl">24+</p>
              <p className="text-xs text-earth/70">Districts</p>
            </div>
            <div>
              <p className="text-earth font-bold text-xl">30%</p>
              <p className="text-xs text-earth/70">Yield Increase</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-6 mb-2">
          <p className="text-xs text-earth/70">
            Version 1.0 | Developed for small-scale Indian farmers
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
