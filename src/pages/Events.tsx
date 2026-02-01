import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { EventCard, Event } from '@/components/EventCard';

const categories = ['All', 'Music', 'Dance', 'Drama', 'Art', 'Literary', 'Fashion', 'Gaming'];

const mockEvents: Event[] = [
  {
    id: '1',
    name: 'Battle of Bands',
    description: 'Compete with the best college bands across India. Electric performances, roaring crowds, and the ultimate showdown for musical supremacy.',
    date: 'March 15, 2025',
    time: '7:00 PM',
    venue: 'Main Stage',
    category: 'Music',
    contactPerson: 'Rahul Sharma',
    contactEmail: 'rahul@iitbhilai.ac.in',
    registrationLink: '#',
    image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800',
    featured: true,
  },
  {
    id: '2',
    name: 'Nritya - Dance Competition',
    description: 'Showcase your dance moves in solo, duet, or group categories. From classical to contemporary, all styles welcome.',
    date: 'March 15, 2025',
    time: '3:00 PM',
    venue: 'Auditorium',
    category: 'Dance',
    contactPerson: 'Priya Patel',
    contactEmail: 'priya@iitbhilai.ac.in',
    registrationLink: '#',
    image: 'https://images.unsplash.com/photo-1547153760-18fc86324498?w=800',
  },
  {
    id: '3',
    name: 'Nukkad Natak',
    description: 'Street play competition with powerful social messages. Use the power of theater to create impact.',
    date: 'March 16, 2025',
    time: '11:00 AM',
    venue: 'Central Lawn',
    category: 'Drama',
    contactPerson: 'Amit Kumar',
    contactEmail: 'amit@iitbhilai.ac.in',
    registrationLink: '#',
    image: 'https://images.unsplash.com/photo-1503095396549-807759245b35?w=800',
  },
  {
    id: '4',
    name: 'Canvas - Art Exhibition',
    description: 'Display your artistic talents in painting, sketching, and digital art. Theme-based competitions with exciting prizes.',
    date: 'March 16, 2025',
    time: '10:00 AM',
    venue: 'Art Gallery',
    category: 'Art',
    contactPerson: 'Sneha Reddy',
    contactEmail: 'sneha@iitbhilai.ac.in',
    registrationLink: '#',
    image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=800',
  },
  {
    id: '5',
    name: 'Quizzards - Quiz Competition',
    description: 'Test your knowledge across diverse topics from science to pop culture. Team up and compete for glory.',
    date: 'March 16, 2025',
    time: '2:00 PM',
    venue: 'Seminar Hall',
    category: 'Literary',
    contactPerson: 'Vikram Singh',
    contactEmail: 'vikram@iitbhilai.ac.in',
    registrationLink: '#',
    image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800',
  },
  {
    id: '6',
    name: 'Runway - Fashion Show',
    description: 'Walk the ramp with confidence. Theme-based fashion show celebrating creativity and style.',
    date: 'March 17, 2025',
    time: '6:00 PM',
    venue: 'Main Stage',
    category: 'Fashion',
    contactPerson: 'Neha Gupta',
    contactEmail: 'neha@iitbhilai.ac.in',
    registrationLink: '#',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800',
    featured: true,
  },
  {
    id: '7',
    name: 'Valorant Tournament',
    description: '5v5 esports competition. Form your squad and battle for the championship title.',
    date: 'March 15-17, 2025',
    time: '10:00 AM',
    venue: 'Gaming Arena',
    category: 'Gaming',
    contactPerson: 'Arjun Rao',
    contactEmail: 'arjun@iitbhilai.ac.in',
    registrationLink: '#',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800',
  },
  {
    id: '8',
    name: 'Poetry Slam',
    description: 'Express yourself through the power of words. Open mic poetry competition in Hindi and English.',
    date: 'March 16, 2025',
    time: '4:00 PM',
    venue: 'Open Air Theater',
    category: 'Literary',
    contactPerson: 'Kavya Sharma',
    contactEmail: 'kavya@iitbhilai.ac.in',
    registrationLink: '#',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800',
  },
];

const Events = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showFilters, setShowFilters] = useState(false);

  const filteredEvents = mockEvents.filter((event) => {
    const matchesSearch =
      event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'All' || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-50" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="font-orbitron text-4xl md:text-6xl font-bold mb-4">
              <span className="text-gradient">Explore Events</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Discover and register for exciting competitions, performances, and activities
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <div className="flex gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search events..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 h-12 bg-card/50 border-border/50 focus:border-primary"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>
              <Button
                variant="outline"
                size="icon"
                className="h-12 w-12 md:hidden"
                onClick={() => setShowFilters(!showFilters)}
              >
                <Filter className="w-5 h-5" />
              </Button>
            </div>

            {/* Category Filters - Desktop */}
            <div className="hidden md:flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  className={`cursor-pointer px-4 py-2 text-sm transition-all ${
                    selectedCategory === category
                      ? 'bg-gradient-cosmic border-none'
                      : 'border-border/50 hover:border-primary/50'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>

            {/* Category Filters - Mobile */}
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden flex flex-wrap gap-2 mt-4"
              >
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    className={`cursor-pointer px-3 py-1.5 text-xs transition-all ${
                      selectedCategory === category
                        ? 'bg-gradient-cosmic border-none'
                        : 'border-border/50'
                    }`}
                    onClick={() => {
                      setSelectedCategory(category);
                      setShowFilters(false);
                    }}
                  >
                    {category}
                  </Badge>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-muted-foreground text-lg">
                No events found matching your criteria.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
              >
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
