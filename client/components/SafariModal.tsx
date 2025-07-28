import { X, Star, Clock, Users, MapPin, Camera, Wifi, Car, Utensils } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface SafariModalProps {
  safari: any;
  onClose: () => void;
}

const SafariModal = ({ safari, onClose }: SafariModalProps) => {
  if (safari.type === 'learn-more') {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-safari-brown">About KimKen Safaris</h2>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full">
                <X className="h-5 w-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-600">
                KimKen Safaris is Kenya's premier safari operator, specializing in luxury wildlife experiences 
                that combine adventure with conservation. Founded in 2010, we have been creating unforgettable 
                memories for travelers from around the world.
              </p>
              
              <h3 className="text-lg font-semibold text-safari-brown">Our Mission</h3>
              <p className="text-gray-600">
                To provide authentic, sustainable safari experiences while supporting local communities 
                and wildlife conservation efforts across Kenya's national parks and conservancies.
              </p>
              
              <h3 className="text-lg font-semibold text-safari-brown">What Sets Us Apart</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Expert local guides with 15+ years of experience</li>
                <li>Small group sizes for personalized experiences</li>
                <li>Luxury eco-friendly accommodations</li>
                <li>Direct partnerships with local conservancies</li>
                <li>24/7 support throughout your journey</li>
              </ul>
              
              <div className="flex gap-3 pt-4">
                <Button className="bg-safari-green hover:bg-safari-green/90 text-white">
                  Contact Us
                </Button>
                <Button variant="outline" onClick={onClose}>
                  Close
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const amenities = [
    { icon: <Camera className="h-4 w-4" />, name: 'Photography Tours' },
    { icon: <Wifi className="h-4 w-4" />, name: 'Wi-Fi Available' },
    { icon: <Car className="h-4 w-4" />, name: 'Transport Included' },
    { icon: <Utensils className="h-4 w-4" />, name: 'All Meals' },
  ];

  const itinerary = [
    { day: 1, title: 'Arrival & Game Drive', description: 'Airport pickup, check-in, and afternoon game drive' },
    { day: 2, title: 'Full Day Safari', description: 'Early morning and evening game drives with cultural visit' },
    { day: 3, title: 'Wildlife Photography', description: 'Specialized photography session and departure' },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img 
            src={safari.image} 
            alt={safari.title}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 bg-white/80 p-2 rounded-full hover:bg-white"
          >
            <X className="h-5 w-5" />
          </button>
          <Badge className="absolute top-4 left-4 bg-safari-orange text-white">
            {safari.location}
          </Badge>
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-3xl font-bold text-safari-brown">{safari.title}</h2>
            <div className="flex items-center space-x-1">
              <Star className="h-5 w-5 fill-safari-orange text-safari-orange" />
              <span className="text-lg font-semibold text-safari-brown">{safari.rating}</span>
            </div>
          </div>
          
          <p className="text-gray-600 mb-6">{safari.description}</p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="text-lg font-semibold text-safari-brown mb-3">Safari Details</h3>
              <div className="space-y-3">
                <div className="flex items-center text-gray-600">
                  <Clock className="h-5 w-5 mr-3 text-safari-green" />
                  <span>{safari.duration}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Users className="h-5 w-5 mr-3 text-safari-green" />
                  <span>{safari.groupSize}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="h-5 w-5 mr-3 text-safari-green" />
                  <span>{safari.location} National Park</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-safari-brown mb-3">Included Amenities</h3>
              <div className="grid grid-cols-2 gap-2">
                {amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-600">
                    <span className="text-safari-green mr-2">{amenity.icon}</span>
                    {amenity.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-safari-brown mb-3">Highlights</h3>
            <div className="flex flex-wrap gap-2">
              {safari.highlights.map((highlight: string) => (
                <Badge key={highlight} variant="secondary" className="bg-safari-beige text-safari-brown">
                  {highlight}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-safari-brown mb-3">Sample Itinerary</h3>
            <div className="space-y-3">
              {itinerary.map((item) => (
                <div key={item.day} className="flex">
                  <div className="flex-shrink-0 w-16 h-16 bg-safari-green rounded-full flex items-center justify-center text-white font-bold mr-4">
                    Day {item.day}
                  </div>
                  <div>
                    <h4 className="font-semibold text-safari-brown">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-between pt-6 border-t">
            <div>
              <span className="text-sm text-gray-600">Starting from</span>
              <div className="text-3xl font-bold text-safari-green">{safari.price}</div>
              <span className="text-sm text-gray-600">per person</span>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" onClick={onClose}>
                Close
              </Button>
              <Button className="bg-safari-green hover:bg-safari-green/90 text-white px-8">
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafariModal;
