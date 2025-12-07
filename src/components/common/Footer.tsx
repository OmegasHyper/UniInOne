import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Separator } from '../ui/separator';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Globe,
  Send,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = () => {
    // Clear previous errors
    setError('');
    
    // Check if email is empty
    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }

    // Validate email format
    if (!validateEmail(email.trim())) {
      setError('Please enter a valid email address');
      return;
    }

    // If validation passes, proceed with subscription
    // Reset the input field
    setEmail('');
    // Show success message
    setShowSuccess(true);
    // Hide success message after 3 seconds
    setTimeout(() => {
      setShowSuccess(false);
    }, 3000);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    // Clear error when user starts typing
    if (error) {
      setError('');
    }
  };

  // Scroll to top of page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const quickLinks = [
    { label: 'Universities', href: '/universities' },
    { label: 'Faculties', href: '/faculties' },
    { label: 'Compare', href: '/compare' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' }
  ];

  const resources = [
    { label: 'Application Guide', href: '/about' },
    { label: 'Universities', href: '/universities' },
    { label: 'Faculties', href: '/faculties' },
    { label: 'Compare Universities', href: '/compare' }
  ];

  const support = [
    { label: 'Contact Us', href: '/contact' },
    { label: 'About Us', href: '/about' },
    { label: 'Privacy Policy', href: '/about' },
    { label: 'Terms of Service', href: '/about' }
  ];

  const socialMediaLinks = {
    facebook: 'https://www.facebook.com',
    twitter: 'https://www.twitter.com',
    instagram: 'https://www.instagram.com',
    linkedin: 'https://www.linkedin.com'
  };

  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-900 to-emerald-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Get the latest news about university admissions, deadlines, and opportunities delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto">
              <div className="flex gap-3">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={handleEmailChange}
                    onKeyDown={(e) => e.key === 'Enter' && handleSubscribe()}
                    className={`bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:border-white ${
                      error ? 'border-red-400 focus:border-red-400' : ''
                    }`}
                  />
                </div>
                <Button 
                  onClick={handleSubscribe}
                  className="bg-white text-blue-900 hover:bg-white/90 flex-shrink-0"
                  style={{ cursor: 'pointer' }}
                >
                  <Send className="h-4 w-4 mr-2" />
                  Subscribe
                </Button>
              </div>
              {error && (
                <div className="mt-3 flex items-center justify-center gap-2 text-red-200 text-sm animate-in fade-in slide-in-from-top-2 duration-300">
                  <AlertCircle className="h-4 w-4" />
                  <span>{error}</span>
                </div>
              )}
              {showSuccess && (
                <div className="mt-3 flex items-center justify-center gap-2 text-white text-sm animate-in fade-in slide-in-from-top-2 duration-300">
                  <CheckCircle className="h-4 w-4 text-green-300" />
                  <span>Successfully subscribed! Thank you.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-lg">U</span>
                </div>
                <span className="text-xl font-bold">UniInOne</span>
              </div>
              <p className="text-gray-300 mb-6 max-w-md">
                Your comprehensive gateway to Egyptian universities. We help students make informed decisions 
                about their academic future by providing detailed information about universities, programs, 
                and career opportunities.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="h-4 w-4 text-blue-400" />
                  <span>Cairo, Egypt</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="h-4 w-4 text-blue-400" />
                  <span>+20 2 1234 5678</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="h-4 w-4 text-blue-400" />
                  <span>info@uniinone.com</span>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex space-x-4">
                <a
                  href={socialMediaLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="cursor-pointer"
                >
                  <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:text-white hover:border-white" style={{ cursor: 'pointer' }}>
                    <Facebook className="h-4 w-4" />
                  </Button>
                </a>
                <a
                  href={socialMediaLinks.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  style={{ cursor: 'pointer' }}
                >
                  <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:text-white hover:border-white" style={{ cursor: 'pointer' }}>
                    <Twitter className="h-4 w-4" />
                  </Button>
                </a>
                <a
                  href={socialMediaLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  style={{ cursor: 'pointer' }}
                >
                  <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:text-white hover:border-white" style={{ cursor: 'pointer' }}>
                    <Instagram className="h-4 w-4" />
                  </Button>
                </a>
                <a
                  href={socialMediaLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  style={{ cursor: 'pointer' }}
                >
                  <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:text-white hover:border-white" style={{ cursor: 'pointer' }}>
                    <Linkedin className="h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      onClick={scrollToTop}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                      style={{ cursor: 'pointer' }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                {resources.map((resource, index) => (
                  <li key={index}>
                    <a 
                      href={resource.href} 
                      onClick={scrollToTop}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                      style={{ cursor: 'pointer' }}
                    >
                      {resource.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2">
                {support.map((item, index) => (
                  <li key={index}>
                    <a 
                      href={item.href} 
                      onClick={scrollToTop}
                      className="text-gray-300 hover:text-white transition-colors text-sm"
                      style={{ cursor: 'pointer' }}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Separator className="bg-gray-700" />

      {/* Bottom Footer */}
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} UniInOne. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Globe className="h-4 w-4" />
                <span>Available in English & Arabic</span>
              </div>
              
              <div className="flex space-x-4 text-sm">
                <a href="/about" onClick={scrollToTop} className="text-gray-400 hover:text-white transition-colors" style={{ cursor: 'pointer' }}>
                  Privacy Policy
                </a>
                <a href="/about" onClick={scrollToTop} className="text-gray-400 hover:text-white transition-colors" style={{ cursor: 'pointer' }}>
                  Terms of Service
                </a>
                <a href="/about" onClick={scrollToTop} className="text-gray-400 hover:text-white transition-colors" style={{ cursor: 'pointer' }}>
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}