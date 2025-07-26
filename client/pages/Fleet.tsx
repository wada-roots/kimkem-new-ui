import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, Luggage, Wifi, Camera, Shield, Car } from 'lucide-react';

const Fleet = () => {
  const vehicles = [
    {
      id: 1,
      name: 'Toyota Land Cruiser 4x4',
      type: 'Safari Vehicle',
      capacity: '6-8 Passengers',
      image: 'https://images.pexels.com/photos/1370746/pexels-photo-1370746.jpeg',
      features: ['Pop-up Roof', 'Game Viewing Windows', 'Cool Box', 'Power Outlets'],
      description: 'Our flagship safari vehicle, specially modified for optimal game viewing with extended pop-up roofs.',
      specifications: {
        engine: '4.5L V8 Diesel',
        transmission: 'Automatic',
        fuelCapacity: '138L',
        airConditioning: 'Yes'
      }
    },
    {
      id: 2,
      name: 'Toyota Hiace Safari Van',
      type: 'Group Vehicle',
      capacity: '12-14 Passengers',
      image: 'https://images.pexels.com/photos/1370746/pexels-photo-1370746.jpeg',
      features: ['Extended Pop-up Roof', 'Individual Seating', 'Cooler', 'First Aid Kit'],
      description: 'Perfect for larger groups, offering comfort and excellent visibility for wildlife viewing.',
      specifications: {
        engine: '3.0L Diesel',
        transmission: 'Manual',
        fuelCapacity: '70L',
        airConditioning: 'Yes'
      }
    },
    {
      id: 3,
      name: 'Land Rover Defender',
      type: 'Luxury Safari',
      capacity: '4-6 Passengers',
      image: 'https://images.pexels.com/photos/1370746/pexels-photo-1370746.jpeg',
      features: ['Premium Interior', 'Advanced Sound System', 'Mini Bar', 'GPS Navigation'],
      description: 'Our premium safari vehicle for those seeking luxury and comfort during their African adventure.',
      specifications: {
        engine: '3.0L V6 Diesel',
        transmission: 'Automatic',
        fuelCapacity: '90L',
        airConditioning: 'Climate Control'
      }
    },
    {
      id: 4,
      name: 'Nissan Safari 4x4',
      type: 'Standard Safari',
      capacity: '6-7 Passengers',
      image: 'https://images.pexels.com/photos/1370746/pexels-photo-1370746.jpeg',
      features: ['Pop-up Roof', 'Comfortable Seating', 'Storage Space', 'Emergency Kit'],
      description: 'Reliable and comfortable safari vehicle perfect for experiencing Kenya\'s wildlife.',
      specifications: {
        engine: '4.2L Diesel',
        transmission: 'Manual',
        fuelCapacity: '95L',
        airConditioning: 'Yes'
      }
    }
  ];

  const fleetFeatures = [
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Safety First',
      description: 'All vehicles undergo regular safety inspections and maintenance'
    },
    {
      icon: <Camera className="h-8 w-8" />,
      title: 'Optimal Viewing',
      description: 'Pop-up roofs and large windows for the best wildlife photography'
    },
    {
      icon: <Car className="h-8 w-8" />,
      title: 'Expert Drivers',
      description: 'Professional driver-guides with extensive knowledge of Kenya\'s parks'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-to-r from-safari-green to-safari-brown flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Safari Fleet</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Modern, well-maintained vehicles designed for the ultimate safari experience
          </p>
        </div>
      </section>

      {/* Fleet Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-safari-brown mb-4">Why Our Fleet Stands Out</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Every vehicle in our fleet is specially equipped and maintained to ensure your safety and comfort.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {fleetFeatures.map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
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

      {/* Vehicle Fleet */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-safari-brown mb-4">Our Vehicle Fleet</h2>
            <p className="text-lg text-gray-600">
              Choose from our range of specially equipped safari vehicles
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {vehicles.map((vehicle) => (
              <Card key={vehicle.id} className="overflow-hidden shadow-lg">
                <div className="relative h-64">
                  <img 
                    src={vehicle.image} 
                    alt={vehicle.name}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-safari-orange text-white">
                    {vehicle.type}
                  </Badge>
                </div>
                
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xl text-safari-brown">{vehicle.name}</CardTitle>
                    <div className="flex items-center text-safari-green">
                      <Users className="h-4 w-4 mr-1" />
                      <span className="text-sm">{vehicle.capacity}</span>
                    </div>
                  </div>
                  <CardDescription className="text-gray-600">
                    {vehicle.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-safari-brown mb-2">Key Features</h4>
                      <div className="flex flex-wrap gap-2">
                        {vehicle.features.map((feature) => (
                          <Badge key={feature} variant="secondary" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* Specifications */}
                    <div>
                      <h4 className="font-semibold text-safari-brown mb-2">Specifications</h4>
                      <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
                        <div>Engine: {vehicle.specifications.engine}</div>
                        <div>Transmission: {vehicle.specifications.transmission}</div>
                        <div>Fuel: {vehicle.specifications.fuelCapacity}</div>
                        <div>AC: {vehicle.specifications.airConditioning}</div>
                      </div>
                    </div>
                    
                    <Button className="w-full bg-safari-green hover:bg-safari-green/90 text-white">
                      Request This Vehicle
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Maintenance */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-safari-brown mb-6">Safety & Maintenance</h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="text-xl font-semibold text-safari-brown mb-4">Regular Maintenance</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Daily vehicle inspections before each safari</li>
                <li>• Monthly comprehensive service checks</li>
                <li>• Certified mechanics and genuine parts</li>
                <li>• GPS tracking for safety monitoring</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-safari-brown mb-4">Safety Equipment</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• First aid kits in every vehicle</li>
                <li>• Emergency communication devices</li>
                <li>• Fire extinguishers and safety equipment</li>
                <li>• Comprehensive insurance coverage</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-safari-green text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience Our Fleet?</h2>
          <p className="text-xl mb-8 text-green-100">
            Book your safari today and travel in comfort and style through Kenya's wilderness.
          </p>
          <Button 
            size="lg" 
            className="bg-white text-safari-green hover:bg-gray-100 px-8 py-4 text-lg font-semibold"
          >
            Book Your Safari
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Fleet;
