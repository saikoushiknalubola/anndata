
import React, { useState } from 'react';
import { Search, BookOpen, FileText, Video, Star, Filter, CheckSquare } from 'lucide-react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import Button from '../components/Button';
import { useLanguage } from '../contexts/LanguageContext';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from '@/components/ui/badge';

interface KnowledgeItem {
  id: number;
  title: string;
  description: string;
  type: 'article' | 'video' | 'guide';
  tags: string[];
  author: string;
  date: string;
  views: number;
  isFavorite: boolean;
  imageUrl?: string;
}

const KnowledgeBase = () => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTag, setActiveTag] = useState<string | null>(null);
  
  // Mock knowledge base items
  const knowledgeItems: KnowledgeItem[] = [
    {
      id: 1,
      title: "Water Conservation Techniques for Small Farms",
      description: "Learn efficient water management methods to reduce wastage and improve crop yield during dry seasons.",
      type: "article",
      tags: ["water", "conservation", "management"],
      author: "Dr. Rajesh Kumar",
      date: "2025-04-15",
      views: 1245,
      isFavorite: true,
      imageUrl: "/lovable-uploads/076d86c2-8822-48f5-8d2a-a9bce74c1509.png"
    },
    {
      id: 2,
      title: "Understanding Soil pH for Better Crop Health",
      description: "Discover how soil pH affects nutrient availability and crop growth, with practical measurement techniques.",
      type: "guide",
      tags: ["soil", "pH", "nutrients"],
      author: "Anita Desai",
      date: "2025-04-10",
      views: 895,
      isFavorite: false
    },
    {
      id: 3,
      title: "Natural Pest Control Methods for Organic Farming",
      description: "Video demonstration of effective organic pest control methods using locally available materials.",
      type: "video",
      tags: ["pest", "organic", "control"],
      author: "Suresh Reddy",
      date: "2025-04-05",
      views: 2150,
      isFavorite: false,
      imageUrl: "/lovable-uploads/e17e17d5-c387-4c00-85cb-497be4a7a72c.png"
    },
    {
      id: 4,
      title: "Crop Rotation Strategies for Small Holdings",
      description: "Learn how to implement effective crop rotation to preserve soil health and improve productivity.",
      type: "article",
      tags: ["crop", "rotation", "soil"],
      author: "Dr. Meena Patel",
      date: "2025-04-01",
      views: 765,
      isFavorite: true
    }
  ];
  
  const allTags = Array.from(new Set(knowledgeItems.flatMap(item => item.tags)));
  
  const filteredItems = knowledgeItems.filter(item => {
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTag = activeTag === null || item.tags.includes(activeTag);
    
    return matchesSearch && matchesTag;
  });
  
  const getItemIcon = (type: string) => {
    switch (type) {
      case 'article': return <FileText size={16} className="text-leaf" />;
      case 'video': return <Video size={16} className="text-terracotta" />;
      case 'guide': return <CheckSquare size={16} className="text-saffron" />;
      default: return <FileText size={16} />;
    }
  };
  
  const toggleFavorite = (id: number) => {
    // In a real app, this would update a database
    console.log(`Toggle favorite for item ${id}`);
  };
  
  return (
    <Layout title="Knowledge Base" showBackButton>
      <div className="space-y-5">
        <div className="mb-4 relative">
          <Input
            type="text"
            placeholder="Search knowledge base..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 border-earth/30 bg-white/90"
          />
          <div className="absolute left-3 top-2.5 text-soil/50">
            <Search size={18} />
          </div>
        </div>
        
        <div className="flex items-center gap-2 overflow-x-auto py-2 scrollbar-hide">
          <Button
            variant={activeTag === null ? "primary" : "outline"}
            size="xs"
            onClick={() => setActiveTag(null)}
            className="whitespace-nowrap"
          >
            All Topics
          </Button>
          
          {allTags.map(tag => (
            <Button
              key={tag}
              variant={activeTag === tag ? "primary" : "outline"}
              size="xs"
              onClick={() => setActiveTag(tag)}
              className="whitespace-nowrap"
            >
              {tag}
            </Button>
          ))}
        </div>
        
        <div className="space-y-4 mt-4">
          {filteredItems.length > 0 ? (
            filteredItems.map(item => (
              <Card 
                key={item.id}
                variant={item.imageUrl ? 'image-card' : 'clay'}
                className="hover:shadow-md transition-all"
                imageUrl={item.imageUrl}
                imagePosition="right"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center mb-2">
                      {getItemIcon(item.type)}
                      <Badge variant="outline" className="ml-2 text-xs">
                        {item.type}
                      </Badge>
                    </div>
                    
                    <h3 className="font-semibold text-soil">{item.title}</h3>
                    <p className="text-sm text-soil/70 mt-1 mb-2">{item.description}</p>
                    
                    <div className="flex flex-wrap gap-1 mb-2">
                      {item.tags.map(tag => (
                        <span 
                          key={tag}
                          className="text-xs px-2 py-0.5 bg-white/80 rounded-full border border-leaf/20 cursor-pointer hover:bg-cream"
                          onClick={() => setActiveTag(tag)}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="text-xs text-soil/60 flex items-center mt-2">
                      <span>{item.author}</span>
                      <span className="mx-1">•</span>
                      <span>{item.date}</span>
                      <span className="mx-1">•</span>
                      <span>{item.views} views</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end">
                    <Button
                      variant="ghost"
                      size="xs"
                      className="p-1"
                      onClick={() => toggleFavorite(item.id)}
                    >
                      <Star 
                        size={16} 
                        className={item.isFavorite ? "text-saffron fill-saffron" : "text-soil/40"} 
                      />
                    </Button>
                  </div>
                </div>
              </Card>
            ))
          ) : (
            <div className="text-center py-8">
              <BookOpen size={40} className="mx-auto text-soil/30 mb-3" />
              <div className="text-soil/50">No knowledge resources found matching your search</div>
              <Button
                variant="outline"
                size="sm"
                className="mt-3"
                onClick={() => {
                  setSearchQuery('');
                  setActiveTag(null);
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default KnowledgeBase;
