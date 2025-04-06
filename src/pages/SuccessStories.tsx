
import React from 'react';
import Layout from '../components/Layout';
import Card from '../components/Card';
import { Bookmark, Share2, ThumbsUp, User } from 'lucide-react';

const SuccessStories = () => {
  const stories = [
    {
      id: 1,
      farmer: 'Rajesh Kumar',
      location: 'Haryana',
      title: 'From Traditional Farming to Smart Agriculture',
      snippet: 'How I increased my yield by 30% using modern farming techniques and digital agriculture tools.',
      image: 'https://source.unsplash.com/random/300x200/?farmer,india',
      likes: 245,
      date: '2 weeks ago'
    },
    {
      id: 2,
      farmer: 'Lakshmi Devi',
      location: 'Karnataka',
      title: 'Organic Farming Success in Drought-Prone Area',
      snippet: 'My journey to converting 5 acres into a profitable organic farm despite water scarcity challenges.',
      image: 'https://source.unsplash.com/random/300x200/?organic,farm',
      likes: 189,
      date: '1 month ago'
    },
    {
      id: 3,
      farmer: 'Mohammed Ismail',
      location: 'Gujarat',
      title: 'Cotton Crop Innovation',
      snippet: 'How I tackled pest problems using integrated pest management and doubled my income.',
      image: 'https://source.unsplash.com/random/300x200/?cotton,farm',
      likes: 132,
      date: '3 months ago'
    },
    {
      id: 4,
      farmer: 'Anita Singh',
      location: 'Madhya Pradesh',
      title: 'Women-Led Farming Cooperative',
      snippet: 'Building a successful women farmers group that transformed our village economy.',
      image: 'https://source.unsplash.com/random/300x200/?women,farmer',
      likes: 298,
      date: '2 months ago'
    }
  ];

  return (
    <Layout title="Success Stories">
      <div className="space-y-4">
        <Card variant="tricolor" className="mb-6">
          <p className="text-earth text-sm">
            Read inspiring stories from farmers across India who have transformed their lives through innovative farming practices.
            Learn from their experiences and apply their techniques to your farm.
          </p>
        </Card>

        <div className="grid grid-cols-1 gap-4">
          {stories.map((story) => (
            <Card key={story.id} variant="gradient" className="overflow-hidden">
              <div className="relative h-48 -mx-4 -mt-4 mb-4">
                <img 
                  src={story.image} 
                  alt={story.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3">
                  <h2 className="text-white font-bold text-lg drop-shadow-md">{story.title}</h2>
                </div>
              </div>
              
              <div className="flex items-center mb-3">
                <div className="w-8 h-8 bg-leaf/20 flex items-center justify-center rounded-full mr-2">
                  <User className="w-4 h-4 text-leaf" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-earth">{story.farmer}</div>
                  <div className="text-xs text-earth/70">{story.location}</div>
                </div>
                <div className="ml-auto text-xs text-earth/50">{story.date}</div>
              </div>
              
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
          <button className="inline-flex items-center justify-center text-sm font-medium text-leaf hover:text-saffron transition-colors">
            Load more stories
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default SuccessStories;
