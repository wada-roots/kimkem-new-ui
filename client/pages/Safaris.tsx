import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Star, Clock, Users, MapPin, Search, Filter } from 'lucide-react';
import SafariModal from '@/components/SafariModal';

const Safaris = () => {
  const [selectedSafari, setSelectedSafari] = useState<any>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterDuration, setFilterDuration] = useState('all');
  const [filterLocation, setFilterLocation] = useState('all');

  const allSafaris = [
    {
      id: 1,
      title: 'Masai Mara Classic Safari',
      description: 'Experience the Great Migration and witness millions of wildebeest crossing the Mara River in this iconic safari destination.',
      image: '/placeholder.svg',
      duration: '3 Days',
      groupSize: '6-8 People',
      price: '$1,200',
      rating: 4.9,
      location: 'Masai Mara',
      highlights: ['Great Migration', 'Big Five', 'Cultural Experience'],
      category: 'Classic',
    },
    {
      id: 2,
      title: 'Amboseli Elephant Paradise',
      description: 'Get up close with majestic elephants against the breathtaking backdrop of Mount Kilimanjaro.',
      image: '/placeholder.svg',
      duration: '4 Days',
      groupSize: '4-6 People',
      price: '$1,800',
      rating: 4.8,
      location: 'Amboseli',
      highlights: ['Elephant Herds', 'Mount Kilimanjaro Views', 'Bird Watching'],
      category: 'Wildlife',
    },
    {
      id: 3,
      title: 'Samburu Adventure',
      description: 'Discover unique wildlife species in the rugged landscapes of northern Kenya.',
      image: '/placeholder.svg',
      duration: '5 Days',
      groupSize: '4-8 People',
      price: '$2,200',
      rating: 4.9,
      location: 'Samburu',
      highlights: ['Rare Species', 'Cultural Immersion', 'River Crossings'],
      category: 'Adventure',
    },
    {
      id: 4,
      title: 'Tsavo East & West Explorer',
      description: 'Explore the vast wilderness of Kenya\'s largest national park, home to red elephants and diverse wildlife.',
      image: '/placeholder.svg',
      duration: '6 Days',
      groupSize: '4-10 People',
      price: '$2,800',
      rating: 4.7,
      location: 'Tsavo',
      highlights: ['Red Elephants', 'Vast Landscapes', 'Mzima Springs'],
      category: 'Extended',
    },
    {
      id: 5,
      title: 'Lake Nakuru Flamingo Spectacle',
      description: 'Witness thousands of flamingos painting the lake pink in this UNESCO World Heritage site.',
      image: '/placeholder.svg',
      duration: '2 Days',
      groupSize: '6-12 People',
      price: '$800',
      rating: 4.6,
      location: 'Lake Nakuru',
      highlights: ['Flamingo Colonies', 'Rhino Sanctuary', 'Scenic Views'],
      category: 'Short',
    },
    {
      id: 6,
      title: 'Aberdare Mountain Safari',
      description: 'Experience high-altitude wildlife viewing in the mystical Aberdare mountain ranges.',
      image: '/placeholder.svg',
      duration: '3 Days',
      groupSize: '4-8 People',
      price: '$1,500',
      rating: 4.5,
      location: 'Aberdare',
      highlights: ['Mountain Wildlife', 'Tree Hotels', 'Waterfall Views'],
      category: 'Mountain',
    },
    {
      id: 7,
      title: 'Meru National Park Adventure',
      description: 'Discover the untamed beauty of Meru, featured in the famous "Born Free" story.',
      image: '/placeholder.svg',
      duration: '4 Days',
      groupSize: '4-6 People',
      price: '$1,900',
      rating: 4.8,
      location: 'Meru',
      highlights: ['Born Free Legacy', 'Diverse Ecosystems', 'Elsa\'s Kopje'],
      category: 'Heritage',
    },
    {
      id: 8,
      title: 'Hell\'s Gate Adventure Safari',
      description: 'Unique walking and cycling safari in the dramatic landscapes of Hell\'s Gate National Park.',
      image: '/placeholder.svg',
      duration: '2 Days',
      groupSize: '6-10 People',
      price: '$600',
      rating: 4.4,
      location: 'Hell\'s Gate',
      highlights: ['Walking Safari', 'Cycling Tours', 'Geothermal Features'],
      category: 'Adventure',
    },
    {
      id: 9,
      title: 'Ultimate Kenya Safari',
      description: 'Comprehensive 10-day journey covering Kenya\'s most spectacular national parks and conservancies.',
      image: '/placeholder.svg',
      duration: '10 Days',
      groupSize: '4-8 People',
      price: '$4,500',
      rating: 5.0,
      location: 'Multi-Park',
      highlights: ['Complete Experience', 'Luxury Lodges', 'All Big Five'],
      category: 'Luxury',
    },
  ];

  const filteredSafaris = allSafaris.filter(safari => {
    const matchesSearch = safari.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         safari.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         safari.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesDuration = filterDuration === 'all' || 
                           (filterDuration === 'short' && safari.duration.includes('2')) ||
                           (filterDuration === 'medium' && (safari.duration.includes('3') || safari.duration.includes('4'))) ||
                           (filterDuration === 'long' && (safari.duration.includes('5') || safari.duration.includes('6') || safari.duration.includes('10')));
    
    const matchesLocation = filterLocation === 'all' || safari.location.toLowerCase().includes(filterLocation.toLowerCase());
    
    return matchesSearch && matchesDuration && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-to-r from-safari-green to-safari-brown flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Safari Packages</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Choose from our carefully crafted safari experiences designed to showcase Kenya's incredible wildlife
          </p>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search safaris..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-4">
              <Select value={filterDuration} onValueChange={setFilterDuration}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Duration" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Durations</SelectItem>
                  <SelectItem value="short">1-2 Days</SelectItem>
                  <SelectItem value="medium">3-4 Days</SelectItem>
                  <SelectItem value="long">5+ Days</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={filterLocation} onValueChange={setFilterLocation}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="masai">Masai Mara</SelectItem>
                  <SelectItem value="amboseli">Amboseli</SelectItem>
                  <SelectItem value="samburu">Samburu</SelectItem>
                  <SelectItem value="tsavo">Tsavo</SelectItem>
                  <SelectItem value="nakuru">Lake Nakuru</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Safari Packages Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-safari-brown mb-2">
              {filteredSafaris.length} Safari{filteredSafaris.length !== 1 ? 's' : ''} Found
            </h2>
            <p className="text-gray-600">Discover your perfect African adventure</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSafaris.map((safari) => (
              <Card key={safari.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <img 
                    src={safari.image} 
                    alt={safari.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-safari-orange text-white">
                    {safari.location}
                  </Badge>
                  <Badge className="absolute top-4 right-4 bg-safari-green text-white">
                    {safari.category}
                  </Badge>
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl text-safari-brown">{safari.title}</CardTitle>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-safari-orange text-safari-orange" />
                      <span className="text-sm text-gray-600">{safari.rating}</span>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600">
                    {safari.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="h-4 w-4 mr-2" />
                      {safari.duration}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="h-4 w-4 mr-2" />
                      {safari.groupSize}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="h-4 w-4 mr-2" />
                      {safari.location}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {safari.highlights.slice(0, 2).map((highlight) => (
                      <Badge key={highlight} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                    {safari.highlights.length > 2 && (
                      <Badge variant="secondary" className="text-xs">
                        +{safari.highlights.length - 2} more
                      </Badge>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-safari-green">{safari.price}</span>
                      <span className="text-sm text-gray-600 ml-1">per person</span>
                    </div>
                    <Button 
                      className="bg-safari-green hover:bg-safari-green/90 text-white"
                      onClick={() => setSelectedSafari(safari)}
                    >
                      View Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {filteredSafaris.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600 mb-4">No safaris found matching your criteria</p>
              <Button 
                onClick={() => {
                  setSearchTerm('');
                  setFilterDuration('all');
                  setFilterLocation('all');
                }}
                variant="outline"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-safari-green text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-xl mb-8 text-green-100">
            We offer custom safari packages tailored to your preferences and budget.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-safari-green hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
          >
            Create Custom Safari
          </Button>
        </div>
      </section>

      {/* Safari Modal */}
      {selectedSafari && (
        <SafariModal 
          safari={selectedSafari} 
          onClose={() => setSelectedSafari(null)} 
        />
      )}
    </div>
  );
};

export default Safaris;
