
import { useState } from 'react';
import { BookOpen, Video, FileText, ArrowRight, Search } from 'lucide-react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Button from '../components/Button';
import { useLanguage } from '../contexts/LanguageContext';

interface LearningResource {
  id: number;
  title: string;
  description: string;
  type: 'video' | 'article' | 'guide';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
}

const LearnFarming = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { t } = useLanguage();
  
  const resources: LearningResource[] = [
    {
      id: 1,
      title: "Introduction to Organic Farming",
      description: "Learn the basics of organic farming techniques and benefits.",
      type: "video",
      difficulty: "beginner"
    },
    {
      id: 2,
      title: "Soil Nutrition and Health",
      description: "How to maintain and improve your soil quality naturally.",
      type: "article",
      difficulty: "beginner"
    },
    {
      id: 3,
      title: "Advanced Irrigation Techniques",
      description: "Water conservation methods for sustainable farming.",
      type: "guide",
      difficulty: "intermediate"
    },
    {
      id: 4,
      title: "Seasonal Crop Rotation Planning",
      description: "Maximize yield through strategic crop rotation.",
      type: "article",
      difficulty: "intermediate"
    },
    {
      id: 5,
      title: "Pest Management Without Chemicals",
      description: "Natural ways to protect your crops from common pests.",
      type: "video",
      difficulty: "beginner"
    },
    {
      id: 6,
      title: "Climate-Resilient Farming Practices",
      description: "Preparing your farm for changing weather patterns.",
      type: "guide",
      difficulty: "advanced"
    },
    {
      id: 7,
      title: "Farm Equipment Maintenance",
      description: "Keep your tools and machinery in top condition.",
      type: "video",
      difficulty: "intermediate"
    },
    {
      id: 8,
      title: "Marketing Your Farm Products",
      description: "Strategies to sell your produce at better prices.",
      type: "guide",
      difficulty: "advanced"
    }
  ];

  const filteredResources = resources.filter(resource => 
    resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    resource.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const getIconForType = (type: string) => {
    switch(type) {
      case 'video': return <Video size={18} className="text-saffron" />;
      case 'article': return <FileText size={18} className="text-leaf" />;
      case 'guide': return <BookOpen size={18} className="text-earth" />;
      default: return <FileText size={18} />;
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'beginner': return 'bg-leaf/20 text-leaf';
      case 'intermediate': return 'bg-saffron/20 text-saffron';
      case 'advanced': return 'bg-earth/20 text-earth';
      default: return 'bg-gray-200 text-gray-700';
    }
  };

  return (
    <Layout title={t('learnFarming')} showBackButton>
      <div className="space-y-6">
        <Card>
          <div className="flex items-center mb-4">
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-earth">{t('farmingEducation')}</h2>
              <p className="text-sm text-earth/80">
                Free resources to improve your farming knowledge and skills
              </p>
            </div>
          </div>

          <div className="relative mb-4">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-earth/50" />
            <Input
              placeholder="Search resources..."
              className="pl-9 bg-white/80 border-earth/30"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid grid-cols-4 mb-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="video">Videos</TabsTrigger>
              <TabsTrigger value="article">Articles</TabsTrigger>
              <TabsTrigger value="guide">Guides</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="space-y-4 max-h-[400px] overflow-y-auto pr-1">
              {filteredResources.map(resource => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </TabsContent>
            
            <TabsContent value="video" className="space-y-4 max-h-[400px] overflow-y-auto pr-1">
              {filteredResources.filter(r => r.type === 'video').map(resource => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </TabsContent>
            
            <TabsContent value="article" className="space-y-4 max-h-[400px] overflow-y-auto pr-1">
              {filteredResources.filter(r => r.type === 'article').map(resource => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </TabsContent>
            
            <TabsContent value="guide" className="space-y-4 max-h-[400px] overflow-y-auto pr-1">
              {filteredResources.filter(r => r.type === 'guide').map(resource => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </TabsContent>
          </Tabs>
        </Card>

        <div className="text-center mt-4">
          <p className="text-xs text-earth/70">
            These educational resources are curated from agricultural extension services, universities, and experienced farmers.
          </p>
        </div>
      </div>
    </Layout>
  );
};

interface ResourceCardProps {
  resource: LearningResource;
}

const ResourceCard = ({ resource }: ResourceCardProps) => {
  const getDifficultyColor = (difficulty: string) => {
    switch(difficulty) {
      case 'beginner': return 'bg-leaf/20 text-leaf';
      case 'intermediate': return 'bg-saffron/20 text-saffron';
      case 'advanced': return 'bg-earth/20 text-earth';
      default: return 'bg-gray-200 text-gray-700';
    }
  };

  const getIconForType = (type: string) => {
    switch(type) {
      case 'video': return <Video size={18} className="text-saffron" />;
      case 'article': return <FileText size={18} className="text-leaf" />;
      case 'guide': return <BookOpen size={18} className="text-earth" />;
      default: return <FileText size={18} />;
    }
  };

  return (
    <Card className="hover:shadow-md transition-shadow bg-white/90">
      <div className="flex items-start">
        <div className="bg-cream p-2 rounded-full mr-3">
          {getIconForType(resource.type)}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-earth">{resource.title}</h3>
            <span className={`text-xs px-2 py-0.5 rounded-full ${getDifficultyColor(resource.difficulty)}`}>
              {resource.difficulty}
            </span>
          </div>
          <p className="text-sm text-earth/80 mt-1 mb-2">{resource.description}</p>
          <Button 
            variant="secondary" 
            size="xs"
            className="mt-1"
            icon={<ArrowRight size={14} />}
          >
            View Resource
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default LearnFarming;
