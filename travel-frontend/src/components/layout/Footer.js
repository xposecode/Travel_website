import React from 'react';
import { Link } from 'react-router-dom';
import { FiFacebook, FiTwitter, FiInstagram, FiMail } from 'react-icons/fi';

const Footer = () => {
  // ✅ FIXED: Use buttons with aria-labels for social icons
  const SocialButton = ({ Icon, label, onClick }) => (
    <button
      onClick={onClick}
      className="text-gray-400 hover:text-white p-2 rounded-full hover:bg-gray-800 transition"
      aria-label={label}
    >
      <Icon size={20} />
    </button>
  );

  const handleNewsletter = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription');
  };

  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* ... other sections ... */}

          {/* Newsletter - FIXED */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe for travel tips and deals</p>
            <form onSubmit={handleNewsletter} className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 rounded-l-lg flex-grow text-gray-900"
                required
                aria-label="Email for newsletter"
              />
              <button 
                type="submit"
                className="bg-blue-600 px-4 py-2 rounded-r-lg hover:bg-blue-700"
                aria-label="Subscribe to newsletter"
              >
                <FiMail />
              </button>
            </form>
          </div>
        </div>

        {/* Social Links & Copyright - FIXED */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            {/* ✅ FIXED: Social media buttons */}
            <SocialButton 
              Icon={FiFacebook} 
              label="Visit our Facebook page"
              onClick={() => window.open('https://facebook.com', '_blank')}
            />
            <SocialButton 
              Icon={FiTwitter} 
              label="Visit our Twitter page"
              onClick={() => window.open('https://twitter.com', '_blank')}
            />
            <SocialButton 
              Icon={FiInstagram} 
              label="Visit our Instagram page"
              onClick={() => window.open('https://instagram.com', '_blank')}
            />
          </div>
          <p className="text-gray-400">© 2024 TravelEase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;