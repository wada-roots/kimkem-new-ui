import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Safaris', path: '/safaris' },
    { name: 'Our Fleet', path: '/fleet' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const safariDestinations = [
    'Masai Mara',
    'Amboseli',
    'Samburu',
    'Tsavo East & West',
    'Lake Nakuru',
    'Diani Beach',
  ];

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, href: '#', name: 'Facebook' },
    { icon: <Twitter className="h-5 w-5" />, href: '#', name: 'Twitter' },
    { icon: <Instagram className="h-5 w-5" />, href: '#', name: 'Instagram' },
    { icon: <Youtube className="h-5 w-5" />, href: '#', name: 'YouTube' },
  ];

  return (
    <footer className="bg-safari-brown text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-safari-orange rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">KS</span>
              </div>
              <span className="text-lg font-bold">KIMKEN SAFARIS</span>
            </div>
            <p className="text-gray-300 mb-4 text-sm">
              Experience the magic of Africa's wilderness with Kenya's premier safari operator. 
              Creating unforgettable memories since 2010.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-safari-orange" />
                <span>+254 700 123 456</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-safari-orange" />
                <span>info@kimkensafaris.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-safari-orange" />
                <span>Nairobi, Kenya</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-safari-orange transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Safari Destinations */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Safari Destinations</h3>
            <ul className="space-y-2">
              {safariDestinations.map((destination) => (
                <li key={destination}>
                  <Link
                    to="/safaris"
                    className="text-gray-300 hover:text-safari-orange transition-colors text-sm"
                  >
                    {destination}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
            <p className="text-gray-300 text-sm mb-4">
              Follow us for safari updates and wildlife photography
            </p>
            <div className="flex space-x-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="bg-safari-orange hover:bg-safari-orange/80 p-2 rounded-full transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <div className="text-sm">
              <h4 className="font-semibold mb-2">Certifications</h4>
              <p className="text-gray-300 text-xs">
                Licensed by Kenya Tourism Board<br />
                Member of Kenya Association of Tour Operators
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-safari-brown/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm">
            <div className="text-gray-300 mb-4 md:mb-0">
              © {currentYear} KimKen Safaris. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link
                to="/privacy"
                className="text-gray-300 hover:text-safari-orange transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-300 hover:text-safari-orange transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-safari-orange transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
