
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Video, FileText, Search, Filter, Star, Clock, Users } from 'lucide-react';
import MobileHeader from '../components/MobileHeader';
import MobileBottomNav from '../components/MobileBottomNav';
import MobileCard from '../components/MobileCard';
import MobileButton from '../components/MobileButton';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const MobileLearning: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All', icon: BookOpen },
    { id: 'video', name: 'Videos', icon: Video },
    { id: 'article', name: 'Articles', icon: FileText },
    { id: 'guide', name: 'Guides', icon: Star }
  ];

  const learningContent = [
    {
      id: 1,
      title: 'Organic Farming Basics',
      description: 'Learn the fundamentals of organic farming techniques',
      type: 'video',
      duration: '15 min',
      difficulty: 'Beginner',
      rating: 4.8,
      students: 1234,
      thumbnail: '🌱',
      category: 'Organic Farming'
    },
    {
      id: 2,
      title: 'Soil Health Management',
      description: 'Complete guide to maintaining healthy soil',
      type: 'article',
      duration: '8 min read',
      difficulty: 'Intermediate',
      rating: 4.9,
      students: 856,
      thumbnail: '🌍',
      category: 'Soil Care'
    },
    {
      id: 3,
      title: 'Crop Rotation Planning',
      description: 'Master the art of effective crop rotation',
      type: 'guide',
      duration: '20 min',
      difficulty: 'Advanced',
      rating: 4.7,
      students: 642,
      thumbnail: '🔄',
      category: 'Planning'
    },
    {
      id: 4,
      title: 'Pest Control Methods',
      description: 'Natural ways to protect your crops',
      type: 'video',
      duration: '12 min',
      difficulty: 'Beginner',
      rating: 4.6,
      students: 1089,
      thumbnail: '🐛',
      category: 'Pest Control'
    }
  ];

  const filteredContent = learningContent.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.type === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video size={16} className="text-red-500" />;
      case 'article': return <FileText size={16} className="text-blue-500" />;
      case 'guide': return <Star size={16} className="text-yellow-500" />;
      default: return <BookOpen size={16} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-leaf-25 via-white to-saffron-25 pb-20">
      <MobileHeader title="Learn Farming" showBackButton />
      
      <div className="pt-20 px-4 space-y-4">
        {/* Search Bar */}
        <MobileCard>
          <div className="relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-soil-400" />
            <Input
              placeholder="Search learning content..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </MobileCard>

        {/* Category Filter */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                activeCategory === category.id
                  ? 'bg-leaf-500 text-white'
                  : 'bg-white text-soil-600 border border-leaf-200'
              }`}
            >
              <category.icon size={16} />
              {category.name}
            </button>
          ))}
        </div>

        {/* Featured Content */}
        <MobileCard variant="gradient">
          <div className="flex items-center gap-3 mb-3">
            <Star size={20} className="text-saffron-600" />
            <h2 className="font-semibold text-soil-800">Featured Course</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-4xl">🚜</div>
            <div className="flex-1">
              <h3 className="font-semibold text-soil-800 mb-1">
                Modern Farming Techniques
              </h3>
              <p className="text-sm text-soil-600 mb-2">
                Complete course on modern agricultural practices
              </p>
              <div className="flex items-center gap-2 text-xs text-soil-500">
                <Clock size={12} />
                <span>2 hours</span>
                <Users size={12} />
                <span>2.5k students</span>
              </div>
            </div>
          </div>
          <MobileButton variant="primary" size="sm" fullWidth className="mt-3">
            Start Learning
          </MobileButton>
        </MobileCard>

        {/* Learning Content */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold text-soil-800">
              Learning Content ({filteredContent.length})
            </h2>
            <Filter size={18} className="text-soil-400" />
          </div>

          {filteredContent.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <MobileCard clickable className="hover:shadow-lg">
                <div className="flex gap-4">
                  <div className="text-3xl">{item.thumbnail}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {getTypeIcon(item.type)}
                      <Badge variant="outline" className="text-xs">
                        {item.category}
                      </Badge>
                    </div>
                    
                    <h3 className="font-semibold text-soil-800 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-soil-600 mb-2">
                      {item.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-soil-500">
                        <div className="flex items-center gap-1">
                          <Clock size={12} />
                          {item.duration}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star size={12} className="text-yellow-500" />
                          {item.rating}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users size={12} />
                          {item.students}
                        </div>
                      </div>
                      <Badge className={getDifficultyColor(item.difficulty)} variant="secondary">
                        {item.difficulty}
                      </Badge>
                    </div>
                  </div>
                </div>
              </MobileCard>
            </motion.div>
          ))}
        </div>

        {/* Progress Section */}
        <MobileCard>
          <h2 className="font-semibold text-soil-800 mb-3">Your Progress</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-soil-600">Courses Completed</span>
              <span className="font-semibold">12/20</span>
            </div>
            <div className="w-full bg-leaf-100 rounded-full h-2">
              <div className="bg-leaf-500 h-2 rounded-full" style={{ width: '60%' }}></div>
            </div>
            <div className="flex justify-between text-xs text-soil-500">
              <span>60% Complete</span>
              <span>8 courses remaining</span>
            </div>
          </div>
        </MobileCard>
      </div>

      <MobileBottomNav />
    </div>
  );
};

export default MobileLearning;
