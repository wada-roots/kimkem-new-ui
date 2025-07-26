import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    travelDates: '',
    groupSize: '',
    interest: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      details: ['+254 700 123 456', '+254 700 789 012'],
      action: 'Call Us'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      details: ['info@kimkemsafaris.com', 'bookings@kimkemsafaris.com'],
      action: 'Email Us'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Office',
      details: ['Kimathi Street, Nairobi', 'Kenya, East Africa'],
      action: 'Visit Us'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Hours',
      details: ['Mon - Fri: 8:00 AM - 5:00 PM', 'Sat: 9:00 AM - 2:00 PM'],
      action: 'Open Now'
    }
  ];

  const offices = [
    {
      city: 'Nairobi (Head Office)',
      address: 'Kimathi Street, CBD',
      phone: '+254 700 123 456',
      email: 'nairobi@kimkemsafaris.com'
    },
    {
      city: 'Mombasa',
      address: 'Moi Avenue, Mombasa',
      phone: '+254 700 234 567',
      email: 'mombasa@kimkemsafaris.com'
    },
    {
      city: 'Maasai Mara',
      address: 'Talek Gate, Maasai Mara',
      phone: '+254 700 345 678',
      email: 'masaimara@kimkemsafaris.com'
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your inquiry! We will get back to you within 24 hours.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-to-r from-safari-green to-safari-brown flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Let's plan your perfect Kenyan safari adventure together
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-safari-brown mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600">
              We're here to help you plan the safari of your dreams
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-safari-green rounded-full flex items-center justify-center text-white mb-4">
                    {info.icon}
                  </div>
                  <CardTitle className="text-lg text-safari-brown">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1 mb-4">
                    {info.details.map((detail, i) => (
                      <p key={i} className="text-gray-600 text-sm">{detail}</p>
                    ))}
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="text-safari-green border-safari-green hover:bg-safari-green hover:text-white"
                  >
                    {info.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl text-safari-brown">Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <Input
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Country
                      </label>
                      <Input
                        value={formData.country}
                        onChange={(e) => handleInputChange('country', e.target.value)}
                        placeholder="Your country"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Travel Dates
                      </label>
                      <Input
                        value={formData.travelDates}
                        onChange={(e) => handleInputChange('travelDates', e.target.value)}
                        placeholder="e.g., July 2024"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Group Size
                      </label>
                      <Select onValueChange={(value) => handleInputChange('groupSize', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select group size" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1-2">1-2 People</SelectItem>
                          <SelectItem value="3-4">3-4 People</SelectItem>
                          <SelectItem value="5-8">5-8 People</SelectItem>
                          <SelectItem value="9+">9+ People</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Safari Interest
                    </label>
                    <Select onValueChange={(value) => handleInputChange('interest', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="What interests you most?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="masai-mara">Masai Mara Safari</SelectItem>
                        <SelectItem value="amboseli">Amboseli Safari</SelectItem>
                        <SelectItem value="samburu">Samburu Safari</SelectItem>
                        <SelectItem value="tsavo">Tsavo Safari</SelectItem>
                        <SelectItem value="multi-park">Multi-Park Safari</SelectItem>
                        <SelectItem value="custom">Custom Safari</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <Textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your safari dreams, special requirements, or any questions you have..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-safari-green hover:bg-safari-green/90 text-white py-3"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map & Office Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl text-safari-brown">Find Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center text-gray-500">
                      <MapPin className="h-12 w-12 mx-auto mb-2" />
                      <p>Interactive Map</p>
                      <p className="text-sm">Kimathi Street, Nairobi CBD</p>
                    </div>
                  </div>
                  <Button className="w-full bg-safari-green hover:bg-safari-green/90 text-white">
                    <MapPin className="h-4 w-4 mr-2" />
                    Open in Google Maps
                  </Button>
                </CardContent>
              </Card>

              {/* Office Locations */}
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl text-safari-brown">Our Offices</CardTitle>
                  <CardDescription>Visit us at any of our convenient locations</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {offices.map((office, index) => (
                      <div key={index} className="border-l-4 border-safari-green pl-4">
                        <h4 className="font-semibold text-safari-brown">{office.city}</h4>
                        <p className="text-sm text-gray-600">{office.address}</p>
                        <p className="text-sm text-gray-600">{office.phone}</p>
                        <p className="text-sm text-safari-green">{office.email}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Card className="bg-safari-orange text-white shadow-xl">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">24/7 Emergency Support</h2>
              <p className="text-lg mb-6">
                For urgent matters while on safari, our emergency support team is available round the clock
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-white text-safari-orange hover:bg-gray-100"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  +254 700 EMERGENCY
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-safari-orange"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp Support
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-safari-brown mb-4">Quick Information</h2>
            <p className="text-lg text-gray-600">
              Common questions and helpful resources
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="text-center border-safari-green/20 hover:border-safari-green transition-colors">
              <CardHeader>
                <CardTitle className="text-safari-brown">Booking Process</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 text-sm">
                  Learn about our simple 3-step booking process and payment options
                </p>
                <Button variant="outline" className="text-safari-green border-safari-green">
                  Learn More
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center border-safari-green/20 hover:border-safari-green transition-colors">
              <CardHeader>
                <CardTitle className="text-safari-brown">Travel Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 text-sm">
                  Visa requirements, vaccinations, and what to pack for your safari
                </p>
                <Button variant="outline" className="text-safari-green border-safari-green">
                  View Checklist
                </Button>
              </CardContent>
            </Card>
            
            <Card className="text-center border-safari-green/20 hover:border-safari-green transition-colors">
              <CardHeader>
                <CardTitle className="text-safari-brown">Safari Packages</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 text-sm">
                  Explore our range of safari packages and find the perfect adventure
                </p>
                <Button variant="outline" className="text-safari-green border-safari-green">
                  Browse Safaris
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
