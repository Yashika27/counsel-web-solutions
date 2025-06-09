
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-playfair font-bold text-gold mb-4">
              Sterling & Associates
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Providing exceptional legal services for over 25 years. Our experienced team 
              is dedicated to achieving the best possible outcomes for our clients.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-gold mr-3" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-gold mr-3" />
                <span>contact@sterlinglaw.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-gold mr-3" />
                <span>123 Legal Street, Suite 500, City, ST 12345</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-gold mr-3" />
                <span>Mon-Fri: 9AM-6PM, Sat: 10AM-2PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-gold transition-colors">About Us</Link></li>
              <li><Link to="/practice-areas" className="text-gray-300 hover:text-gold transition-colors">Practice Areas</Link></li>
              <li><Link to="/team" className="text-gray-300 hover:text-gold transition-colors">Our Team</Link></li>
              <li><Link to="/success-stories" className="text-gray-300 hover:text-gold transition-colors">Success Stories</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-gold transition-colors">Legal Insights</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-gold transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="text-lg font-semibold text-gold mb-4">Practice Areas</h4>
            <ul className="space-y-2">
              <li><Link to="/practice-areas/corporate-law" className="text-gray-300 hover:text-gold transition-colors">Corporate Law</Link></li>
              <li><Link to="/practice-areas/litigation" className="text-gray-300 hover:text-gold transition-colors">Litigation</Link></li>
              <li><Link to="/practice-areas/intellectual-property" className="text-gray-300 hover:text-gold transition-colors">Intellectual Property</Link></li>
              <li><Link to="/practice-areas/employment-law" className="text-gray-300 hover:text-gold transition-colors">Employment Law</Link></li>
              <li><Link to="/practice-areas/real-estate" className="text-gray-300 hover:text-gold transition-colors">Real Estate</Link></li>
              <li><Link to="/practice-areas/family-law" className="text-gray-300 hover:text-gold transition-colors">Family Law</Link></li>
            </ul>
          </div>
        </div>

        <div className="py-6 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Sterling & Associates. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-gold text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-gold text-sm transition-colors">
                Terms of Service
              </Link>
              <Link to="/disclaimer" className="text-gray-400 hover:text-gold text-sm transition-colors">
                Legal Disclaimer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
