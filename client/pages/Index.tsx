import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Clock, Users, MapPin, Camera, Heart, Award, ChevronDown } from 'lucide-react';
import SafariModal from '@/components/SafariModal';

const Index = () => {
  const [selectedSafari, setSelectedSafari] = useState<any>(null);

  const featuredSafaris = [
    {
      id: 1,
      title: 'Masai Mara Classic Safari',
      description: 'Experience the Great Migration and witness millions of wildebeest crossing the Mara River.',
      image: '/placeholder.svg',
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
      image: '/placeholder.svg',
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
      image: '/placeholder.svg',
      duration: '5 Days',
      groupSize: '4-8 People',
      price: '$2,200',
      rating: 4.9,
      location: 'Samburu',
      highlights: ['Rare Species', 'Cultural Immersion', 'River Crossings'],
    },
  ];

  const features = [
    {
      icon: <Award className="h-6 w-6" />,
      title: 'Award Winning',
      description: 'Recognized for excellence in safari experiences',
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Expert Guides',
      description: 'Professional guides with decades of experience',
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: 'Conservation Focus',
      description: 'Supporting wildlife conservation and local communities',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-black/60 to-black/40">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/placeholder.svg)',
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-safari-orange">Lifetime</span>
            <br />
            <span className="text-white">Safari Adventures</span>
            <br />
            <span className="text-white">Await You</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Experience the magic of Africa's wilderness in luxury tented camps. 
            Create memories that will last a lifetime in Kenya's most spectacular landscapes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-safari-green hover:bg-safari-green/90 text-white px-8 py-4 text-lg font-semibold rounded-lg"
              onClick={() => document.getElementById('safaris')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Safaris
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold rounded-lg"
              onClick={() => setSelectedSafari({ type: 'learn-more' })}
            >
              Learn More
            </Button>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white" />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-safari-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-safari-brown mb-4">
              Why Choose KimKem Safaris?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to providing unforgettable safari experiences while supporting conservation efforts.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-lg bg-white">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-safari-green rounded-full flex items-center justify-center text-white mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl text-safari-brown">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
            >
              Book Your Safari
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-safari-green px-8 py-4 text-lg font-semibold"
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
