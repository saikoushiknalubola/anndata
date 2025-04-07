
import React from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import { Bookmark, Share2, ThumbsUp, User } from 'lucide-react';

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      farmer: 'Rajesh Kumar',
      location: 'Nizamabad, Telangana',
      title: 'From Traditional Farming to Smart Agriculture',
      snippet: 'How I increased my yield by 30% using modern farming techniques and digital agriculture tools.',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=800&q=80',
      likes: 245,
      date: '2 weeks ago'
    },
    {
      id: 2,
      farmer: 'Lakshmi Devi',
      location: 'Warangal, Telangana',
      title: 'Organic Farming Success in Drought-Prone Area',
      snippet: 'My journey to converting 5 acres into a profitable organic farm despite water scarcity challenges.',
      image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=800&q=80',
      likes: 189,
      date: '1 month ago'
    },
    {
      id: 3,
      farmer: 'Mohammed Ismail',
      location: 'Karimnagar, Telangana',
      title: 'Cotton Crop Innovation',
      snippet: 'How I tackled pest problems using integrated pest management and doubled my income.',
      image: 'https://images.unsplash.com/photo-1530907487668-af02f65b4afe?auto=format&fit=crop&w=800&q=80',
      likes: 132,
      date: '3 months ago'
    },
    {
      id: 4,
      farmer: 'Anita Singh',
      location: 'Adilabad, Telangana',
      title: 'Women-Led Farming Cooperative',
      snippet: 'Building a successful women farmers group that transformed our village economy.',
      image: 'https://images.unsplash.com/photo-1595376210281-956209f860f9?auto=format&fit=crop&w=800&q=80',
      likes: 298,
      date: '2 months ago'
    }
  ];

  return (
    <Layout title="Success Stories">
      <div className="space-y-4">
        <Card variant="tricolor" className="mb-6">
          <p className="text-earth text-sm">
            Read inspiring stories from farmers across Telangana who have transformed their lives through innovative farming practices.
            Learn from their experiences and apply their techniques to your farm.
          </p>
        </Card>

        <div className="grid grid-cols-1 gap-4">
          {stories.map((story) => (
            <Card 
              key={story.id} 
              variant="image-card" 
              className="overflow-hidden animate-scale-in"
              imageUrl={story.image}
              imageAlt={story.title}
            >
              <div className="flex items-center mb-3">
                <div className="w-9 h-9 bg-leaf/20 flex items-center justify-center rounded-full mr-3">
                  <User className="w-5 h-5 text-leaf" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-earth">{story.farmer}</div>
                  <div className="text-xs text-earth/70">{story.location}</div>
                </div>
                <div className="ml-auto text-xs text-earth/50">{story.date}</div>
              </div>
              
              <h3 className="font-bold text-earth text-lg mb-2">{story.title}</h3>
              <p className="text-sm text-earth/90 mb-4">{story.snippet}</p>
              
              <div className="flex justify-between items-center border-t border-cream/50 pt-3 mt-3">
                <div className="flex items-center text-sm text-earth/70">
                  <ThumbsUp className="w-4 h-4 mr-1 text-leaf" /> 
                  <span>{story.likes}</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <button className="flex items-center text-xs text-earth/70 hover:text-earth transition-colors">
                    <Bookmark className="w-4 h-4 mr-1" /> Save
                  </button>
                  <button className="flex items-center text-xs text-earth/70 hover:text-earth transition-colors">
                    <Share2 className="w-4 h-4 mr-1" /> Share
                  </button>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center pt-2 pb-4">
          <button className="inline-flex items-center justify-center text-sm font-medium text-leaf hover:text-saffron transition-colors p-2">
            Load more stories
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default SuccessStories;
