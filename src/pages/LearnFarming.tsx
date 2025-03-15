import { useState, useEffect } from 'react';
import { BookOpen, Video, FileText, ArrowRight, Search, Bookmark, BookmarkCheck, Filter } from 'lucide-react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Button from '../components/Button';
import { useLanguage } from '../contexts/LanguageContext';
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface LearningResource {
  id: number;
  title: string;
  description: string;
  type: 'video' | 'article' | 'guide';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  content?: string;
  imageUrl?: string;
  duration?: string;
}

const LearnFarming = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState<string | null>(null);
  const [bookmarkedResources, setBookmarkedResources] = useState<number[]>([]);
  const [showingBookmarkedOnly, setShowingBookmarkedOnly] = useState(false);
  const [selectedResource, setSelectedResource] = useState<LearningResource | null>(null);
  const { t } = useLanguage();
  const { toast } = useToast();
  
  useEffect(() => {
    const savedBookmarks = localStorage.getItem('bookmarkedResources');
    if (savedBookmarks) {
      setBookmarkedResources(JSON.parse(savedBookmarks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('bookmarkedResources', JSON.stringify(bookmarkedResources));
  }, [bookmarkedResources]);
  
  const resources: LearningResource[] = [
    {
      id: 1,
      title: "Introduction to Organic Farming",
      description: "Learn the basics of organic farming techniques and benefits.",
      type: "video",
      difficulty: "beginner",
      duration: "15 min",
      content: "Organic farming focuses on cultivating crops without synthetic fertilizers and pesticides. This video introduces the core principles, including crop rotation, biological pest control, and composting techniques for soil health.",
      imageUrl: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFybWluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
      id: 2,
      title: "Soil Nutrition and Health",
      description: "How to maintain and improve your soil quality naturally.",
      type: "article",
      difficulty: "beginner",
      content: "Healthy soil is the foundation of successful farming. This article covers the essential nutrients plants need, how to test your soil, and natural amendments to improve soil structure and fertility. Learn about the soil food web and how microorganisms contribute to plant health.",
      imageUrl: "https://images.unsplash.com/photo-1566410845389-a2e499b77d93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHNvaWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
      id: 3,
      title: "Advanced Irrigation Techniques",
      description: "Water conservation methods for sustainable farming.",
      type: "guide",
      difficulty: "intermediate",
      content: "Learn about various irrigation methods, including drip irrigation, micro-sprinklers, and rainwater harvesting, to conserve water and improve crop yields.",
      imageUrl: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFybWluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
      id: 4,
      title: "Seasonal Crop Rotation Planning",
      description: "Maximize yield through strategic crop rotation.",
      type: "article",
      difficulty: "intermediate",
      content: "Understand the benefits of crop rotation, including improved soil health, pest management, and reduced disease risk. Learn how to plan and implement a successful crop rotation schedule.",
      imageUrl: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFybWluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
      id: 5,
      title: "Pest Management Without Chemicals",
      description: "Natural ways to protect your crops from common pests.",
      type: "video",
      difficulty: "beginner",
      content: "Learn about natural pest control methods, including companion planting, crop rotation, and biological pest control, to protect your crops without using synthetic pesticides.",
      imageUrl: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFybWluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
      id: 6,
      title: "Climate-Resilient Farming Practices",
      description: "Preparing your farm for changing weather patterns.",
      type: "guide",
      difficulty: "advanced",
      content: "Learn about climate-resilient farming practices, including crop selection, soil preparation, and pest management, to prepare your farm for changing weather patterns.",
      imageUrl: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFybWluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
      id: 7,
      title: "Farm Equipment Maintenance",
      description: "Keep your tools and machinery in top condition.",
      type: "video",
      difficulty: "intermediate",
      content: "Learn about the importance of farm equipment maintenance, including regular inspections, proper lubrication, and proper storage, to keep your tools and machinery in top condition.",
      imageUrl: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFybWluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
    },
    {
      id: 8,
      title: "Marketing Your Farm Products",
      description: "Strategies to sell your produce at better prices.",
      type: "guide",
      difficulty: "advanced",
      content: "Learn about marketing strategies for selling your farm products, including product branding, pricing, and distribution, to increase your sales and revenue.",
      imageUrl: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFybWluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60"
    }
  ];

  const toggleBookmark = (resourceId: number) => {
    const isCurrentlyBookmarked = bookmarkedResources.includes(resourceId);
    
    if (isCurrentlyBookmarked) {
      setBookmarkedResources(bookmarkedResources.filter(id => id !== resourceId));
      toast({
        description: "Resource removed from bookmarks",
        duration: 2000,
      });
    } else {
      setBookmarkedResources([...bookmarkedResources, resourceId]);
      toast({
        description: "Resource added to bookmarks",
        duration: 2000,
      });
    }
  };

  const openResourceDetails = (resource: LearningResource) => {
    setSelectedResource(resource);
  };

  const filteredResources = resources.filter(resource => {
    const matchesSearch = 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesDifficulty = !difficultyFilter || resource.difficulty === difficultyFilter;
    
    const matchesBookmark = !showingBookmarkedOnly || bookmarkedResources.includes(resource.id);
    
    return matchesSearch && matchesDifficulty && matchesBookmark;
  });

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
          <div className="flex items-center justify-between mb-4">
            <div className="flex-1">
              <h2 className="text-lg font-semibold text-earth">{t('farmingEducation')}</h2>
              <p className="text-sm text-earth/80">
                Free resources to improve your farming knowledge and skills
              </p>
            </div>
            <div className="flex space-x-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Filter size={16} />
                    <span className="hidden sm:inline">Filter</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>Filter by</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuLabel className="text-xs font-normal text-muted-foreground">Difficulty</DropdownMenuLabel>
                    <DropdownMenuItem onClick={() => setDifficultyFilter(null)} className={!difficultyFilter ? "bg-accent" : ""}>
                      All levels
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setDifficultyFilter('beginner')} className={difficultyFilter === 'beginner' ? "bg-accent" : ""}>
                      Beginner
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setDifficultyFilter('intermediate')} className={difficultyFilter === 'intermediate' ? "bg-accent" : ""}>
                      Intermediate
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setDifficultyFilter('advanced')} className={difficultyFilter === 'advanced' ? "bg-accent" : ""}>
                      Advanced
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => setShowingBookmarkedOnly(!showingBookmarkedOnly)}>
                    {showingBookmarkedOnly ? "Show all resources" : "Show bookmarked only"}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <Button 
                variant={showingBookmarkedOnly ? "default" : "outline"} 
                size="sm"
                onClick={() => setShowingBookmarkedOnly(!showingBookmarkedOnly)}
                className="flex items-center gap-1"
              >
                {showingBookmarkedOnly ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
                <span className="hidden sm:inline">Bookmarks</span>
              </Button>
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

          {difficultyFilter && (
            <div className="mb-4 flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Filtered by:</span>
              <Badge 
                variant="outline" 
                className={`${getDifficultyColor(difficultyFilter)} capitalize`}
              >
                {difficultyFilter}
              </Badge>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setDifficultyFilter(null)}
                className="h-6 px-2 text-xs"
              >
                Clear
              </Button>
            </div>
          )}

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid grid-cols-4 mb-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="video">Videos</TabsTrigger>
              <TabsTrigger value="article">Articles</TabsTrigger>
              <TabsTrigger value="guide">Guides</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="space-y-4 max-h-[400px] overflow-y-auto pr-1">
              {filteredResources.length > 0 ? (
                filteredResources.map(resource => (
                  <ResourceCard 
                    key={resource.id} 
                    resource={resource} 
                    isBookmarked={bookmarkedResources.includes(resource.id)}
                    onBookmarkToggle={toggleBookmark}
                    onViewDetails={openResourceDetails}
                  />
                ))
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <p>No resources found matching your criteria.</p>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => {
                      setSearchQuery('');
                      setDifficultyFilter(null);
                      setShowingBookmarkedOnly(false);
                    }}
                    className="mt-2"
                  >
                    Clear all filters
                  </Button>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="video" className="space-y-4 max-h-[400px] overflow-y-auto pr-1">
              {filteredResources.filter(r => r.type === 'video').length > 0 ? (
                filteredResources.filter(r => r.type === 'video').map(resource => (
                  <ResourceCard 
                    key={resource.id} 
                    resource={resource} 
                    isBookmarked={bookmarkedResources.includes(resource.id)}
                    onBookmarkToggle={toggleBookmark}
                    onViewDetails={openResourceDetails}
                  />
                ))
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <p>No video resources found matching your criteria.</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="article" className="space-y-4 max-h-[400px] overflow-y-auto pr-1">
              {filteredResources.filter(r => r.type === 'article').length > 0 ? (
                filteredResources.filter(r => r.type === 'article').map(resource => (
                  <ResourceCard 
                    key={resource.id} 
                    resource={resource} 
                    isBookmarked={bookmarkedResources.includes(resource.id)}
                    onBookmarkToggle={toggleBookmark}
                    onViewDetails={openResourceDetails}
                  />
                ))
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <p>No article resources found matching your criteria.</p>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="guide" className="space-y-4 max-h-[400px] overflow-y-auto pr-1">
              {filteredResources.filter(r => r.type === 'guide').length > 0 ? (
                filteredResources.filter(r => r.type === 'guide').map(resource => (
                  <ResourceCard 
                    key={resource.id} 
                    resource={resource} 
                    isBookmarked={bookmarkedResources.includes(resource.id)}
                    onBookmarkToggle={toggleBookmark}
                    onViewDetails={openResourceDetails}
                  />
                ))
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <p>No guide resources found matching your criteria.</p>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </Card>

        <div className="text-center mt-4">
          <p className="text-xs text-earth/70">
            These educational resources are curated from agricultural extension services, universities, and experienced farmers.
          </p>
        </div>
      </div>

      <Dialog open={!!selectedResource} onOpenChange={() => setSelectedResource(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          {selectedResource && (
            <>
              <DialogHeader>
                <div className="flex items-center justify-between">
                  <DialogTitle className="text-earth">{selectedResource.title}</DialogTitle>
                  <Badge className={`${getDifficultyColor(selectedResource.difficulty)} capitalize`}>
                    {selectedResource.difficulty}
                  </Badge>
                </div>
                <DialogDescription className="flex items-center gap-2 mt-2">
                  <div className="bg-cream p-1 rounded-full">
                    {getIconForType(selectedResource.type)}
                  </div>
                  <span className="capitalize">{selectedResource.type}</span>
                  {selectedResource.duration && (
                    <>
                      <span className="text-muted-foreground">•</span>
                      <span>{selectedResource.duration}</span>
                    </>
                  )}
                </DialogDescription>
              </DialogHeader>
              
              {selectedResource.imageUrl && (
                <div className="aspect-video w-full overflow-hidden rounded-md mb-4">
                  <img 
                    src={selectedResource.imageUrl} 
                    alt={selectedResource.title} 
                    className="object-cover w-full h-full"
                  />
                </div>
              )}
              
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">{selectedResource.description}</p>
                <p className="text-sm">{selectedResource.content}</p>
              </div>
              
              <div className="flex justify-between mt-4">
                <Button 
                  variant="outline" 
                  onClick={() => toggleBookmark(selectedResource.id)}
                >
                  {bookmarkedResources.includes(selectedResource.id) ? (
                    <>
                      <BookmarkCheck size={16} className="mr-2" />
                      Remove Bookmark
                    </>
                  ) : (
                    <>
                      <Bookmark size={16} className="mr-2" />
                      Bookmark
                    </>
                  )}
                </Button>
                
                <Button>
                  Start Learning
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

interface ResourceCardProps {
  resource: LearningResource;
  isBookmarked: boolean;
  onBookmarkToggle: (id: number) => void;
  onViewDetails: (resource: LearningResource) => void;
}

const ResourceCard = ({ resource, isBookmarked, onBookmarkToggle, onViewDetails }: ResourceCardProps) => {
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
            <div className="flex items-center gap-2">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onBookmarkToggle(resource.id);
                }}
                className="text-earth/70 hover:text-saffron transition-colors"
              >
                {isBookmarked ? (
                  <BookmarkCheck size={18} className="text-saffron" />
                ) : (
                  <Bookmark size={18} />
                )}
              </button>
              <span className={`text-xs px-2 py-0.5 rounded-full ${getDifficultyColor(resource.difficulty)}`}>
                {resource.difficulty}
              </span>
            </div>
          </div>
          <p className="text-sm text-earth/80 mt-1 mb-2">{resource.description}</p>
          <Button 
            variant="secondary" 
            size="xs"
            className="mt-1"
            icon={<ArrowRight size={14} />}
            onClick={() => onViewDetails(resource)}
          >
            View Resource
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default LearnFarming;
