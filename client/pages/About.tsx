import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Users, Heart, Award, Target, Eye, Globe } from 'lucide-react';

const About = () => {
  const stats = [
    { number: '10+', label: 'Years Experience' },
    { number: '5000+', label: 'Happy Clients' },
    { number: '50+', label: 'Safari Destinations' },
    { number: '25+', label: 'Expert Guides' },
  ];

  const team = [
    {
      name: 'James Kimani',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg',
      bio: 'With over 20 years in the safari industry, James founded KimKen Safaris to share Kenya\'s incredible wildlife with the world.',
      experience: '20+ Years'
    },
    {
      name: 'Sarah Wanjiku',
      role: 'Head of Operations',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      bio: 'Sarah ensures every safari runs smoothly, coordinating logistics and maintaining our high service standards.',
      experience: '15+ Years'
    },
    {
      name: 'David Mwangi',
      role: 'Chief Guide',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg',
      bio: 'A wildlife expert and photographer, David leads our most exclusive safaris and trains our guide team.',
      experience: '18+ Years'
    },
    {
      name: 'Grace Akinyi',
      role: 'Conservation Manager',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      bio: 'Grace oversees our conservation initiatives and community partnerships across Kenya.',
      experience: '12+ Years'
    }
  ];

  const values = [
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Conservation First',
      description: 'We prioritize wildlife conservation and sustainable tourism practices in everything we do.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Community Focus',
      description: 'Supporting local communities through employment, education, and community development projects.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Excellence',
      description: 'Delivering exceptional safari experiences that exceed our guests\' expectations every time.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-safari-green to-safari-brown flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/8341088/pexels-photo-8341088.jpeg)',
          }}
        />
        <div className="relative text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About KimKen Safaris</h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Passionate about wildlife. Committed to conservation. Dedicated to creating unforgettable memories.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-safari-brown mb-6">Our Story</h2>
            <div className="prose prose-lg text-gray-600 max-w-none">
              <p className="text-lg mb-6">
                Founded in 2010 by James Kimani, KimKen Safaris began as a dream to share Kenya's incredible 
                wildlife heritage with travelers from around the world. Having grown up in a Maasai community 
                near the Maasai Mara, James witnessed firsthand both the wonder of Kenya's wildlife and the 
                challenges facing local communities.
              </p>
              <p className="text-lg mb-6">
                What started as a small operation with a single vehicle has grown into one of Kenya's most 
                respected safari companies. We've guided thousands of visitors through Kenya's national parks 
                and conservancies, always with a focus on responsible tourism that benefits both wildlife 
                and local communities.
              </p>
              <p className="text-lg">
                Today, KimKen Safaris operates throughout Kenya, offering everything from intimate family 
                safaris to large group adventures. Our success is measured not just in happy clients, but 
                in the positive impact we've made on conservation efforts and community development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-safari-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="text-center border-0 shadow-lg bg-white">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-safari-green rounded-full flex items-center justify-center text-white mb-4">
                  <Target className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl text-safari-brown">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-lg">
                  To provide exceptional safari experiences that inspire a deep appreciation for Kenya's 
                  wildlife while supporting conservation efforts and empowering local communities through 
                  sustainable tourism practices.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg bg-white">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-safari-orange rounded-full flex items-center justify-center text-white mb-4">
                  <Eye className="h-8 w-8" />
                </div>
                <CardTitle className="text-2xl text-safari-brown">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-lg">
                  To be East Africa's leading sustainable safari operator, setting the standard for 
                  responsible wildlife tourism that protects Kenya's natural heritage for future 
                  generations while creating lasting positive impact.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-safari-green text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-green-100">
              Over a decade of making a difference in Kenya's tourism and conservation
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-safari-orange mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-green-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-safari-brown mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These values guide every decision we make and every safari we conduct
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-safari-green rounded-full flex items-center justify-center text-white mb-4">
                    {value.icon}
                  </div>
                  <CardTitle className="text-xl text-safari-brown">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-safari-brown mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">
              The passionate people who make your safari dreams come true
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center overflow-hidden shadow-lg">
                <div className="relative h-48">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute bottom-2 right-2 bg-safari-orange text-white text-xs">
                    {member.experience}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg text-safari-brown">{member.name}</CardTitle>
                  <CardDescription className="text-safari-green font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Conservation Efforts */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-safari-brown mb-6">Our Conservation Commitment</h2>
          <div className="text-left space-y-6 text-gray-600">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-safari-brown mb-4">Wildlife Protection</h3>
                <ul className="space-y-2">
                  <li>• Support anti-poaching units in partner conservancies</li>
                  <li>• Fund wildlife research and monitoring programs</li>
                  <li>• Contribute to habitat restoration projects</li>
                  <li>• Partner with Kenya Wildlife Service initiatives</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-safari-brown mb-4">Community Development</h3>
                <ul className="space-y-2">
                  <li>• Education scholarships for local children</li>
                  <li>• Healthcare support for rural communities</li>
                  <li>• Training programs for local guides</li>
                  <li>• Women's empowerment initiatives</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-safari-green text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-4">Join Our Conservation Mission</h2>
          <p className="text-xl mb-8 text-green-100">
            Every safari with us contributes to wildlife conservation and community development.
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
              Learn About Our Projects
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
