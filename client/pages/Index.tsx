import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Clock, Users, MapPin, Camera, Heart, Award, Waves, Anchor } from 'lucide-react';
import SafariModal from '@/components/SafariModal';
import HeroCarousel from '@/components/HeroCarousel';

const Index = () => {
  const [selectedSafari, setSelectedSafari] = useState<any>(null);
  const navigate = useNavigate();

  const featuredSafaris = [
    {
      id: 1,
      title: 'Masai Mara Classic Safari',
      description: 'Experience the Great Migration and witness millions of wildebeest crossing the Mara River.',
      image: 'https://images.pexels.com/photos/8341088/pexels-photo-8341088.jpeg',
      duration: '3 Days',
      groupSize: '6-8 People',
      price: '$1,200',
      rating: 4.9,
      location: 'Masai Mara',
      highlights: ['Great Migration', 'Big Five', 'Cultural Experience'],
    },
    {
      id: 2,
      title: 'Amboseli Elephant Paradise',
      description: 'Get up close with majestic elephants against the backdrop of Mount Kilimanjaro.',
      image: 'https://images.pexels.com/photos/50611/elephants-africa-amboseli-animal-50611.jpeg',
      duration: '4 Days',
      groupSize: '4-6 People',
      price: '$1,800',
      rating: 4.8,
      location: 'Amboseli',
      highlights: ['Elephant Herds', 'Mount Kilimanjaro Views', 'Bird Watching'],
    },
    {
      id: 3,
      title: 'Samburu Adventure',
      description: 'Discover unique wildlife species in the rugged landscapes of northern Kenya.',
      image: 'https://images.pexels.com/photos/29435755/pexels-photo-29435755.jpeg',
      duration: '5 Days',
      groupSize: '4-8 People',
      price: '$2,200',
      rating: 4.9,
      location: 'Samburu',
      highlights: ['Rare Species', 'Cultural Immersion', 'River Crossings'],
    },
  ];



  return (
    <div className="min-h-screen">
      {/* Hero Carousel Section */}
      <HeroCarousel
        onExploreClick={() => document.getElementById('safaris')?.scrollIntoView({ behavior: 'smooth' })}
        onLearnMoreClick={() => setSelectedSafari({ type: 'learn-more' })}
      />


      {/* Featured Safaris Section */}
      <section id="safaris" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-safari-brown mb-4">
              Featured Safari Packages
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our carefully curated safari experiences designed to showcase Africa's incredible wildlife.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredSafaris.map((safari) => (
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
                    {safari.highlights.map((highlight) => (
                      <Badge key={highlight} variant="secondary" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-safari-green">{safari.price}</span>
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
        </div>
      </section>

      {/* Beach Safaris Section */}
      <section className="py-16 bg-safari-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-safari-brown mb-4">
              Sandy Beaches & Coastal Adventures
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Extend your safari adventure with relaxing beach experiences along Kenya's stunning coastline.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Diani Beach Getaway */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img
                  src="https://images.pexels.com/photos/1457812/pexels-photo-1457812.jpeg"
                  alt="Diani Beach Getaway"
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-safari-orange text-white">
                  Diani, Mombasa
                </Badge>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl text-safari-brown">Diani Beach Getaway</CardTitle>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-safari-orange text-safari-orange" />
                    <span className="text-sm text-gray-600">4.8</span>
                  </div>
                </div>
                <CardDescription className="text-gray-600">
                  Relax on pristine white sand beaches with crystal clear waters and swaying palm trees.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    3 Days
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    Diani, Mombasa
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="text-xs">White Sand Beaches</Badge>
                  <Badge variant="secondary" className="text-xs">Snorkeling</Badge>
                  <Badge variant="secondary" className="text-xs">Beach Resort</Badge>
                  <Badge variant="secondary" className="text-xs">Sunset Cruises</Badge>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-safari-green">From $890</span>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-safari-green border-safari-green hover:bg-safari-green hover:text-white"
                      onClick={() => setSelectedSafari({
                        id: 'diani',
                        title: 'Diani Beach Getaway',
                        description: 'Relax on pristine white sand beaches with crystal clear waters and swaying palm trees.',
                        image: 'https://images.pexels.com/photos/1457812/pexels-photo-1457812.jpeg',
                        duration: '3 Days',
                        groupSize: '2-8 People',
                        price: 'From $890',
                        rating: 4.8,
                        location: 'Diani, Mombasa',
                        highlights: ['White Sand Beaches', 'Snorkeling', 'Beach Resort', 'Sunset Cruises']
                      })}
                    >
                      View Details
                    </Button>
                    <Button
                      className="bg-safari-green hover:bg-safari-green/90 text-white"
                      size="sm"
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Watamu Marine Park */}
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img
                  src="https://images.pexels.com/photos/10303313/pexels-photo-10303313.jpeg"
                  alt="Watamu Marine Park"
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-safari-orange text-white">
                  Watamu
                </Badge>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl text-safari-brown">Watamu Marine Park</CardTitle>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-safari-orange text-safari-orange" />
                    <span className="text-sm text-gray-600">4.7</span>
                  </div>
                </div>
                <CardDescription className="text-gray-600">
                  Explore vibrant coral reefs and enjoy water sports in this UNESCO World Heritage marine park.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="h-4 w-4 mr-2" />
                    4 Days
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-2" />
                    Watamu
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge variant="secondary" className="text-xs">Coral Reefs</Badge>
                  <Badge variant="secondary" className="text-xs">Diving</Badge>
                  <Badge variant="secondary" className="text-xs">Marine Life</Badge>
                  <Badge variant="secondary" className="text-xs">Cultural Tours</Badge>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-safari-green">From $1,200</span>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-safari-green border-safari-green hover:bg-safari-green hover:text-white"
                      onClick={() => setSelectedSafari({
                        id: 'watamu',
                        title: 'Watamu Marine Park',
                        description: 'Explore vibrant coral reefs and enjoy water sports in this UNESCO World Heritage marine park.',
                        image: 'https://images.pexels.com/photos/10303313/pexels-photo-10303313.jpeg',
                        duration: '4 Days',
                        groupSize: '2-10 People',
                        price: 'From $1,200',
                        rating: 4.7,
                        location: 'Watamu',
                        highlights: ['Coral Reefs', 'Diving', 'Marine Life', 'Cultural Tours']
                      })}
                    >
                      View Details
                    </Button>
                    <Button
                      className="bg-safari-green hover:bg-safari-green/90 text-white"
                      size="sm"
                    >
                      Book Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="border-safari-green text-safari-green hover:bg-safari-green hover:text-white px-8 py-3 text-lg font-semibold"
              onClick={() => navigate('/safaris')}
            >
              View All Safari Destinations
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-safari-green text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready for Your African Adventure?
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Join thousands of travelers who have experienced the magic of Kenya with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-safari-green hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
              onClick={() => navigate('/contact')}
            >
              Book Your Safari
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-safari-green px-8 py-4 text-lg font-semibold"
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </Button>
          </div>
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

export default Index;
