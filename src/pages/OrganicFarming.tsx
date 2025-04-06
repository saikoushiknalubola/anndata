
import React from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import { Check, Download, ExternalLink, Leaf, Shield, Sun, Droplets, Bug } from 'lucide-react';
import { Button } from '@/components/ui/button';

const OrganicFarming = () => {
  const benefits = [
    { 
      icon: <Shield className="h-5 w-5 text-leaf" />,
      title: 'Health Benefits',
      description: 'Organic food is free from harmful pesticides and chemicals, making it healthier for consumption.'
    },
    { 
      icon: <Leaf className="h-5 w-5 text-leaf" />,
      title: 'Environmental Protection',
      description: 'Reduces pollution, conserves water, and enhances soil fertility.'
    },
    { 
      icon: <Sun className="h-5 w-5 text-saffron" />,
      title: 'Premium Market Prices',
      description: 'Organic produce typically commands 20-30% higher market prices.'
    },
    { 
      icon: <Droplets className="h-5 w-5 text-blue-500" />,
      title: 'Water Conservation',
      description: 'Organic farms typically use 30% less water than conventional farms.'
    },
    { 
      icon: <Bug className="h-5 w-5 text-earth" />,
      title: 'Biodiversity',
      description: 'Promotes ecosystem balance with 50% more plant, insect and bird life.'
    }
  ];

  const techniques = [
    {
      title: 'Crop Rotation',
      description: 'Grow different crops in sequence to manage soil fertility and control pests.',
      steps: ['Plan 3-4 year rotation cycle', 'Alternate legumes with grains', 'Include green manure crops']
    },
    {
      title: 'Composting',
      description: 'Convert organic waste into nutrient-rich soil amendment for your fields.',
      steps: ['Collect farm waste and crop residue', 'Layer with cow dung', 'Maintain moisture and turn regularly']
    },
    {
      title: 'Natural Pest Control',
      description: 'Use biological methods to manage pests without chemical pesticides.',
      steps: ['Introduce beneficial insects', 'Plant companion crops', 'Use neem-based solutions']
    }
  ];

  return (
    <Layout title="Organic Farming">
      <div className="space-y-5">
        <Card variant="tricolor" className="mb-6">
          <p className="text-earth text-sm">
            Learn about sustainable farming practices that protect the environment, 
            produce healthier food, and potentially increase your income through premium pricing.
          </p>
        </Card>

        <section>
          <h2 className="text-xl font-semibold text-earth mb-3">Benefits of Organic Farming</h2>
          <div className="grid grid-cols-1 gap-3">
            {benefits.map((benefit, index) => (
              <Card key={index} variant={index % 2 === 0 ? "farm" : "default"} className="flex items-start">
                <div className="mr-3 mt-1">{benefit.icon}</div>
                <div>
                  <h3 className="font-semibold text-earth">{benefit.title}</h3>
                  <p className="text-sm text-earth/80 mt-1">{benefit.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="pt-2">
          <h2 className="text-xl font-semibold text-earth mb-3">Organic Techniques</h2>
          <div className="space-y-4">
            {techniques.map((technique, index) => (
              <Card key={index} variant="gradient" className="space-y-3">
                <h3 className="font-semibold text-earth text-lg">{technique.title}</h3>
                <p className="text-sm text-earth/80">{technique.description}</p>
                
                <div className="bg-white/60 rounded-md p-3 mt-2">
                  <h4 className="font-medium text-earth mb-2 text-sm">Key Steps:</h4>
                  <ul className="space-y-1">
                    {technique.steps.map((step, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <Check className="h-4 w-4 text-leaf mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-earth/90">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="pt-2 pb-6">
          <Card variant="bordered" className="text-center space-y-3">
            <h3 className="font-semibold text-earth">Get Organic Certification</h3>
            <p className="text-sm text-earth/80">
              Download our guide on how to get your farm certified organic and access premium markets.
            </p>
            <div className="flex justify-center space-x-3 pt-2">
              <Button className="bg-leaf text-white hover:bg-leaf/90">
                <Download className="h-4 w-4 mr-2" /> 
                Certification Guide
              </Button>
              <Button variant="outline" className="border-leaf text-leaf hover:bg-leaf/10">
                <ExternalLink className="h-4 w-4 mr-2" /> 
                Online Application
              </Button>
            </div>
          </Card>
        </section>
      </div>
    </Layout>
  );
};

export default OrganicFarming;
