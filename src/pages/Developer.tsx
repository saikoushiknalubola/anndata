
import React, { useEffect } from 'react';
import { Github, Linkedin, Globe, Code, Award, Sparkles } from 'lucide-react';
import Layout from '../components/Layout';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Developer = () => {
  useEffect(() => {
    toast({
      title: "Developer Page",
      description: "Learn about the creator behind Andata",
      duration: 3000,
    });
  }, []);

  const skills = [
    'Python', 'JavaScript', 'C++', 'Java', 'HTML/CSS',
    'TensorFlow', 'PyTorch', 'Scikit-Learn', 'React.js', 'Node.js',
    'Bootstrap', 'Express.js', 'Firebase', 'MongoDB', 'Docker',
    'Git & GitHub', 'Google Cloud', 'IBM Watson'
  ];

  const keyProjects = [
    {
      title: "Garuda OS",
      description: "A Privacy-First Android-Based Operating System",
      tags: ["AOSP", "Security", "Privacy", "Open-Source"]
    },
    {
      title: "Solar-Powered Autonomous Water Purification Drone",
      description: "Solar-powered drone with AI for clean water access",
      tags: ["AI", "Robotics", "Sustainability", "Water"]
    },
    {
      title: "Adaptive Traffic Signal Control System",
      description: "AI-driven traffic light control for smart cities",
      tags: ["AI", "Computer Vision", "OpenCV", "Smart City"]
    },
    {
      title: "AI Farming Assistant",
      description: "Voice-based chatbot for crop suggestions & pest warnings",
      tags: ["Voice", "AI", "Agriculture", "Regional"]
    }
  ];

  return (
    <Layout title="Developer" showBackButton>
      <div className="space-y-6 pb-6">
        <div className="developer-card">
          <div className="developer-header">
            <div>
              <h1 className="text-xl font-bold text-earth typewriter mb-1">Saikoushik Nalubola</h1>
              <p className="text-sm text-earth/80">
                Developer | AI & Robotics Enthusiast | Open-Source Contributor
              </p>
            </div>
            <div className="floating-animation">
              <Sparkles size={32} className="text-saffron" />
            </div>
          </div>
          
          <p className="text-earth/90 text-sm">
            A Computer Science & Engineering student (B.Tech) specializing in AI, Robotics, 
            and Sustainable Tech, on a mission to build systems that are ethical, scalable, and meaningful.
          </p>
          
          <div className="mt-4">
            <h2 className="font-semibold text-earth mb-2">🛠️ Skills & Expertise</h2>
            <div className="developer-skills">
              {skills.map((skill, index) => (
                <span key={index} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
          
          <div className="mt-6">
            <h2 className="font-semibold text-earth mb-3">🚀 Key Projects</h2>
            <div className="space-y-3">
              {keyProjects.map((project, index) => (
                <div key={index} className="bg-white/50 p-3 rounded-lg shadow-sm border border-earth/10">
                  <h3 className="font-medium text-saffron">{project.title}</h3>
                  <p className="text-xs text-earth/80 mt-1">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.tags.map((tag, idx) => (
                      <span key={idx} className="bg-leaf/10 text-leaf text-xs px-2 py-0.5 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-6 flex flex-wrap gap-2 justify-center">
            <Button className="bg-gradient-to-r from-saffron to-earth text-white">
              <Github size={16} className="mr-2" /> GitHub
            </Button>
            <Button className="bg-gradient-to-r from-earth to-leaf text-white">
              <Linkedin size={16} className="mr-2" /> LinkedIn
            </Button>
            <Button className="bg-gradient-to-r from-leaf to-saffron text-white">
              <Globe size={16} className="mr-2" /> Portfolio
            </Button>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-xs text-earth/60 italic">
              "I turned an old bike into an electric one with reverse gear. Why? Because even innovation sometimes needs to back up before launching forward."
            </p>
          </div>
        </div>
        
        <div className="developer-card">
          <div className="flex items-center gap-2 mb-3">
            <Code size={20} className="text-saffron" />
            <h2 className="font-semibold text-earth">Currently Exploring</h2>
          </div>
          <ul className="space-y-2 text-sm text-earth/80 pl-6 list-disc">
            <li>Generative AI: Using LLMs for multilingual education & voice assistants</li>
            <li>Drone Swarming Algorithms: For coordinated disaster management</li>
            <li>Secure Mobile OS Dev: Making Garuda OS scalable for mass use</li>
            <li>FOSS: Actively contributing to open-source projects in AI & privacy</li>
          </ul>
        </div>
        
        <div className="developer-card">
          <div className="flex items-center gap-2 mb-3">
            <Award size={20} className="text-leaf" />
            <h2 className="font-semibold text-earth">Open to Collaborate On</h2>
          </div>
          <ul className="space-y-2 text-sm text-earth/80 pl-6 list-disc">
            <li>AI/ML research or open-source tools</li>
            <li>Robotics automation and embedded systems</li>
            <li>Green tech, smart mobility, and IoT projects</li>
            <li>Privacy-first software & ethical tech tools</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Developer;
