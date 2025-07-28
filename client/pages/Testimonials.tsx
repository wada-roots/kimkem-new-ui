import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Star, Quote, Users, Calendar, MapPin } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Michael Johnson',
      location: 'New York, USA',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg',
      rating: 5,
      date: '2024-06-15',
      safari: 'Masai Mara Classic Safari',
      review: 'Absolutely incredible experience! Our guide David was phenomenal - his knowledge of wildlife and passion for conservation was inspiring. We saw the Big Five and witnessed the Great Migration. KimKen Safaris exceeded all our expectations.',
      highlight: 'Best wildlife guide ever!'
    },
    {
      id: 2,
      name: 'Sarah Williams',
      location: 'London, UK',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      rating: 5,
      date: '2024-06-08',
      safari: 'Amboseli Elephant Paradise',
      review: 'The elephants in Amboseli were breathtaking, especially with Mount Kilimanjaro in the background. The accommodation was luxurious and the entire team was professional. Already planning our next safari with KimKen!',
      highlight: 'Luxury meets adventure'
    },
    {
      id: 3,
      name: 'Hans Mueller',
      location: 'Berlin, Germany',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg',
      rating: 5,
      date: '2024-05-20',
      safari: 'Samburu Adventure',
      review: 'As a wildlife photographer, I was impressed by how KimKen positioned our vehicle for the best shots. The unique species in Samburu and the cultural experience with the local community made this trip unforgettable.',
      highlight: 'Perfect for photography'
    },
    {
      id: 4,
      name: 'Jennifer Chen',
      location: 'Sydney, Australia',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      rating: 5,
      date: '2024-05-12',
      safari: 'Ultimate Kenya Safari',
      review: 'The 10-day ultimate safari was worth every penny. We visited multiple parks, saw incredible wildlife, and learned so much about conservation efforts. The guides were knowledgeable and the logistics were flawless.',
      highlight: 'Comprehensive and educational'
    },
    {
      id: 5,
      name: 'Roberto Silva',
      location: 'São Paulo, Brazil',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg',
      rating: 5,
      date: '2024-04-28',
      safari: 'Tsavo East & West Explorer',
      review: 'Tsavo\'s red elephants were amazing to see. The park is massive and we felt like we had it to ourselves. Great value for money and excellent service throughout. KimKen really knows their stuff!',
      highlight: 'Excellent value and service'
    },
    {
      id: 6,
      name: 'Emma Thompson',
      location: 'Toronto, Canada',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      rating: 5,
      date: '2024-04-15',
      safari: 'Lake Nakuru Flamingo Spectacle',
      review: 'The pink flamingos at Lake Nakuru were a sight to behold! Even though it was a shorter safari, it was packed with wildlife viewing. Perfect for families and the kids loved every moment.',
      highlight: 'Great for families'
    }
  ];

  const stats = [
    { number: '98%', label: 'Customer Satisfaction' },
    { number: '5.0', label: 'Average Rating' },
    { number: '2,500+', label: 'Happy Guests' },
    { number: '95%', label: 'Return Customers' },
  ];

  const awards = [
    {
      title: 'TripAdvisor Certificate of Excellence',
      year: '2023',
      description: 'Recognized for consistently excellent reviews'
    },
    {
      title: 'Kenya Tourism Board Award',
      year: '2022',
      description: 'Outstanding contribution to sustainable tourism'
    },
    {
      title: 'Safari Guide Excellence Award',
      year: '2023',
      description: 'Best safari guiding team in East Africa'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`h-4 w-4 ${i < rating ? 'fill-safari-orange text-safari-orange' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-to-r from-safari-green to-safari-brown flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">What Our Guests Say</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Real experiences from travelers who've explored Kenya's wilderness with us
          </p>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-safari-brown mb-4">Our Track Record</h2>
            <p className="text-lg text-gray-600">
              Numbers that speak for themselves
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-safari-green mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-16 bg-safari-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="overflow-hidden shadow-xl bg-white">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Quote className="h-12 w-12 text-safari-orange mr-4" />
                <div>
                  <h3 className="text-xl font-bold text-safari-brown">Featured Review</h3>
                  <div className="flex items-center mt-1">
                    {renderStars(5)}
                  </div>
                </div>
              </div>
              
              <blockquote className="text-xl text-gray-700 italic mb-6">
                "{testimonials[0].review}"
              </blockquote>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img 
                    src={testimonials[0].image} 
                    alt={testimonials[0].name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-safari-brown">{testimonials[0].name}</div>
                    <div className="text-sm text-gray-600">{testimonials[0].location}</div>
                  </div>
                </div>
                <Badge className="bg-safari-green text-white">
                  {testimonials[0].safari}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-safari-brown mb-4">More Guest Experiences</h2>
            <p className="text-lg text-gray-600">
              Discover why travelers choose KimKen Safaris for their African adventure
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(1).map((testimonial) => (
              <Card key={testimonial.id} className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-10 h-10 rounded-full object-cover mr-3"
                      />
                      <div>
                        <div className="font-semibold text-safari-brown text-sm">{testimonial.name}</div>
                        <div className="text-xs text-gray-600">{testimonial.location}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  
                  <Badge variant="secondary" className="w-fit text-xs">
                    {testimonial.highlight}
                  </Badge>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-600 mb-4 text-sm">
                    "{testimonial.review}"
                  </p>
                  
                  <div className="space-y-2 text-xs text-gray-500">
                    <div className="flex items-center">
                      <MapPin className="h-3 w-3 mr-1" />
                      {testimonial.safari}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      {new Date(testimonial.date).toLocaleDateString()}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-safari-brown mb-4">Awards & Recognition</h2>
            <p className="text-lg text-gray-600">
              Industry recognition for our commitment to excellence
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <Card key={index} className="text-center shadow-lg">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-safari-orange rounded-full flex items-center justify-center text-white mb-4">
                    <Star className="h-8 w-8 fill-current" />
                  </div>
                  <CardTitle className="text-lg text-safari-brown">{award.title}</CardTitle>
                  <CardDescription className="text-safari-green font-medium">
                    {award.year}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{award.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-safari-brown mb-6">Video Testimonials</h2>
          <p className="text-lg text-gray-600 mb-8">
            Hear directly from our guests about their safari experiences
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="overflow-hidden">
              <div className="relative h-48 bg-gray-200 flex items-center justify-center">
                <Button className="bg-safari-green hover:bg-safari-green/90 text-white rounded-full w-16 h-16">
                  ▶
                </Button>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-safari-brown">Family Safari Experience</h3>
                <p className="text-sm text-gray-600">The Johnson Family shares their Masai Mara adventure</p>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden">
              <div className="relative h-48 bg-gray-200 flex items-center justify-center">
                <Button className="bg-safari-green hover:bg-safari-green/90 text-white rounded-full w-16 h-16">
                  ▶
                </Button>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-safari-brown">Photography Safari</h3>
                <p className="text-sm text-gray-600">Professional photographer's review of our services</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-safari-green text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Create Your Own Story?</h2>
          <p className="text-xl mb-8 text-green-100">
            Join thousands of satisfied guests who have experienced the magic of Kenya with us.
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
              Share Your Review
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
