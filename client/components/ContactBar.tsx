import { Phone, Mail, Clock, MapPin } from 'lucide-react';

const ContactBar = () => {
  return (
    <div className="bg-safari-brown text-white py-2 px-4 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="flex items-center gap-1">
            <Phone className="h-4 w-4" />
            <span>+254 700 123 456</span>
          </div>
          <div className="flex items-center gap-1">
            <Mail className="h-4 w-4" />
            <span>info@kimkensafaris.com</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>Mon - Fri: 8:00 AM - 5:00 PM</span>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <MapPin className="h-4 w-4" />
          <span>Nairobi, Kenya</span>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;
